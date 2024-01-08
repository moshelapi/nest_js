import { CreateUserMongoInput } from './create-user_mongo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserMongoInput extends PartialType(CreateUserMongoInput) {
  @Field(() => String)
  id: string;
}
