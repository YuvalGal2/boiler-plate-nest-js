import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import {DatabaseService} from "../shared/database/database.service";

@Module({
  providers: [AccountsService, DatabaseService],

})
export class AccountsModule {}
