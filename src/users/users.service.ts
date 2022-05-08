import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  async create(createUserDto: CreateUserDto) {
    const user = User.create(createUserDto);
    await user.save();

    delete user.password;
    return user;
  }

  // return user's list without passwords
  async findAll() : Promise<User[]> {
      const users = await User.find();
      users.forEach(user => {
        delete user.password;
      });
      return users;
  }

  // return user without password
  async showById(id: string): Promise<User> {
    const user = await User.findOne(id);

    delete user.password;
    return user;
  }

  async findById(id: string) {
    return await User.findOne(id);
  }

  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }
}
