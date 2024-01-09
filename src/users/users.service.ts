import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getUserByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where:{ email: email }});
  }

  getUserById(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }
  async createUser(user: CreateUserDto): Promise<void>{
    await this.usersRepository.save(user);
  }
  async updateUser(id:number, user:CreateUserDto):Promise<void>{
    await this.usersRepository.update(id, user);
  }
  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
