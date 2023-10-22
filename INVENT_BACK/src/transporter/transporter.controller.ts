import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '#src/auth/auth.guard';

import { TransporterService } from './transporter.service';
import { CreateTransporterDto } from './dto/create-transporter.dto';
import { UpdateTransporterDto } from './dto/update-transporter.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiTags('transporters')
@ApiBearerAuth('JWT-auth')
@Controller('transporters')
export class TransporterController {
  constructor(private readonly transporterService: TransporterService) {}

  @Post()
  create(@Body() createTransporterDto: CreateTransporterDto) {
    return this.transporterService.create(createTransporterDto);
  }

  @Get()
  findAll() {
    return this.transporterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.transporterService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateTransporterDto: UpdateTransporterDto,
  ) {
    return this.transporterService.update(id, updateTransporterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.transporterService.remove(id);
  }
}
