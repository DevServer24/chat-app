import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module'; // ✅ Import PrismaModule

@Module({
  imports: [PrismaModule], // ✅ Import PrismaModule here
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // (Optional) If other modules need to use UserService
})
export class UserModule {}
