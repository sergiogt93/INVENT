import { IsNumber, IsString } from 'class-validator';

export class CreateTransporterToProvinceDto {
  @IsNumber()
  transporterId: number;

  @IsString()
  provinceId: string;
}
