import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserMongo {
  @Field()
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  age?: number;


}