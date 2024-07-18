import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { swaggerDarkTheme } from '../public/swagger-dark-theme';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import * as promClient from 'prom-client';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe());

  const register = new promClient.Registry();
  promClient.collectDefaultMetrics({ register });

  const httpRequestDurationMicroseconds = new promClient.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10],
  });

  register.registerMetric(httpRequestDurationMicroseconds);

  app.use((req, res, next) => {
    const end = httpRequestDurationMicroseconds.startTimer();
    res.on('finish', () => {
      const route = req.route ? req.route.path : req.originalUrl;
      end({ method: req.method, route, code: res.statusCode });
    });
    next();
  });



  const config = new DocumentBuilder()
    .setTitle('SoftyRh')
    .setDescription('The Softy RH API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    customCss: swaggerDarkTheme,
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
    },
  });

  await app.listen(3001);
  console.log('App started!');
}

bootstrap();
