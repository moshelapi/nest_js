import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString, Length, Max, Min } from 'class-validator';

@InputType()
export class CreateUserMongoInput {
  @Field()
  id: string;

  @IsString()
  @Length(2, 15)
  @Field()
  
  firstName: string;

  @IsString()
  @Length(2, 15)
  @Field()

  lastName: string;
  @IsInt()
  @Max(80)
  @Min(18)
  @Field(() => Int)
  age: number;

}