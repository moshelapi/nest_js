import { Resolver,Query } from '@nestjs/graphql';
// import { UserMongoService } from './user_mongo.service';
// import { UserMongo } from './entities/user_mongo.entity';
// import { CreateUserMongoInput } from './dto/create-user_mongo.input';
// import { UpdateUserMongoInput } from './dto/update-user_mongo.input';
import { UserType } from './dto/user.dto';


@Resolver(of => UserType)
export class UserMongoResolver {
  @Query(returns => UserType)
  nessi() {
    return {
      id: '123',
      firstName: 'Nessi',
      lastName: 'dddd',
      age: 30,
    }
  };
}
  // @Mutation(() => UserMongo)
  // createUserMongo(@Args('createUserMongoInput') createUserMongoInput: CreateUserMongoInput) {
  //   return this.userMongoService.create(createUserMongoInput);
  // }

  // @Query(() => [UserMongo], { name: 'userMongo' })
  // findAll() {
  //   return this.userMongoService.findAll();
  // }

  // @Query(() => UserMongo, { name: 'userMongo' })
  // findOne(@Args('id', { type: () => String }) id: string) {
  //   return this.userMongoService.findOne(id);
  // }

  // @Mutation(() => UserMongo)
  // updateUserMongo(@Args('updateUserMongoInput') updateUserMongoInput: UpdateUserMongoInput) {
  //   return this.userMongoService.update(updateUserMongoInput.id, updateUserMongoInput);
  // }

  // @Mutation(() => UserMongo)
  // removeUserMongo(@Args('id', { type: () => String }) id: string) {
  //   return this.userMongoService.remove(id);
  // }
// }
