import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEtudiantDto, UpdateEtudiantDto } from './dto/create-etudiant.dto';
import { RoleUser, NiveauEtudes } from 'generated/prisma';
import { UtilisateursService } from 'src/users/utilisateurs.service';

@Injectable()
export class EtudiantService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly utilisateursService: UtilisateursService,
  ) {}

  /**
   * Génère un code permanent unique pour l'étudiant
   * Format: ETU-YYYY-XXXXXX (ETU + année + 6 chiffres aléatoires)
   */
  private async generatenumeroEtudiant(): Promise<string> {
    const currentYear = new Date().getFullYear();
    let numeroEtudiant: string = '';
    let isUnique = false;

    while (!isUnique) {
      const randomNumber = Math.floor(100000 + Math.random() * 900000);
      numeroEtudiant = `ETU-${currentYear}-${randomNumber}`;
      
      // Vérifier l'unicité dans la base de données
      const existingEtudiant = await this.prisma.etudiant.findUnique({
        where: { numeroEtudiant: numeroEtudiant }
      });
      
      if (!existingEtudiant) {
        isUnique = true;
      }
    }

    return numeroEtudiant;
  }

  /**
   * Crée un nouvel étudiant avec son utilisateur associé
   */
  async create(createEtudiantDto: CreateEtudiantDto) {
    try {
      // 1. Créer d'abord l'utilisateur avec le rôle ETUDIANT
      const userData = {
        nom: createEtudiantDto.nom,
        prenom: createEtudiantDto.prenom,
        email: createEtudiantDto.email,
        dateInscription: new Date(),
        derniereConnexion: new Date(),
        estValide: true,
        estActif: true,
        motDePasse: 'MotDePasse123', // Assurez-vous que le mot de passe est hashé avant de l'envoyer
        role: RoleUser.ETUDIANT,
        telephone: createEtudiantDto.telephone || null,
        image: createEtudiantDto.image || 'https://example.com/default-avatar.png', // URL par défaut pour l'image

      };

      const user = await this.utilisateursService.create(userData);
      
      if (!user || !user.id) {
        throw new BadRequestException('Erreur lors de la création de l\'utilisateur');
      }

      // 2. Générer le code permanent unique
      const numeroEtudiant = await this.generatenumeroEtudiant();

      // 3. Créer l'étudiant avec les données spécifiques
      const etudiant = await this.prisma.etudiant.create({
        data: {
          userId: user.id,
          numeroEtudiant,
          dateNaissance: new Date(createEtudiantDto.dateNaissance),
          niveauEtudes: createEtudiantDto.niveauEtudes || NiveauEtudes.LICENCE_1,
          filiereId: createEtudiantDto.filiereId,
        },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              nom: true,
              prenom: true,
              telephone: true,
              role: true,
              estActif: true,
              
            }
          }
        }
      });

      return {
        success: true,
        message: 'Étudiant créé avec succès',
        data: etudiant
      };

    } catch (error) {
      // Si erreur, nettoyer l'utilisateur créé si possible
      if (error.code === 'P2002') {
        throw new BadRequestException('Un étudiant avec ces informations existe déjà');
      }
      
      throw new BadRequestException(`Erreur lors de la création de l'étudiant: ${error.message}`);
    }
  }

  /**
   * Récupère tous les étudiants avec pagination et recherche
   */
  async findAll(options: { 
    page?: number; 
    limit?: number; 
    search?: string;
    departement?: string;
    faculte?: string;
    niveauEtudes?: NiveauEtudes;
    universiteId?: string;
  }) {
    const page = options.page || 1;
    const limit = options.limit || 10;
    const skip = (page - 1) * limit;

    // Construire les conditions de recherche
    const whereConditions: any = {};

    if (options.search) {
      whereConditions.OR = [
        { numeroEtudiant: { contains: options.search, mode: 'insensitive' } },
        { user: { nom: { contains: options.search, mode: 'insensitive' } } },
        { user: { prenom: { contains: options.search, mode: 'insensitive' } } },
        { user: { email: { contains: options.search, mode: 'insensitive' } } },
      ];
    }

    if (options.departement) {
      whereConditions.departement = { contains: options.departement, mode: 'insensitive' };
    }

    if (options.faculte) {
      whereConditions.faculte = { contains: options.faculte, mode: 'insensitive' };
    }

    if (options.niveauEtudes) {
      whereConditions.niveauEtudes = options.niveauEtudes;
    }

    if (options.universiteId) {
      whereConditions.user = {
        universiteId: options.universiteId
      };
    }

    const [etudiants, total] = await Promise.all([
      this.prisma.etudiant.findMany({
        where: whereConditions,
        skip,
        take: limit,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              nom: true,
              prenom: true,
              telephone: true,
              role: true,
              estActif: true,
              derniereConnexion: true,
            }
          }
        },
        orderBy: {
          dateInscription: 'desc'
        }
      }),
      this.prisma.etudiant.count({ where: whereConditions })
    ]);

    return {
      success: true,
      data: etudiants,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  /**
   * Récupère un étudiant par son ID
   */
  async findOne(id: string) {
    const etudiant = await this.prisma.etudiant.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            nom: true,
            prenom: true,
            telephone: true,
            role: true,
            estActif: true,
            derniereConnexion: true,
            
          }
        }
      }
    });

    if (!etudiant) {
      throw new NotFoundException('Étudiant non trouvé');
    }

    return {
      success: true,
      data: etudiant
    };
  }

  /**
   * Récupère un étudiant par son numéro étudiant (code permanent)
   */
  async findByNumeroEtudiant(numeroEtudiant: string) {
    const etudiant = await this.prisma.etudiant.findUnique({
      where: { numeroEtudiant },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            nom: true,
            prenom: true,
            telephone: true,
            role: true,
            estActif: true,
            derniereConnexion: true,
            
          }
        }
      }
    });

    if (!etudiant) {
      throw new NotFoundException('Étudiant non trouvé avec ce numéro');
    }

    return {
      success: true,
      data: etudiant
    };
  }

  /**
   * Récupère un étudiant par l'ID de son utilisateur
   */
  async findByUserId(etudiantId: string) {
    const etudiant = await this.prisma.etudiant.findUnique({
      where: { id: etudiantId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            nom: true,
            prenom: true,
            telephone: true,
            role: true,
            estActif: true,
            derniereConnexion: true,
            
          }
        }
      }
    });

    if (!etudiant) {
      throw new NotFoundException('Étudiant non trouvé pour cet utilisateur');
    }

    return {
      success: true,
      data: etudiant
    };
    
  }

  /**
   * Met à jour les informations d'un étudiant
   */
  async update(id: string, updateEtudiantDto: UpdateEtudiantDto) {
    try {
      // Vérifier que l'étudiant existe
      const existingEtudiant = await this.prisma.etudiant.findUnique({
        where: { id },
        include: { user: true }
      });

      if (!existingEtudiant) {
        throw new NotFoundException('Étudiant non trouvé');
      }

      // Préparer les données à mettre à jour
      const updateData: any = {};

      if (updateEtudiantDto.dateNaissance) {
        updateData.dateNaissance = new Date(updateEtudiantDto.dateNaissance);
      }

      if (updateEtudiantDto.departement !== undefined) {
        updateData.departement = updateEtudiantDto.departement;
      }

      if (updateEtudiantDto.faculte !== undefined) {
        updateData.faculte = updateEtudiantDto.faculte;
      }

      if (updateEtudiantDto.specialite !== undefined) {
        updateData.specialite = updateEtudiantDto.specialite;
      }

      if (updateEtudiantDto.niveauEtudes) {
        updateData.niveauEtudes = updateEtudiantDto.niveauEtudes;
      }

      // Mettre à jour l'étudiant
      const etudiant = await this.prisma.etudiant.update({
        where: { id },
        data: updateData,
        include: {
          user: {
            select: {
              id: true,
              email: true,
              nom: true,
              prenom: true,
              telephone: true,
              role: true,
              estActif: true,
            
            }
          }
        }
      });

      // Mettre à jour les données utilisateur si fournies
      if (updateEtudiantDto.userData) {
        await this.utilisateursService.update(existingEtudiant.userId, updateEtudiantDto.userData);
      }

      return {
        success: true,
        message: 'Étudiant mis à jour avec succès',
        data: etudiant
      };

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(`Erreur lors de la mise à jour: ${error.message}`);
    }
  }

  /**
   * Supprime un étudiant (soft delete en désactivant l'utilisateur)
   */
  async remove(id: string) {
    try {
      const etudiant = await this.prisma.etudiant.findUnique({
        where: { id },
        include: { user: true }
      });

      if (!etudiant) {
        throw new NotFoundException('Étudiant non trouvé');
      }
      // Supprimer l'étudiant
      await this.prisma.etudiant.delete({
        where: { id }
      });
      //supprimer l'utilisateur associé
      await this.utilisateursService.remove(etudiant.userId);

      return {
        success: true,
        message: 'Étudiant supprimé avec succès'
      };

    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new BadRequestException(`Erreur lors de la suppression: ${error.message}`);
    }
  }

  
 

  /**
   * Récupère les statistiques des étudiants
   */
  async getStatistics() {
    // Conditions de base pour les requêtes
    const totalEtudiants = await this.prisma.etudiant.count({
      where: {
        user: {
          role: RoleUser.ETUDIANT,
        }
      }
    });
    //etudiants actifs
    const etudiantsActifs = await this.prisma.etudiant.count({
      where: {
        user: {
          role: RoleUser.ETUDIANT,
          estActif: true,
        }
      }
    });
    //etudiants inactifs
    const etudiantsInactifs = await this.prisma.etudiant.count({
      where: {
        user: {
          role: RoleUser.ETUDIANT,
          estActif: false,    
        }
      }
    });
    //etudiants par niveau d'études
    const etudiantsParNiveau = await this.prisma.etudiant.groupBy({
      by: ['niveauEtudes'],
      _count: {
        id: true,
      },
      where: {
        user: {
          role: RoleUser.ETUDIANT,
          estActif: true,    
        }
      }
    });
    return {
      totalEtudiants,
      etudiantsActifs,
      etudiantsInactifs,
      etudiantsParNiveau,
    };
  }
   
}