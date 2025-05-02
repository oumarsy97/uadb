import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // Log du contenu des variables d'environnement
  dotenv.config();
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  
  const app = await NestFactory.create(AppModule);
  
  // Configuration du microservice TCP sur le port 4000
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4000,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  
  await app.startAllMicroservices();
  console.log(`Microservice démarré sur le port 4000`);
}
bootstrap();