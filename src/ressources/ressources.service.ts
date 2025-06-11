// ressources.service.ts
import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRessourceDto, UpdateRessourceDto, SearchRessourceDto } from './dto/create-ressource.dto';
import { Prisma, Ressource } from 'generated/prisma';

@Injectable()
export class RessourcesService {
  private readonly logger = new Logger(RessourcesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(createRessourceDto: CreateRessourceDto): Promise<Ressource> {
    try {
      // Vérifier si une ressource existe déjà avec le même titre et le même auteur
      if (createRessourceDto.auteurId) {
        const existingRessource = await this.prisma.ressource.findFirst({
          where: {
            titre: createRessourceDto.titre,
            auteurId: createRessourceDto.auteurId,
          },
        });

        if (existingRessource) {
          throw new BadRequestException('Une ressource avec le même titre existe déjà pour cet auteur');
        }
      }

      // Validation des données auteur
    //   if (!createRessourceDto.auteurId && 
    //       (!createRessourceDto.nomAuteurExterne || !createRessourceDto.prenomAuteurExterne)) {
    //     throw new BadRequestException('Vous devez spécifier soit un auteur interne (auteurId) ou un auteur externe (nom et prénom)');
    //   }

      // Préparer l'objet data sans inclure auteurId si undefined
      const data: any = {
        titre: createRessourceDto.titre,
        description: createRessourceDto.description,
        type: createRessourceDto.type,
        langue: createRessourceDto.langue || 'fr',
        urlFichier: createRessourceDto.urlFichier,
        format: createRessourceDto.format,
        motsCles: createRessourceDto.motsCles,
        universiteId: createRessourceDto.universiteId,
        image: createRessourceDto.image,
        niveauAcces: createRessourceDto.niveauAcces || 'PUBLIC',
        urlFichierLocal: createRessourceDto.urlFichierLocal,
        datePublication: new Date(),
      };
      if (createRessourceDto.auteurId) {
        data.auteurId = createRessourceDto.auteurId;
      }

      return this.prisma.ressource.create({
        data,
        include: {
          auteur: true,
        },
      });
    } catch (error) {
      this.logger.error(`Erreur lors de la création de la ressource: ${error.message}`);
      throw error;
    }
  }

  async findAll(options: SearchRessourceDto = {}) {
    const {
      page = 1,
      limit = 10,
      search = '',
      type,
      langue,
      universiteId,
      niveauAcces,
      estValide,
      estArchive,
      auteurId,
      orderBy = 'dateCreation',
      orderDirection = 'desc',
    } = options;

    const skip = (page - 1) * limit;

    // Construire la requête dynamiquement
    const where: Prisma.RessourceWhereInput = {};

    // Recherche textuelle
    if (search) {
      where.OR = [
        { titre: { contains: search } },
        { description: { contains: search } },
        { motsCles: { contains: search } },
        { nomAuteurExterne: { contains: search } },
        { prenomAuteurExterne: { contains: search } },
      ];
    }

    // Filtres spécifiques
    if (type) where.type = type;
    if (langue) where.langue = langue;
    if (universiteId) where.universiteId = universiteId;
    if (niveauAcces) where.niveauAcces = niveauAcces;
    if (estValide !== undefined) where.estValide = estValide;
    if (estArchive !== undefined) where.estArchive = estArchive;
    if (auteurId) where.auteurId = auteurId;

    try {
      // Récupération du nombre total pour la pagination
      const total = await this.prisma.ressource.count({ where });

      // Récupération des ressources
      const ressources = await this.prisma.ressource.findMany({
        where,
        skip,
        take: +limit,
        orderBy: { [orderBy]: orderDirection },
        include: {
          auteur: {
            select: {
              id: true,
              nom: true,
              prenom: true,
              role: true,
            },
          },
          
          _count: {
            select: {
              favoris: true,
              commentaires: true,
              notations: true,
              historiques: true,
            },
          },
        },
      });

      // Calculer les notes moyennes
      const ressourcesAvecNotes = await Promise.all(
        ressources.map(async (ressource) => {
          const notations = await this.prisma.notation.findMany({
            where: { ressourceId: ressource.id },
            select: { note: true },
          });

          const noteMoyenne =
            notations.length > 0
              ? notations.reduce((sum, notation) => sum + notation.note, 0) / notations.length
              : 0;

          return {
            ...ressource,
            noteMoyenne: parseFloat(noteMoyenne.toFixed(1)),
          };
        }),
      );

      return {
        data: ressourcesAvecNotes,
        meta: {
          total,
          page: Number(page),
          limit: Number(limit),
          pages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération des ressources: ${error.message}`);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const ressource = await this.prisma.ressource.findUnique({
        where: { id },
        include: {
          auteur: {
            select: {
              id: true,
              nom: true,
              prenom: true,
              role: true,
            },
          },
          
          commentaires: {
            include: {
              user: {
                select: {
                  id: true,
                  nom: true,
                  prenom: true,
                  role: true,
                }
              }
            },
            orderBy: {
              dateCreation: 'desc'
            },
          },
          notations: {
            select: {
              note: true,
              dateNotation: true,
              userId: true,
            }
          },
          _count: {
            select: {
              favoris: true,
              commentaires: true,
              notations: true,
              historiques: true,
            },
          },
        },
      });

      if (!ressource) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

     

      return {
        ...ressource,
      };
    } catch (error) {
      this.logger.error(`Erreur lors de la récupération de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async update(id: string, updateRessourceDto: UpdateRessourceDto) {
    try {
      // Vérifier si la ressource existe
      const ressourceExists = await this.prisma.ressource.findUnique({
        where: { id },
      });

      if (!ressourceExists) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      return this.prisma.ressource.update({
        where: { id },
        data: updateRessourceDto,
        include: {
          auteur: true,
        },
      });
    } catch (error) {
      this.logger.error(`Erreur lors de la mise à jour de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      // Vérifier si la ressource existe
      const ressourceExists = await this.prisma.ressource.findUnique({
        where: { id },
      });

      if (!ressourceExists) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      // Option 1: Suppression définitive (décommenter si nécessaire)
      // Supprimer d'abord les données associées
      await this.prisma.$transaction([
        this.prisma.favori.deleteMany({ where: { ressourceId: id } }),
        this.prisma.commentaire.deleteMany({ where: { ressourceId: id } }),
        this.prisma.notation.deleteMany({ where: { ressourceId: id } }),
        this.prisma.historiqueAcces.deleteMany({ where: { ressourceId: id } }),
        this.prisma.collectionRessource.deleteMany({ where: { ressourceId: id } }),
        this.prisma.ressource.delete({ where: { id } }),
      ]);

      // Option 2: Archiver au lieu de supprimer
      // return this.prisma.ressource.update({
      //   where: { id },
      //   data: { estArchive: true },
      // });

      return { id, message: 'Ressource supprimée avec succès' };
    } catch (error) {
      this.logger.error(`Erreur lors de la suppression de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async findByAuteur(auteurId: string, options: SearchRessourceDto = {}) {
    return this.findAll({
      ...options,
      auteurId,
    });
  }

  async findByUniversite(universiteId: string, options: SearchRessourceDto = {}) {
    return this.findAll({
      ...options,
      universiteId,
    });
  }

  async toggleValidation(id: string) {
    try {
      const ressource = await this.prisma.ressource.findUnique({
        where: { id },
      });

      if (!ressource) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      return this.prisma.ressource.update({
        where: { id },
        data: { estValide: !ressource.estValide },
      });
    } catch (error) {
      this.logger.error(`Erreur lors du changement de validation de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async toggleArchivage(id: string) {
    try {
      const ressource = await this.prisma.ressource.findUnique({
        where: { id },
      });

      if (!ressource) {
        throw new NotFoundException(`Ressource avec l'ID ${id} non trouvée`);
      }

      return this.prisma.ressource.update({
        where: { id },
        data: { estArchive: !ressource.estArchive },
      });
    } catch (error) {
      this.logger.error(`Erreur lors du changement d'archivage de la ressource ${id}: ${error.message}`);
      throw error;
    }
  }

  async enregistrerAcces(data: { 
    userId: string; 
    ressourceId: string; 
    typeAcces: 'CONSULTATION' | 'TELECHARGEMENT' | 'CITATION' | 'PARTAGE';
    ipAcces: string;
    universiteSrc?: string;
  }) {
    try {
      return this.prisma.historiqueAcces.create({
        data: {
          userId: data.userId,
          ressourceId: data.ressourceId,
          typeAcces: data.typeAcces,
          universiteSrc: data.universiteSrc,
        },
      });
    } catch (error) {
      this.logger.error(`Erreur lors de l'enregistrement de l'accès: ${error.message}`);
      throw error;
    }
  }
}