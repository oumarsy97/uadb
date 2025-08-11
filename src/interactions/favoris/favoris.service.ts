import { Injectable } from '@nestjs/common';
import { CreateFavorisDto, FavorisQueryDto, UpdateFavorisDto } from './dto/create-favoris.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavorisService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createFavorisDto: CreateFavorisDto) {
    const { ressourceId, universiteRess, universiteUser, userId } = createFavorisDto;
    
    if (!userId) {
      throw new Error("userId is required and must be a string.");
    }

    try {
      const currentUniversity = process.env.CURRENT_UNIVERSITY || 'uadb';
      const isExternal = universiteRess && universiteRess !== currentUniversity;
      
      let existingFavoris;
      let favorisData;

      if (isExternal) {
        // Pour les ressources externes
        existingFavoris = await this.prismaService.favori.findUnique({
          where: {
            userId_externalRessourceId_universiteRess: {
              userId,
              externalRessourceId: ressourceId,
              universiteRess,
            },
          },
        });

        favorisData = {
          userId,
          ressourceId: null,
          externalRessourceId: ressourceId,
          universiteRess,
        };
      } else {
        // Pour les ressources locales
        existingFavoris = await this.prismaService.favori.findUnique({
          where: {
            userId_ressourceId: {
              userId,
              ressourceId,
            },
          },
        });

        favorisData = {
          userId,
          ressourceId,
          externalRessourceId: null,
          universiteRess: currentUniversity,
        };
      }

      if (existingFavoris) {
        // Toggle off - supprimer
        return await this.prismaService.favori.delete({
          where: { id: existingFavoris.id },
        });
      } else {
        // Toggle on - créer
        return await this.prismaService.favori.create({
          data: favorisData,
          include: {
            ressource: true,
            user: true,
          },
        });
      }
    } catch (error) {
      console.error('Erreur création favori:', error);
      throw new Error(`Erreur lors de la gestion du favori: ${error.message}`);
    }
  }

  /**
   * Récupère tous les favoris d'un utilisateur avec séparation local/externe
   */
  async findAllByUser(userId: string) {
    const favoris = await this.prismaService.favori.findMany({
      where: { userId },
      include: {
        ressource: true,
        user: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    const favorisLocaux = favoris.filter(f => f.ressourceId !== null);
    const favorisExternes = favoris.filter(f => f.externalRessourceId !== null);

    return {
      favorisLocaux: favorisLocaux.map(f => ({
        ...f,
        type: 'local',
        resourceId: f.ressourceId,
        ressourceData: f.ressource,
        isLocal: true,
      })),
      favorisExternes: favorisExternes.map(f => ({
        ...f,
        type: 'external',
        resourceId: f.externalRessourceId,
        ressourceData: {
          id: f.externalRessourceId,
          universiteSource: f.universiteRess,
        },
        isLocal: false,
        sourceUniversite: f.universiteRess,
      })),
      total: favoris.length,
    };
  }

  /**
   * Récupère tous les favoris avec informations détaillées
   */
  async findAll() {
    const favoris = await this.prismaService.favori.findMany({
      include: {
        ressource: true,
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return favoris.map(favori => ({
      ...favori,
      isRessourceExternal: favori.ressourceId === null,
      resourceId: favori.ressourceId || favori.externalRessourceId,
      ressourceInfo: favori.ressource || {
        id: favori.externalRessourceId,
        isExternal: true,
        universite: favori.universiteRess,
      },
    }));
  }

  /**
   * Vérifie si une ressource est en favori pour un utilisateur
   */
  async isFavorite(userId: string, ressourceId: string, universiteRess?: string): Promise<boolean> {
    const currentUniversity = process.env.CURRENT_UNIVERSITY || 'uadb';
    const isExternal = universiteRess && universiteRess !== currentUniversity;
    
    let favori;
    
    if (isExternal) {
      favori = await this.prismaService.favori.findUnique({
        where: {
          userId_externalRessourceId_universiteRess: {
            userId,
            externalRessourceId: ressourceId,
            universiteRess,
          },
        },
      });
    } else {
      favori = await this.prismaService.favori.findUnique({
        where: {
          userId_ressourceId: {
            userId,
            ressourceId,
          },
        },
      });
    }
    
    return favori !== null;
  }

  /**
   * Récupère les favoris par université source
   */
  async findByUniversite(universiteRess: string) {
    return await this.prismaService.favori.findMany({
      where: { universiteRess },
      include: {
        ressource: true,
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Récupère les favoris externes seulement
   */
  async findExternalFavoris() {
    return await this.prismaService.favori.findMany({
      where: {
        externalRessourceId: { not: null },
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Récupère les favoris locaux seulement
   */
  async findLocalFavoris() {
    return await this.prismaService.favori.findMany({
      where: {
        ressourceId: { not: null },
      },
      include: {
        ressource: true,
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Récupère les statistiques des favoris
   */
  async getStats() {
    const [
      totalFavoris,
      favorisLocaux,
      favorisExternes,
    ] = await Promise.all([
      this.prismaService.favori.count(),
      this.prismaService.favori.count({
        where: { ressourceId: { not: null } },
      }),
      this.prismaService.favori.count({
        where: { externalRessourceId: { not: null } },
      }),
    ]);

    const universiteStats = await this.prismaService.favori.groupBy({
      by: ['universiteRess'],
      _count: {
        id: true,
      },
      where: {
        universiteRess: { not: null },
      },
    });

    return {
      total: totalFavoris,
      locaux: favorisLocaux,
      externes: favorisExternes,
      parUniversite: universiteStats.map(stat => ({
        universite: stat.universiteRess,
        count: stat._count.id,
      })),
    };
  }

  findOne(id: string) {
    return this.prismaService.favori.findUnique({
      where: { id },
      include: {
        ressource: true,
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });
  }

  async update(id: string, updateFavorisDto: UpdateFavorisDto) {
    return await this.prismaService.favori.update({
      where: { id },
      data: updateFavorisDto,
    });
  }

  async remove(id: string) {
    return await this.prismaService.favori.delete({
      where: { id },
    });
  }

  /**
   * Supprime tous les favoris d'un utilisateur
   */
  async removeAllByUser(userId: string) {
    return await this.prismaService.favori.deleteMany({
      where: { userId },
    });
  }

  /**
   * Supprime tous les favoris d'une ressource locale
   */
  async removeAllByRessource(ressourceId: string) {
    return await this.prismaService.favori.deleteMany({
      where: { ressourceId },
    });
  }

  /**
   * Supprime tous les favoris d'une ressource externe
   */
  async removeAllByExternalRessource(externalRessourceId: string, universiteRess: string) {
    return await this.prismaService.favori.deleteMany({
      where: { 
        externalRessourceId,
        universiteRess,
      },
    });
  }

  /**
   * Récupère les favoris d'une ressource locale avec infos sur les utilisateurs
   */
  async getFavoritesByRessource(ressourceId: string) {
    const favoris = await this.prismaService.favori.findMany({
      where: { ressourceId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return favoris.map(favori => ({
      ...favori,
      userInfo: favori.user,
      type: 'local',
    }));
  }

  /**
   * Récupère les favoris d'une ressource externe avec infos sur les utilisateurs
   */
  async getFavoritesByExternalRessource(externalRessourceId: string, universiteRess: string) {
    const favoris = await this.prismaService.favori.findMany({
      where: { 
        externalRessourceId,
        universiteRess,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return favoris.map(favori => ({
      ...favori,
      userInfo: favori.user,
      type: 'external',
      ressourceData: {
        id: favori.externalRessourceId,
        universiteSource: favori.universiteRess,
      },
    }));
  }

  /**
   * Méthode utilitaire pour obtenir l'ID de ressource unifié
   */
  getResourceId(favori: any): string {
    return favori.ressourceId || favori.externalRessourceId;
  }

  /**
   * Méthode utilitaire pour savoir si un favori est externe
   */
  isExternalFavorite(favori: any): boolean {
    return favori.externalRessourceId !== null;
  }
}