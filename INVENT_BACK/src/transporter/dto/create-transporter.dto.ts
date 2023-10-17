import { IsString } from 'class-validator';

export class CreateTransporterDto {
  @IsString()
  name: string;
}
