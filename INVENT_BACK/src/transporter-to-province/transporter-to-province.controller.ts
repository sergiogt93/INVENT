import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TransporterToProvinceService } from './transporter-to-province.service';
import { CreateTransporterToProvinceDto } from './dto/create-transporter-to-province.dto';
import { UpdateTransporterToProvinceDto } from './dto/update-transporter-to-province.dto';
import { AuthGuard } from '../../src/auth/auth.guard';

@UseGuards(AuthGuard)
@ApiTags('transporter-to-province')
@ApiBearerAuth('JWT-auth')
@Controller('transporter-to-province')
export class TransporterToProvinceController {
  constructor(
    private readonly transporterToProvinceService: TransporterToProvinceService,
  ) {}

  @Post()
  create(
    @Body() createTransporterToProvinceDto: CreateTransporterToProvinceDto,
  ) {
    return this.transporterToProvinceService.create(
      createTransporterToProvinceDto,
    );
  }

  @Get()
  findAll() {
    return this.transporterToProvinceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transporterToProvinceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransporterToProvinceDto: UpdateTransporterToProvinceDto,
  ) {
    return this.transporterToProvinceService.update(
      +id,
      updateTransporterToProvinceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transporterToProvinceService.remove(+id);
  }
}
