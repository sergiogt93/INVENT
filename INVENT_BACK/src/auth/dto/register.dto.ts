import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @IsString()
  username: string;

  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  @IsString()
  password: string;
}
