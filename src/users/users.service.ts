import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/DTO/users/ceate-user.dto';

@Injectable()
export class UsersService {
    users:CreateUserDto[] = [];
    constructor(){
        const user1:CreateUserDto = new CreateUserDto();
        user1.id = 1;
        user1.firstName = 'John';
        user1.lastName = 'Doe';
        user1.age = 30;
        user1.email = 'wxempel.com';
        user1.password = '123456';

        const user2:CreateUserDto = new CreateUserDto();
        user2.id = 2;
        user2.firstName = 'aaa';
        user2.lastName = 'bbb';
        user2.age = 35;
        user2.email = 'aaaaa.com';
        user2.password = '654321';

        this.users.push(user1);
        this.users.push(user2);
    }

    getAllUsers():CreateUserDto[]{
        return this.users;
    }

    getUserById(id:number):CreateUserDto{
        return this.users.find(user => user.id == id);
    }
    createUser(user:CreateUserDto):void{
        this.users.push(user);
    }
    updateUser(id:number, user:CreateUserDto):void{
        this.users = this.users.map(u => u.id == id? user : u);
    }
}
