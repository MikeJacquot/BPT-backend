import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from '../users/entities/user.entity';
import * as bcrypt from 'bcryptjs';

import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthenticationUpdatePasswordException } from './exceptions/authentication-update-password.exception';
import { sign } from 'jsonwebtoken';
import { JwtUserPayload } from './model/jwt-user-payload.model';
import { SignInResponseDto } from './dto/sign-in-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto): Promise<SignInResponseDto> {
    const user = await this.validateUser(authLoginDto.email, authLoginDto.password);
    const payload: JwtUserPayload = { email: user.email, sub: user.id }
   
    return {
      accessToken: sign(
        payload,
        // the JWT Secret
        'aldoriurens5a56z21e636sd8>]zaze',
        {
          algorithm: 'HS512',
          expiresIn: "7d"
        }
      ),
      tokenType: 'Bearer'
    };
  }

  async validateUser(email: string, pass: string): Promise<Partial<User>> {
    const user: User = await this.usersService.findByEmail(email);
    if (user != null && await bcrypt.compare(pass, user.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async updatePassword(userId: string, oldPassword: string, newPassword: string): Promise<void> {
    const user: User = await this.usersService.findByEmail(userId);
    if (!(await bcrypt.compare(oldPassword, user.password))) {
      throw new AuthenticationUpdatePasswordException('Your actual password is incorrect');
    }
    user.password = await bcrypt.hash(newPassword, 8);
    await this.usersService.update(userId, user);
  }
}
