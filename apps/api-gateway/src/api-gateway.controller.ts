import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CalculateInput } from '../../../libs/shared-lib/src/dto/calculate.input';
import { sumInput } from '../../../libs/shared-lib/src/dto/sum.input';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { register } from 'prom-client';
import {
  AuthGuard,
  Resource,
  RoleGuard,
  Roles,
  Scopes,
  Unprotected,
} from 'nest-keycloak-connect';
import { RolesGuard } from './auth/guards/roles.guard';
import { KeycloakAuthGuard } from './auth/guards/keycloak-auth.guard';

@Controller()
@ApiTags('apiGateway')
export class ApiGatewayController {
  constructor(
    private readonly apiGatewayService: ApiGatewayService,
    @Inject('MICRO_SERVICE_1') private client: ClientProxy,
    @Inject('MICRO_SERVICE_2') private client2: ClientProxy,
    @InjectPinoLogger('MICRO_SERVICE_1') private readonly logger: PinoLogger,
  ) {}

  @Get('protected')
  @UseGuards(AuthGuard, RoleGuard)
  getProtectedResource() {
    return 'This is a protected resource';
  }

  @Get('check')
  check() {
    return 'This is a protected resource';
  }

  @Get('/metrics')
  async getMetrics(@Req() req, @Res() res) {
    try {
      res.set('Content-Type', register.contentType);
      const metrics = await register.metrics();
      res.send(metrics);
    } catch (error) {
      console.error('Error fetching metrics:', error);
      res.status(500).send('Error fetching metrics');
    }
  }

  @Get()
  @Unprotected()
  @Roles({ roles: ['client-user'] })
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({ status: 200, description: 'Returns a hello message' })
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Post('/sum')
  @UseGuards(KeycloakAuthGuard)
  @ApiOperation({ summary: 'Sum numbers from both services' })
  @ApiBody({ type: sumInput })
  @ApiResponse({
    status: 200,
    description: 'Returns the sum of numbers from both services',
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  async sum(
    @Body() calculateInput: sumInput,
  ): Promise<{ message: string; statusCode: number; data: number }> {
    try {
      const { numbers_1, numbers_2 } = calculateInput;
      const sum_service_1 = await firstValueFrom(
        this.apiGatewayService.SumService1(this.client, numbers_1),
      );
      const sum_service_2 = await firstValueFrom(
        this.apiGatewayService.SumService2(this.client2, numbers_2),
      );
      //   this.logger.info('hello , my friend !')
      return {
        message: 'Sum calculated successfully',
        statusCode: HttpStatus.OK,
        data: sum_service_1 + sum_service_2,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to calculate sum',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('/service-1')
  @UseGuards(AuthGuard)
  // @Roles({ roles: ['client-user'] })
  @ApiOperation({ summary: 'Get hello message from Service 1' })
  @ApiResponse({
    status: 200,
    description: 'Returns a hello message from Service 1',
  })
  async getHelloService1(): Promise<string> {
    return await firstValueFrom(this.apiGatewayService.SendHello1(this.client));
  }

  @Post('/sum-service-1')
  @ApiOperation({ summary: 'Sum numbers using Service 1' })
  @ApiBody({ type: CalculateInput })
  @ApiResponse({
    status: 200,
    description: 'Returns the sum of numbers from Service 1',
  })
  async sumService1(@Body() calculateInput: CalculateInput): Promise<number> {
    const { numbers } = calculateInput;
    return await firstValueFrom(
      this.apiGatewayService.SumService1(this.client, numbers),
    );
  }

  @Get('/service-2')
  @UseGuards(KeycloakAuthGuard, RolesGuard)
  @Roles({ roles: ['client-user'] })
  @ApiOperation({ summary: 'Get hello message from Service 2' })
  @ApiResponse({
    status: 200,
    description: 'Returns a hello message from Service 2',
  })
  async getHelloService2(): Promise<string> {
    return await firstValueFrom(
      this.apiGatewayService.sendHello2(this.client2),
    );
  }

  @Post('/sum-service-2')
  @ApiOperation({ summary: 'Sum numbers using Service 2' })
  @ApiBody({ type: CalculateInput })
  @ApiResponse({
    status: 200,
    description: 'Returns the sum of numbers from Service 2',
  })
  async sumService2(@Body() calculateInput: CalculateInput): Promise<number> {
    const { numbers } = calculateInput;
    return await firstValueFrom(
      this.apiGatewayService.SumService2(this.client2, numbers),
    );
  }
}
