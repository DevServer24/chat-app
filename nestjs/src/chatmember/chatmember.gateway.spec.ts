import { Test, TestingModule } from '@nestjs/testing';
import { ChatmemberGateway } from './chatmember.gateway';
import { ChatmemberService } from './chatmember.service';
describe('ChatmemberGateway', () => {
  let gateway: ChatmemberGateway;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatmemberGateway, ChatmemberService],
    }).compile();
    gateway = module.get<ChatmemberGateway>(ChatmemberGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
