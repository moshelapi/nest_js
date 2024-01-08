import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UserHttpModule } from './users/user-http.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { UsersModule } from './user_mongo/user_mongo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [UsersModule],
      autoSchemaFile: join(process.cwd(), 'src/user_mongo/schema.gql'),
      playground: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017'),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'moshe206',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
    UserHttpModule,
    UsersModule,
    ],
})
export class AppModule {}
