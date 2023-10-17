import { PartialType } from '@nestjs/mapped-types';
import { CreateTransporterDto } from './create-transporter.dto';
import { IsString } from 'class-validator';

export class UpdateTransporterDto extends PartialType(CreateTransporterDto) {
  @IsString()
  name: string;
}
