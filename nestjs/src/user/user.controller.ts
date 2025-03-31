import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('sync')
  @UsePipes(new ValidationPipe({ whitelist: true }))  
  async syncUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.findOrCreateUser(createUserDto);
  }
  @Post('sign-up')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async create(@Body() createUserDto: CreateUserDto) {
    console.log("Received signup data:", createUserDto); // 🔍 Debug input
    return this.userService.create(createUserDto);
  }
  
  @Get('get-all')
  findAll() {
    return this.userService.findAll();
  }

  @Get('search/:id')
  findOne(@Param('id') id: string) {  
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))  // ✅ Validate updates
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {  
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {  
    return this.userService.remove(id);
  }
}