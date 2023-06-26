import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './modules/products/controllers/products.controller';
import { CategoriesController } from './modules/categories/controllers/categories.controller';
import { BrandsController } from './modules/brand/controllers/brands.controller';
import { OrdersController } from './modules/orders/controllers/orders.controller';
import { UsersController } from './modules/users/controllers/users.controller';
import { CustomersController } from './modules/customers/controllers/customers.controller';
import { BrandsModule } from './modules/brand/module/brands.module';
import { BrandsService } from './modules/brand/service/brands.service';
import { ProductsService } from './modules/products/services/products.service';

@Module({
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    BrandsController,
    OrdersController,
    UsersController,
    CustomersController,
  ],
  providers: [AppService, BrandsService, ProductsService],
  imports: [BrandsModule],
})
export class AppModule {}
