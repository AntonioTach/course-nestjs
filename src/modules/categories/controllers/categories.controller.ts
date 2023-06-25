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

@Controller('categories')
export class CategoriesController {
  @Get(':id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `Categorie ${id} and productId ${productId}`;
  }

  @Get(':id')
  getOnlyCategory(@Param('id') id: string) {
    return `Categorie ${id}`;
  }

  @Get()
  getCategories(
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
  createCategory(@Body() payload: any) {
    return {
      message: 'Category created successfully',
      payload,
    };
  }

  @Put(':id')
  updateCategory(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'Category updated successfully',
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return {
      message: 'Category deleted successfully',
      id,
    };
  }
}
