import {
  Body, Controller, Delete,
  Get, Inject, Param, Post, Put, UseGuards, UseInterceptors
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IsNumber } from './pipes/validations/validation-if-number.pipe';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role } from 'src/auth/roles/role.enum';
import { CACHE_MANAGER, CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller('users')
export class UsersController {
  constructor(
    private users: UsersService,
  ) { }
  
  @UseInterceptors(CacheInterceptor)
  @CacheKey('aaa')
  @Get()
  getAllUsers() {
    return this.users.getAllUsers();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  getUserById(@Param('id', IsNumber) id: number) {
    console.log(typeof id);

    return this.users.getUserById(id);
  }
  @Post()
  @Roles(Role.User)
  createUser(@Body() user: CreateUserDto) {
    this.users.createUser(user);
    return 'created';
  }
  @Put(':id')
  updateUser(@Param('id') id: number, @Body() user: CreateUserDto) {
    this.users.updateUser(id, user);
    return 'updated';
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.users.deleteUser(id);
    return 'deleted';
  }
}
