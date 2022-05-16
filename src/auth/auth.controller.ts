import { Body, Controller, Get, HttpCode, Post, Put, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthLoginDto } from './dto/auth-login.dto';
import { PasswordUpdateRequestDto } from './dto/password-update-request.dto';
import { AuthenticationUpdatePasswordException } from './exceptions/authentication-update-password.exception';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { JwtUser } from './model/jwt-user.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async login(@Body() authLoginDto: AuthLoginDto) {
    return this.authService.login(authLoginDto);
  }

  @Put('update-password')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async changeUserPassword(@CurrentUser() currentUser: JwtUser, @Body() passwordUpdateRequestDto: PasswordUpdateRequestDto): Promise<void> {
        if(passwordUpdateRequestDto.newPassword == null || passwordUpdateRequestDto.oldPassword == null ||
            passwordUpdateRequestDto.newPassword.length === 0 || passwordUpdateRequestDto.oldPassword.length === 0) {
            throw new AuthenticationUpdatePasswordException('New or old password must not be empty');
        }
        await this.authService.updatePassword(currentUser.userId, passwordUpdateRequestDto.oldPassword, passwordUpdateRequestDto.newPassword);
    }
}
