import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from '../users/entities/user.entity';

import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthenticationUpdatePasswordException } from './exceptions/authentication-update-password.exception';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto) {
    const user = await this.validateUser(authLoginDto);

    const payload = {
      userId: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(authLoginDto: AuthLoginDto): Promise<User> {
    const { email, password } = authLoginDto;

    const user = await this.usersService.findByEmail(email);

    if (!(await user?.validatePassword(password))) {
      throw new UnauthorizedException();
    }

    return user;
  }

  async updatePassword(userId: string, oldPassword: string, newPassword: string): Promise<void> {
    const user: User = await this.usersService.findById(userId);
    console.log(user);
    if (!(await bcrypt.compare(oldPassword, user.password))) {
      throw new AuthenticationUpdatePasswordException('Your actual password is incorrect');
    }
    user.password = await bcrypt.hash(newPassword, 10);
    await this.usersService.update(user.id, user);
  }
}
