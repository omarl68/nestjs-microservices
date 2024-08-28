import { Controller } from '@nestjs/common';
import { Microservice2Service } from './microservice-2.service';
import { MessagePattern } from '@nestjs/microservices';


@Controller()
export class Microservice2Controller {
  constructor(private readonly microservice2Service: Microservice2Service) {}
  @MessagePattern({ cmd: 'hello-service-2' })
  getHello(): string {
    return this.microservice2Service.getHello();
  }
  @MessagePattern({ cmd: 'sum-service-2' })
  sum(numbers: number[]): number {
    return this.microservice2Service.sum(numbers);
  }
}
