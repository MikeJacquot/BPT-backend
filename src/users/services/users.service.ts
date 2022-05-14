import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';



@Injectable()
export class UsersService {

  async create(createUserDto: CreateUserDto) {
    const userToCreate = User.create(createUserDto);
    const users = await this.findAll();

    // check if the email is already used, if so, throw an exception instead of an 500 error
    users.forEach((user) => {
      if (user.email === userToCreate.email) {
        throw new ConflictException({
          type: 'IsAlreadyExistingWithThisEmail',
          message: `A user is already existing with this ${user.email}`,
        });
      } else {
        userToCreate.save();
        delete userToCreate.password;
        return userToCreate;
      }
    });
  }

  // return user's list without passwords
  async findAll(): Promise<User[]> {
    const users = await User.find();
    users.forEach((user) => {
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

  async update(id: string, updateUserDto: Partial<UpdateUserDto>) {
    return User.update(id, updateUserDto);
  }
}
