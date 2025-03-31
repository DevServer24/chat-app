import { Controller, Post, Get, Patch, Delete, Body, Param, UsePipes, ValidationPipe, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login-in-user.dto'; // Ensure correct file name
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('sign-up')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.create(createUserDto);
      return { message: "Signup successful", user };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException("Email is already in use.");
      }
      throw new BadRequestException("Signup failed. Please try again.");
    }
  }

  @Post('sign-in')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async signIn(@Body() loginDto: LoginDto) {
    try {
      const user = await this.userService.signIn(loginDto);
      return { message: "Sign-in successful", user };
    } catch {
      throw new BadRequestException("Invalid credentials.");
    }
  }

  @Get('get-all')
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
