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

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOrder(@Param(':id') id: number) {
    return {
      message: `Order ${id}`,
    };
  }

  @Get()
  getOrders(
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
  createOrder(@Body() payload: any) {
    return {
      message: 'Order created',
      payload,
    };
  }

  @Put(':id')
  updateOrder(@Param(':id') id: number, @Body() payload: any) {
    return {
      message: `Order ${id} updated`,
      payload,
    };
  }

  @Delete(':id')
  deleteOrder(@Param(':id') id: number) {
    return {
      message: `Order ${id} deleted`,
    };
  }
}
