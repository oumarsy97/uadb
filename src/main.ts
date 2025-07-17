import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
 
  // 🔧 SOLUTION PURE : Créer uniquement un microservice (sans HTTP)
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: process.env.MICROSERVICE_PORT ? +process.env.MICROSERVICE_PORT : 4000,
    },
  });

  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     transform: true,
  //   }),
  //);
  
  const port = process.env.MICROSERVICE_PORT || 4000;
  await app.listen();
  console.log(`✅ Microservice TCP pur démarré sur 0.0.0.0:${port}`);
  console.log(`🔗 Prêt à recevoir les connexions TCP`);
}

bootstrap().catch(err => {
  console.error('❌ Erreur au démarrage:', err);
  process.exit(1);
});