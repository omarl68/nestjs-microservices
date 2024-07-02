import { Injectable } from '@nestjs/common';
import { CalculateInput } from '../../../libs/shared-lib/src/dto/calculate.input';

@Injectable()
export class Microservice1Service {
  getHello(): string {
    return 'Hello World form microservice 1 !';
  }
  sum(numbers: number[]) {
    return (numbers || []).reduce((a: number, b: number) => a + b, 0);
  }
}
