import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity'

@Injectable()
export class ProductsService {
  private counterId = 0;

  private products: Product[] = [{
    id: 1,
    name: 'Product 1',
    description: 'Product description',
    price: 120,
    stock: 12,
    image: '',
  }];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    let message = '';
    if (product) {
      const updatedProduct = this.products[product.id] = {
        id: product.id,
        ...payload,
      }
      message = `Product updated`;
      return {
        updatedProduct: updatedProduct,
        id,
        message,
      }
    } else {
      message = 'Product not found';
      return {
        id,
        message,
      }
    }


  }

  delete(id: number) {
    const productIndex = this.products.findIndex((item) => item.id === id);
    let message = '';
    let status: number = 0;
    if (productIndex) {
      this.products.slice(productIndex, 1);
      message = 'Product deleted'
      status = 200;
    } else {
      message = 'Product not found';
      status = 404;
    }
    return {
      message,
      status,
    }
  }
}
