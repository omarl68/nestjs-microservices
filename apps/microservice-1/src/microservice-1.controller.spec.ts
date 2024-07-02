import { Test, TestingModule } from '@nestjs/testing';
import { Microservice1Controller } from './microservice-1.controller';
import { Microservice1Service } from './microservice-1.service';

describe('Microservice1Controller', () => {
  let microservice1Controller: Microservice1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Microservice1Controller],
      providers: [Microservice1Service],
    }).compile();

    microservice1Controller = app.get<Microservice1Controller>(Microservice1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microservice1Controller.getHello()).toBe('Hello World form microservice 1 !');
    });
  });
});
