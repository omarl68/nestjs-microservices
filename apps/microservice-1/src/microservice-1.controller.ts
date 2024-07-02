import { Controller, Get } from '@nestjs/common';
import { Microservice1Service } from './microservice-1.service';
import { MessagePattern } from '@nestjs/microservices';
import { CalculateInput } from '../../../libs/shared-lib/src/dto/calculate.input';

@Controller()
export class Microservice1Controller {
  constructor(private readonly microservice1Service: Microservice1Service) {}

  @MessagePattern({ cmd: 'hello-service-1' }) 
  getHello(): string {
    return this.microservice1Service.getHello();
  }

  @MessagePattern({cmd:'sum-service-1'})
  sum(numbers:number[]):number{
    return this.microservice1Service.sum(numbers);
  }
}
