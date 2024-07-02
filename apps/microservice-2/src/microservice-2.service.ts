import { Injectable } from '@nestjs/common';
import { CalculateInput } from '../../../libs/shared-lib/src/dto/calculate.input';

@Injectable()
export class Microservice2Service {
  getHello(): string {
    return 'Hello World from microservice 2 !';
  }

  sum(numbers: number[]): number {
    return (numbers || []).reduce((a: number, b: number) => a + b, 0);
  }
}
