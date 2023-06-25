import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get(':id')
  getBrand(@Param(':id') id: number) {
    return {
      brand: `Brand ${id}`,
    };
  }
}
