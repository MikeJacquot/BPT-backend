import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';



@Injectable()
export class UsersService {

  async create(createUserDto: CreateUserDto) {
    const userToCreate = User.create(createUserDto);
    const existingUser = await this.findByEmail(createUserDto.email);
    if(existingUser){
      throw new HttpException('User already exists with this email', 409);
    }
    User.save(userToCreate);
    return {email: userToCreate.email};

  }

  // return user's list without passwords
  async findAll(): Promise<Partial<User[]>> {
    const users = await User.find();
    return users.map((user) => {
      delete user.password;
      return user
    });
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
