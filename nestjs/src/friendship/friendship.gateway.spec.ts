import { Test, TestingModule } from '@nestjs/testing';
import { FriendshipGateway } from './friendship.gateway';
import { FriendshipService } from './friendship.service';

describe('FriendshipGateway', () => {
  let gateway: FriendshipGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FriendshipGateway, FriendshipService],
    }).compile();

    gateway = module.get<FriendshipGateway>(FriendshipGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
