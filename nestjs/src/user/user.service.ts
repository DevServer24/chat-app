import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...userData } = createUserDto;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance, without including the `password` directly in the entity
    const newUser = this.userRepository.create({
      ...userData, // Spread user data excluding the password
      password: hashedPassword, // Manually set the hashed password
    });

    // Save the user and return the result
    return await this.userRepository.save(newUser);
  }
}
