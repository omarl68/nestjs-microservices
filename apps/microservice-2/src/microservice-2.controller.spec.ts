import { Test, TestingModule } from '@nestjs/testing';
import { Microservice2Controller } from './microservice-2.controller';
import { Microservice2Service } from './microservice-2.service';

describe('Microservice2Controller', () => {
  let microservice2Controller: Microservice2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Microservice2Controller],
      providers: [Microservice2Service],
    }).compile();

    microservice2Controller = app.get<Microservice2Controller>(
      Microservice2Controller,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microservice2Controller.getHello()).toBe(
        'Hello World from microservice 2 !',
      );
    });
  });
});
