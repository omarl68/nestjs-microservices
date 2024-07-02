import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber, ArrayMinSize } from 'class-validator';

export class CalculateInput {
  @IsArray()
  @IsNumber({}, { each: true })
  @IsNotEmpty({ each: true })
  @ArrayMinSize(2)
  @ApiProperty({ description: 'Array of numbers to sum', type: [Number] })
  numbers: number[];
}
