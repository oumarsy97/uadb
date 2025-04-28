// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuration du microservice TCP sur le port 4000
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 4000,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  
  // Démarrer le microservice et l'application HTTP si nécessaire
  await app.startAllMicroservices();
  await app.listen(4000); // Port HTTP optionnel pour les API REST
  
  console.log(`Microservice utilisateurs démarré sur le port 4000`);
}
bootstrap();