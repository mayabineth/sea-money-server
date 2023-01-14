import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 30)
  @ApiProperty({ type: String, maxLength: 30, minLength: 2 })
  name: string;
  @IsDate()
  @ApiProperty({ type: Date })
  birthDate: Date;
  @IsString()
  @Length(3, 3)
  @ApiProperty({ type: String, minLength: 3, maxLength: 3 })
  defaultCurrency: string;
  @IsString({
    each: true,
  })
  @Length(2, 30, {
    each: true,
  })
  connections: string[];
}
