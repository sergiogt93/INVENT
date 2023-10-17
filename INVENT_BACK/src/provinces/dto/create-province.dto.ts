import { IsString } from 'class-validator';

export class CreateProvinceDto {
  @IsString()
  id: string;

  @IsString()
  name: string;
}
