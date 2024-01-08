import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserMongo {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
