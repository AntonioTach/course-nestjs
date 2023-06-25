import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
  Body,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUser(@Param('id') id: number) {
    return {
      user: id,
    };
  }

  @Post()
  createUser(@Body() payload: any) {
    return {
      message: 'User created',
      payload,
    };
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'User updated',
      id,
      payload,
    };
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return {
      message: 'User deleted',
      id,
    };
  }
}
