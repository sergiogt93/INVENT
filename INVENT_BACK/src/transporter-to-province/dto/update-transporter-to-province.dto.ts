import { PartialType } from '@nestjs/mapped-types';
import { CreateTransporterToProvinceDto } from './create-transporter-to-province.dto';

export class UpdateTransporterToProvinceDto extends PartialType(CreateTransporterToProvinceDto) {}
