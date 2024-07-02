import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class sumInput {
  @IsArray()
  @IsNumber({}, { each: true })
  @IsNotEmpty({ each: true })
  @ApiProperty({ description: 'Array of numbers for Service 1', type: [Number] })
  numbers_1: number[];

  @IsArray()
  @IsNumber({}, { each: true })
  @IsNotEmpty({ each: true })
  @ApiProperty({ description: 'Array of numbers for Service 2', type: [Number] })
  numbers_2: number[];
}
