import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt/dist';
import { UsersModule } from '../../src/users/users.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JWT_CONSTANTS } from './constants/jwt.constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: JWT_CONSTANTS.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
