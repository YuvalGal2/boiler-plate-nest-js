import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DatabaseService} from "./shared/database/database.service";
import {AuthModule} from "./auth/auth.module";
import {AccountsModule} from "./accounts/accounts.module";
import {APP_GUARD} from "@nestjs/core";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

@Module({
  exports: [
      DatabaseService
  ],
  imports: [
      AuthModule,
      AccountsModule
  ],
  controllers: [AppController],
  providers: [
      AppService,
      DatabaseService,
      // Define Global Guard as default to all routes.
      {
          provide: APP_GUARD,
          useClass: JwtAuthGuard,
      },
  ],
})
export class AppModule {}
