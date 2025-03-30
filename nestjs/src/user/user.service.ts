import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  // Sync user (Find or Create)
  async findOrCreateUser(createUserDto: CreateUserDto) {
    const { email, name, avatar } = createUserDto;
    let user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await this.prisma.user.create({
        data: { email, name, avatar },
      });
    }

    return user;
  }

  // Create a new user
  async create(createUserDto: CreateUserDto) {
    const { password, ...userData } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    return await this.prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });
  }

  // Find all users
  async findAll() {
    return await this.prisma.user.findMany();
  }

  // Find a user by ID
  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  // Update a user
  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // Remove a user
  async remove(id: string) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
