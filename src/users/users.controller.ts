import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/DTO/users/ceate-user.dto';

@Controller('users')
export class UsersController {
    constructor(private users : UsersService){}
    @Get()
    getAllUsers(){
        return this.users.getAllUsers();
    }
    @Get(':id')
    getUserById(@Param('id') id:number){
        return this.users.getUserById(id);
    }
    @Post()
    createUser(@Body() user:CreateUserDto){
        this.users.createUser(user);
        return 'created';
    }
    @Put(':id')
    updateUser(@Param('id') id:number, @Body() user:CreateUserDto){
        this.users.updateUser(id, user);
        return 'updated';
    }

    }

  


