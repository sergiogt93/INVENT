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
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { CategoryShippingService } from './category-shipping.service';
import { CreateCategoryShippingDto } from './dto/create-category-shipping.dto';
import { UpdateCategoryShippingDto } from './dto/update-category-shipping.dto';
import { AuthGuard } from '#src/auth/auth.guard';

@UseGuards(AuthGuard)
@ApiTags('category-shipping')
@ApiBearerAuth('JWT-auth')
@Controller('category-shipping')
export class CategoryShippingController {
  constructor(
    private readonly categoryShippingService: CategoryShippingService,
  ) {}

  @Post()
  create(@Body() createCategoryShippingDto: CreateCategoryShippingDto) {
    return this.categoryShippingService.create(createCategoryShippingDto);
  }

  @Get()
  findAll() {
    return this.categoryShippingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryShippingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryShippingDto: UpdateCategoryShippingDto,
  ) {
    return this.categoryShippingService.update(+id, updateCategoryShippingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryShippingService.remove(+id);
  }
}
