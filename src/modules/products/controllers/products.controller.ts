import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }

  @Get()
  getProducts(@Query('limit') limit: number, @Query('offset') offset: number) {
    return `Products with limit = ${limit} and offset = ${offset}`;
  }
}
