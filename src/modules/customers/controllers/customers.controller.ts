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

@Controller('customers')
export class CustomersController {
  @Get(':id')
  getCustomer(@Param('id') id: number) {
    return {
      message: `Customer ${id}`,
    };
  }

  @Get()
  getCustomers(
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
  createCustomer(@Body() payload: any) {
    return {
      message: 'Customer created',
      payload,
    };
  }

  @Put(':id')
  updateCustomer(@Param('id') id: number, @Body() payload: any) {
    return {
      message: `Customer ${id} updated`,
      payload,
    };
  }

  @Delete(':id')
  deleteCustomer(@Param('id') id: number) {
    return {
      message: `Customer ${id} deleted`,
      id,
    };
  }
}
