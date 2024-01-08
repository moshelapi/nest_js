import {Body, Controller, Delete, Get, Param, Post, Put,} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private users: UsersService) {}
  @Get()
  getAllUsers() {
    return this.users.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.users.getUserById(id);
  }
  @Post()
  createUser(@Body() user: CreateUserDto) {
    this.users.createUser(user);
    return 'created';
  }
  @Put(':id')
  updateUser(@Param('id') id:number, @Body() user:CreateUserDto){
      this.users.updateUser(id, user);
      return 'updated';
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.users.deleteUser(id);
    return 'deleted';
  }
}
