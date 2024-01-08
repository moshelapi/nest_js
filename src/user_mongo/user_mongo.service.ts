import { Injectable } from '@nestjs/common';
import { CreateUserMongoInput } from './dto/create-user_mongo.input';
import { UpdateUserMongoInput } from './dto/update-user_mongo.input';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user_mongo.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserMongoService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Create a new user
  async create(createUserMongoInput: CreateUserMongoInput): Promise<User> {
    const createdUser = new this.userModel(createUserMongoInput);
    return createdUser.save();
  }

  // Find all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Find a single user by ID
  async findOne(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  // Update a user by ID
  async update(id: string, updateUserMongoInput: UpdateUserMongoInput): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, updateUserMongoInput, { new: true }).exec();
  }

}
