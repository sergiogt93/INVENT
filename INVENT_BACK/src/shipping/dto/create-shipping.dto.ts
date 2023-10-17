import { MinLength, MaxLength, IsString, IsNumber } from 'class-validator';

export class CreateShippingDto {
  @IsString()
  destinationAddress: string;

  @IsString()
  @MinLength(5)
  @MaxLength(5)
  postalCode: string;

  @IsString()
  destinationName: string;

  @IsString()
  senderName: string;

  @IsNumber()
  weight: number;
}
