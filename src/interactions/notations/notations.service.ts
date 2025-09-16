import { Injectable, BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface CreateNotationData {
  userId?: string;
  externUserId?: string;
  universiteUser?: string;
  ressourceId: string;
  note: number;
  universite: string;
}

interface UpdateNotationData {
  note?: number;
  userId?: string;
}

interface NotationWithRelations {
  id: string;
  userId?: string;
  externUserId?: string;
  universiteUser?: string;
  ressourceId: string;
  note: number;
  createdAt: Date;
  updatedAt: Date;
  user?: {
    id: string;
    nom: string;
    prenom: string;
    email: string;
  };
  ressource?: {
    id: string;
    titre: string;
  };
}

@Injectable()
export class NotationsService {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async createNotation(data: CreateNotationData) {
        try {
            console.log(data.universiteUser);
            // Validation des données
            if (!data.ressourceId) {
                throw new BadRequestException('ID de ressource requis');
            }
            
            if (!data.note || data.note < 1 || data.note > 5) {
                throw new BadRequestException('La note doit être comprise entre 1 et 5');
            }

            // Vérifier que la ressource existe
            const ressource = await this.prisma.ressource.findUnique({
                where: { id: data.ressourceId },
            });

            if (!ressource) {
                throw new NotFoundException('Ressource non trouvée');
            }

            // Déterminer si c'est un utilisateur interne ou externe
            const isInternalUser = process.env.CURRENT_UNIVERSITY?.toLowerCase()  === data.universiteUser?.toLowerCase();
            const isExternalUser = !isInternalUser;
            console.log(`isInternalUser: ${isInternalUser}, isExternalUser: ${isExternalUser}`);

            if (!isInternalUser && !isExternalUser) {
                throw new BadRequestException('Utilisateur interne ou externe requis');
            }

            if (isInternalUser && isExternalUser) {
                throw new BadRequestException('Un utilisateur ne peut pas être à la fois interne et externe');
            }

            // Vérifier si une notation existe déjà
            const existingNotation = await this.findExistingNotation(
                data.ressourceId, 
                data.userId, 
                data.externUserId, 
                data.universiteUser
            );

            if (existingNotation) {
                throw new BadRequestException('Une notation existe déjà pour cette ressource par cet utilisateur');
            }

            // Créer la notation
            const notationData: any = {
                ressourceId: data.ressourceId,
                note: data.note,
            };

            if (isInternalUser) {
                // Utilisateur interne (connecté à cette université)
                notationData.userId = data.userId;
               
               
            } else {
                // Utilisateur externe (venant d'une autre université)
                notationData.externUserId = data.userId
                notationData.universiteUser = data.universiteUser;

            }

            const notation = await this.prisma.notation.create({
                data: notationData,
                include: {
                    user: isInternalUser ? {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            email: true,
                        }
                    } : false,
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                        }
                    }
                }
            });

            return {
                data: notation,
            };

        } catch (error) {
            if (error instanceof BadRequestException || error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(`Erreur lors de la création de la notation: ${error.message}`);
        }
    }

    async getNotationsByRessourceId(ressourceId: string, options?: { page?: number; limit?: number }) {
        try {
            const page = options?.page || 1;
            const limit = options?.limit || 10;
            const offset = (page - 1) * limit;

            // Récupérer les notations avec informations utilisateur
            const notations = await this.prisma.notation.findMany({
                where: { ressourceId },
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            email: true,
                        }
                    },
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                        }
                    }
                },
                orderBy: { createdAt: 'desc' },
                skip: offset,
                take: limit
            });

            // Compter le total
            const total = await this.prisma.notation.count({
                where: { ressourceId }
            });

        
            return {
                data: {
                    notations: notations,
                    pagination: {
                        page,
                        limit,
                        total,
                        totalPages: Math.ceil(total / limit)
                    },
                   
                }
            };

        } catch (error) {
            throw new BadRequestException(`Erreur lors de la récupération des notations: ${error.message}`);
        }
    }

    async getUserNotations(userId: string, options: { page: number; limit: number }) {
        try {
            const { page, limit } = options;
            const offset = (page - 1) * limit;

            // Vérifier que l'utilisateur existe
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) {
                throw new NotFoundException('Utilisateur non trouvé');
            }

            const notations = await this.prisma.notation.findMany({
                where: { userId },
                include: {
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            description: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' },
                skip: offset,
                take: limit
            });

            const total = await this.prisma.notation.count({
                where: { userId }
            });

            return {
                data: {
                    notations: notations,
                    pagination: {
                        page,
                        limit,
                        total,
                        totalPages: Math.ceil(total / limit)
                    },
                    user: {
                        id: user.id,
                    }
                }
            };

        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(`Erreur lors de la récupération des notations utilisateur: ${error.message}`);
        }
    }

    async findOneNotation(id: string) {
        try {
            const notation = await this.prisma.notation.findUnique({
                where: { id },
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            email: true,
                        }
                    },
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            description: true
                        }
                    }
                }
            });

            if (!notation) {
                throw new NotFoundException('Notation non trouvée');
            }

            return {
                success: true,
                data: notation,
            };

        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new BadRequestException(`Erreur lors de la récupération de la notation: ${error.message}`);
        }
    }

    async updateNotation(id: string, data: UpdateNotationData) {
        try {
            // Récupérer la notation existante
            const existingNotation = await this.prisma.notation.findUnique({
                where: { id },
                select: { 
                    id: true, 
                    userId: true, 
                    universiteUser: true 
                }
            });

            if (!existingNotation) {
                throw new NotFoundException('Notation non trouvée');
            }

            // Vérifier les droits de modification
            if (existingNotation.userId && existingNotation.userId !== data.userId) {
                throw new ForbiddenException('Vous ne pouvez modifier que vos propres notations');
            }

            // Validation de la note si fournie
            if (data.note && (data.note < 1 || data.note > 5)) {
                throw new BadRequestException('La note doit être comprise entre 1 et 5');
            }

            const updateData: any = {};
            if (data.note !== undefined) updateData.note = data.note;

            const updatedNotation = await this.prisma.notation.update({
                where: { id },
                data: updateData,
                include: {
                    user: existingNotation.userId ? {
                        select: {
                            id: true,
                            nom: true,
                            prenom: true,
                            email: true,
                        }
                    } : false,
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                        }
                    }
                }
            });

            return {
                data: updatedNotation,
            };

        } catch (error) {
            if (error instanceof NotFoundException || error instanceof ForbiddenException || error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(`Erreur lors de la mise à jour de la notation: ${error.message}`);
        }
    }

    async deleteNotation(id: string, userId?: string) {
        try {
            const existingNotation = await this.prisma.notation.findUnique({
                where: { id },
                select: { 
                    id: true, 
                    userId: true, 
                    universiteUser: true 
                }
            });

            if (!existingNotation) {
                throw new NotFoundException('Notation non trouvée');
            }

            // Vérifier les droits de suppression pour les utilisateurs internes
            if (existingNotation.userId && userId && existingNotation.userId !== userId) {
                throw new ForbiddenException('Vous ne pouvez supprimer que vos propres notations');
            }

            await this.prisma.notation.delete({
                where: { id }
            });

            return {
                success: true,
                message: 'Notation supprimée avec succès'
            };

        } catch (error) {
            if (error instanceof NotFoundException || error instanceof ForbiddenException) {
                throw error;
            }
            throw new BadRequestException(`Erreur lors de la suppression de la notation: ${error.message}`);
        }
    }

    async getNotationStats(ressourceId: string) {
        try {
            const stats = await this.prisma.notation.aggregate({
                where: { ressourceId },
                _avg: { note: true },
                _count: { id: true },
                _min: { note: true },
                _max: { note: true }
            });

            // Statistiques détaillées par note
            const noteDistribution = await this.prisma.notation.groupBy({
                by: ['note'],
                where: { ressourceId },
                _count: { id: true },
                orderBy: { note: 'asc' }
            });

            // Statistiques par type d'utilisateur
            const internalCount = await this.prisma.notation.count({
                where: { 
                    ressourceId,
                    userId: { not: null }
                }
            });

            const externalCount = await this.prisma.notation.count({
                where: { 
                    ressourceId,
                }
            });

            // Statistiques par université (pour les utilisateurs externes)
            const universiteStats = await this.prisma.notation.groupBy({
                by: ['universiteUser'],
                where: { 
                    ressourceId,
                    universiteUser: { not: null }
                },
                _count: { id: true },
                _avg: { note: true }
            });

            return {
                success: true,
                data: {
                    moyenne: stats._avg.note ? Number(stats._avg.note.toFixed(2)) : 0,
                    totalNotations: stats._count.id,
                    noteMin: stats._min.note || 0,
                    noteMax: stats._max.note || 0,
                    repartitionNotes: noteDistribution.reduce((acc, item) => {
                        acc[`note${item.note}`] = item._count.id;
                        return acc;
                    }, {} as Record<string, number>),
                    utilisateursInternes: internalCount,
                    utilisateursExternes: externalCount,
                    repartitionUniversites: universiteStats.map(stat => ({
                        universite: stat.universiteUser,
                        nombreNotations: stat._count.id,
                        moyenneNote: stat._avg.note ? Number(stat._avg.note.toFixed(2)) : 0
                    }))
                }
            };

        } catch (error) {
            throw new BadRequestException(`Erreur lors de la récupération des statistiques: ${error.message}`);
        }
    }


    // Méthodes utilitaires privées

    private async findExistingNotation(
        ressourceId: string, 
        userId?: string, 
        externUserId?: string, 
        universiteUser?: string
    ) {
        const whereClause: any = { ressourceId };

        if (userId) {
            whereClause.userId = userId;
        } else if (externUserId && universiteUser) {
            whereClause.externUserId = externUserId;
        }

        return this.prisma.notation.findFirst({ where: whereClause });
    }

}