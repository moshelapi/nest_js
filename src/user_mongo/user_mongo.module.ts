import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user_mongo.schema';
import { UserMongoService } from './user_mongo.service';
import { UserMongoResolver } from './user_mongo.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserMongoService, UserMongoResolver],
})
export class UsersModule {}