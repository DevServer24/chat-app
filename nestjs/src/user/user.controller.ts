import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    console.log("✅ Received signup data:", createUserDto);

    try {
      const user = await this.userService.create(createUserDto);
      return { message: "Signup successful", user };
    } catch (error) {
      console.error("❌ Signup error:", error);

      if (error.code === 'P2002') {
        // Prisma error: unique constraint failed
        throw new BadRequestException("Email is already in use.");
      }

      throw new InternalServerErrorException("Signup failed. Please try again.");
    }
  }
}
