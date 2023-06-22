import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint(): string {
    return 'Yo soy nuevo';
  }

  @Get('/ruta/')
  nuevo(): string {
    return 'con /sas/';
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }

  @Get('products')
  getProducts(@Query('limit') limit: number, @Query('offset') offset: number) {
    return `Products with limit = ${limit} and offset = ${offset}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `Categorie ${id} and productId ${productId}`;
  }
}
