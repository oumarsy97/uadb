/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();

    // Middleware pour gérer le soft delete
    this.$use(async (params, next) => {
      if (params.action === 'delete') {
        // Remplace l'action de suppression par une mise à jour pour désactiver l'entité
        params.action = 'update';
        params.args['data'] = { active: false };
      }

      if (params.action === 'deleteMany') {
        // Remplace l'action de suppression par une mise à jour pour désactiver les entités
        params.action = 'updateMany';
        params.args['data'] = { active: false };
      }

      if (params.action === 'findMany' || params.action === 'findFirst') {
        // Si le model a un champ 'active'
        if (params.model) {
          params.args = params.args || {};
          params.args.where = params.args.where || {};

          // Ajoute le filtre active uniquement s'il n'est pas déjà spécifié
          if (params.args.where.active === undefined) {
            params.args.where.active = true;
          }
        }
      }

      return next(params);
    });
  }
}
