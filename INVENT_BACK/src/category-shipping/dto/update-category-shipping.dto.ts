import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryShippingDto } from './create-category-shipping.dto';

export class UpdateCategoryShippingDto extends PartialType(
  CreateCategoryShippingDto,
) {
  @IsString()
  description: string;
}
