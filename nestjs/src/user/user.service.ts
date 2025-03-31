import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login-in-user.dto'; // Ensure this DTO exists
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findOrCreateUser(createUserDto: CreateUserDto) {
    const { email, name, avatar, password } = createUserDto;
    let user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user = await this.prisma.user.create({
        data: { email, name, avatar, password: hashedPassword },
      });
    }

    return user;
  }

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

  async signIn(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new BadRequestException("Invalid credentials.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException("Invalid credentials.");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    return { user, token };
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
