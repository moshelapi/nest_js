import { Test, TestingModule } from '@nestjs/testing';
import { UserMongoResolver } from './user_mongo.resolver';
import { UserMongoService } from './user_mongo.service';

describe('UserMongoResolver', () => {
  let resolver: UserMongoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMongoResolver, UserMongoService],
    }).compile();

    resolver = module.get<UserMongoResolver>(UserMongoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
