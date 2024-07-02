import { Module } from '@nestjs/common';
import { Microservice1Controller } from './microservice-1.controller';
import { Microservice1Service } from './microservice-1.service';

@Module({
  imports: [],
  controllers: [Microservice1Controller],
  providers: [Microservice1Service],
})
export class Microservice1Module {}
