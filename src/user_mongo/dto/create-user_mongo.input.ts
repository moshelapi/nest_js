import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserMongoInput {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => Int)
  age: number;

}