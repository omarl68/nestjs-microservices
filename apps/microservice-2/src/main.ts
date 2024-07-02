import { NestFactory } from '@nestjs/core';
import { Microservice2Module } from './microservice-2.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Microservice2Module,
    {
      transport: Transport.REDIS,
      options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT, 10) || 6379,
        db: parseInt(process.env.REDIS_DB, 10) || 2,
      },
    },
  );
  await app.listen();
}
bootstrap();
