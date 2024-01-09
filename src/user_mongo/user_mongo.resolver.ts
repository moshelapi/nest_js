import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { CreateUserMongoInput } from './dto/create-user_mongo.input';
// import { UserType } from './dto/user.dto';
import { UserMongoService } from './user_mongo.service';
import { UserMongo } from './models/userMongo.model';
import { UpdateUserMongoInput } from './dto/update-user_mongo.input';


@Resolver(of => UserMongo)
export class UserMongoResolver {
  constructor(private userMongoService: UserMongoService) {}

  @Mutation(() => UserMongo)
  createUserMongo(@Args('createUserMongoInput') createUserMongoInput: CreateUserMongoInput) {
    return this.userMongoService.create(createUserMongoInput);
  }

  @Query(() => [UserMongo], { name: 'allUsers' })
  findAll() {
    return this.userMongoService.findAll();
  }

  @Query(() => UserMongo, { name: 'userMongo' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userMongoService.findOne(id);
  }

  @Mutation(() => UserMongo)
  updateUserMongo(@Args('updateUserMongoInput') updateUserMongoInput: UpdateUserMongoInput) {
    return this.userMongoService.update(updateUserMongoInput.id, updateUserMongoInput);
  }

  @Mutation(() => UserMongo)
  removeUserMongo(@Args('id', { type: () => String }) id: string) {
    return this.userMongoService.remove(id);
  }
}

