import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UserHttpModule } from './users/user-http.module';
import { GraphQLModule } from '@nestjs/graphql';
import {MongooseModule} from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UsersModule } from './user_mongo/user_mongo.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [UsersModule],
      autoSchemaFile: join(process.cwd(), 'src/user_mongo/schema.gql'),
      playground: false,
      plugins:[ApolloServerPluginLandingPageLocalDefault()]
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/user'),
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
    AuthModule,
    ],
})
export class AppModule {}


