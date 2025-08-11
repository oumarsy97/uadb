import { Injectable } from '@nestjs/common';
import { TypeAcces, HistoriqueAcces } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistoriqueAccesService {
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    /**
     * Enregistre l'accès à une ressource
     * @param userId - L'ID de l'utilisateur
     * @param ressourceId - L'ID de la ressource
     * @param typeacces - Type d'accès (lecture, écriture, etc.)
     * @param universiteRess - Université source de la ressource
     */
    async enregistrerAcces(
        userId: string, 
        ressourceId: string, 
        typeacces: TypeAcces, 
        universiteRess: string
    ): Promise<HistoriqueAcces> {
        try {
            // Validation des paramètres requis
            if (!userId || !ressourceId || !typeacces || !universiteRess) {
                throw new Error('Paramètres manquants : userId, ressourceId, typeacces et universiteRess sont requis');
            }

            // Vérifier si l'utilisateur existe
            const userExists = await this.prismaService.user.findUnique({
                where: { id: userId },
            });
            
            if (!userExists) {
                throw new Error('Utilisateur non trouvé');
            }

            // Déterminer si c'est une ressource interne ou externe
            const isInternalResource = universiteRess === process.env.CURRENT_UNIVERSITY?.toLowerCase() || universiteRess === 'uadb'.toLowerCase();
            
            let historiqueData: any = {
                userId,
                typeAcces: typeacces,
                universiteRess: universiteRess,
            };

            if (isInternalResource) {
                // Pour les ressources internes, utiliser ressourceId
                historiqueData.ressourceId = ressourceId;
                
                // Optionnel : vérifier si la ressource interne existe
                // const ressourceExists = await this.prismaService.ressource.findUnique({
                //     where: { id: ressourceId },
                // });
                
                // if (!ressourceExists) {
                //     throw new Error('Ressource interne non trouvée');
                // }
            } else {
                // Pour les ressources externes, utiliser externRessourceId
                historiqueData.externRessourceId = ressourceId;
            }

            const historique = await this.prismaService.historiqueAcces.create({
                data: historiqueData,
            });

           
            
            return historique;
            
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'accès:', error);
            throw new Error(`Impossible d'enregistrer l'accès à la ressource: ${error.message}`);
        }
    }

    /**
     * Récupère l'historique d'accès d'un utilisateur
     * @param userId - L'ID de l'utilisateur
     * @param limit - Nombre maximum d'enregistrements à retourner
     */
    async getHistoriqueUtilisateur(userId: string, limit: number = 50): Promise<HistoriqueAcces[]> {
        try {
            return await this.prismaService.historiqueAcces.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                take: +limit,
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            email: true,
                        }
                    },
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            description: true,
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'historique:', error);
            throw new Error('Impossible de récupérer l\'historique d\'accès');
        }
    }

    /**
     * Récupère l'historique d'accès pour une ressource spécifique
     * @param ressourceId - L'ID de la ressource
     * @param isExternal - Si c'est une ressource externe
     * @param limit - Nombre maximum d'enregistrements à retourner
     */
    async getHistoriqueRessource(
        ressourceId: string, 
        isExternal: boolean = false, 
        limit: number = 50
    ): Promise<HistoriqueAcces[]> {
        try {
            const whereCondition = isExternal 
                ? { externRessourceId: ressourceId }
                : { ressourceId: ressourceId };

            return await this.prismaService.historiqueAcces.findMany({
                where: whereCondition,
                orderBy: { createdAt: 'desc' },
                take: limit,
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            email: true,
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Erreur lors de la récupération de l\'historique de la ressource:', error);
            throw new Error('Impossible de récupérer l\'historique de la ressource');
        }
    }

    /**
     * Compte le nombre d'accès pour une ressource
     * @param ressourceId - L'ID de la ressource
     * @param isExternal - Si c'est une ressource externe
     * @param typeAcces - Type d'accès spécifique (optionnel)
     */
    async compterAcces(
        ressourceId: string, 
        isExternal: boolean = false, 
        typeAcces?: TypeAcces
    ): Promise<number> {
        try {
            const whereCondition: any = isExternal 
                ? { externRessourceId: ressourceId }
                : { ressourceId: ressourceId };

            if (typeAcces) {
                whereCondition.typeAcces = typeAcces;
            }

            return await this.prismaService.historiqueAcces.count({
                where: whereCondition
            });
        } catch (error) {
            console.error('Erreur lors du comptage des accès:', error);
            throw new Error('Impossible de compter les accès');
        }
    }

    async findRecentAcces(options: { limit?: number } = {}): Promise<HistoriqueAcces[]> {
        try {
            const { limit = 50 } = options;

            return await this.prismaService.historiqueAcces.findMany({
                orderBy: { createdAt: 'desc' },
                take: +limit,
                include: {
                    user: {
                        select: {
                            id: true,
                            nom: true,
                            email: true,
                        }
                    },
                    ressource: {
                        select: {
                            id: true,
                            titre: true,
                            description: true,
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des accès récents:', error);
            throw new Error('Impossible de récupérer les accès récents');
        }
    }
    
}