import { IsString } from 'class-validator';
import { ACRONYMS_SHIPPING } from '../enums/intervalShipping.enum';

export class CreateCategoryShippingDto {
  @IsString()
  acronym: ACRONYMS_SHIPPING;

  @IsString()
  description: string;
}
