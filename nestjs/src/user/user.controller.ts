import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}  // ✅ Inject PrismaService

  // Create a new user
  async create(createUserDto: CreateUserDto) {
    const { password, ...userData } = createUserDto;
    
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,  // ✅ Add hashed password
      },
    });
  }

  // Find all users
  async findAll() {
    return this.prisma.user.findMany();
  }

  // Find a user by ID
  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  // Update a user
  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // Remove a user
  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
