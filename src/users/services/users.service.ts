import { HttpException, Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { FamiliesService } from '../../families/families.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';



@Injectable()
export class UsersService {

  constructor(
    private readonly familiesService: FamiliesService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userToCreate = User.create(createUserDto);
    const existingUser = await this.findByEmail(createUserDto.email);
    if(existingUser){
      throw new HttpException('User already exists with this email', 409);
    }
    await User.save(userToCreate);
    return {email: userToCreate.email};

  }

  async createWithPaswwordReturned(createUserDto: CreateUserDto) {
    const userToCreate = User.create(createUserDto);
    const existingUser = await this.findByEmail(createUserDto.email);
    if(existingUser){
      throw new HttpException('User already exists with this email', 409);
    }   
    return await User.save(userToCreate);

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
  async showById(id: string): Promise<Partial<User>> {
    const user = await User.findOne(id);
    return {email: user.email, firstName: user.firstName, lastName: user.lastName};
  }

  async showByIdwithPassword(id: string): Promise<Partial<User>> {
    const user = await User.findOne(id);
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
    return await User.update(id, updateUserDto);
  }

  deleteOneById(id: string): Promise<DeleteResult> {
    return User.delete(id);
  }
}
