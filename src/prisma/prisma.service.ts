import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    console.log('Connexion à la base de données établie');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('Connexion à la base de données fermée');
  }
}