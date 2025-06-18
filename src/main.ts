import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // Log du contenu des variables d'environnement
  dotenv.config();
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
  console.log("Environment:", process.env.NODE_ENV);
  
  const app = await NestFactory.create(AppModule);
  
  // Configuration du microservice TCP
  // Utiliser 0.0.0.0 pour Docker, localhost pour développement local
  const host = process.env.NODE_ENV === 'development' ? '0.0.0.0' : 'localhost';
  const port = process.env.MICROSERVICE_PORT ? +process.env.MICROSERVICE_PORT : 4000;

  console.log(`Configuration microservice: ${host}:${port}`);
  
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: host,
      port: port,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  
  // Démarrer le microservice
  await app.startAllMicroservices();
  console.log(`Microservice démarré sur ${host}:${port}`);
  
  // Optionnel: Démarrer aussi un serveur HTTP classique sur un autre port
  const httpPort = process.env.HTTP_PORT || 4000;
  await app.listen(httpPort, '0.0.0.0');
  console.log(`HTTP Server démarré sur 0.0.0.0:${httpPort}`);
}

bootstrap().catch(err => {
  console.error('Erreur au démarrage:', err);
  process.exit(1);
});