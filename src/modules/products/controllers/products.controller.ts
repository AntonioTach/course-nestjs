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

@Controller('products')
export class ProductsController {
  @Get(':id')
  getProduct(@Param('id') id: number) {
    return {
      name: `Product ${id}`,
    };
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      limit,
      offset,
      brand,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Product created',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Product updated',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'Product deleted',
      id,
    };
  }
}
