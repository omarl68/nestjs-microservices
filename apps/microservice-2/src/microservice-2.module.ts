import { Module } from '@nestjs/common';
import { Microservice2Controller } from './microservice-2.controller';
import { Microservice2Service } from './microservice-2.service';

@Module({
  imports: [],
  controllers: [Microservice2Controller],
  providers: [Microservice2Service],
})
export class Microservice2Module {}
