import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../src/users/users.service';
import { JWT_CONSTANTS } from './constants/jwt.constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ username, password }: RegisterDto) {
    const user = await this.usersService.findOneByUsername(username);

    if (user) {
      throw new BadRequestException(`User already exists`);
    }

    const createdUser = await this.usersService.create({
      username,
      password: await bcryptjs.hash(password, 10),
    });

    if (!createdUser) {
      return;
    }

    const payload = { username: createdUser.username };

    const token = await this.jwtService.signAsync(payload);

    return {
      createdUser,
      token,
    };
  }

  async login({ username, password }: LoginDto) {
    const user = await this.usersService.findOneByUsername(username);
    if (!user) {
      throw new UnauthorizedException(`Username is wrong`);
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException(`Password is wrong`);
    }

    const payload = { username: user.username };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      username,
    };
  }

  async isTokenVerified(token: string) {
    try {
      await this.jwtService.verifyAsync(token, {
        secret: JWT_CONSTANTS.secret,
      });
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}
