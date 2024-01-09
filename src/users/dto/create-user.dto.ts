import { IsString, IsInt, IsEmail, Min, Max, Length } from 'class-validator';

export class CreateUserDto {
  
  @IsString()
  @Length(1, 50)
  firstName: string;

  @IsString()
  @Length(1, 50)
  lastName: string;

  @IsInt()
  @Min(0)
  @Max(150)
  age: number;

  @IsEmail()
  email: string;

  @IsString()
  @Length(4, 20)
  password: string;
}
