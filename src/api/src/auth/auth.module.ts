import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccountsModule } from '../accounts/accounts.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import {AccountsService} from "../accounts/accounts.service";
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import {DatabaseService} from "../shared/database/database.service";
@Module({
  imports: [
      AccountsModule,
      PassportModule,
      JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '43200s' },

    }),
  ],

  providers: [
      AuthService,
      LocalStrategy,
      AccountsService,
      JwtStrategy,
      DatabaseService,
      AccountsService,
  ],
  exports: [
      AuthService,
      JwtModule
  ]
})
export class AuthModule {}
