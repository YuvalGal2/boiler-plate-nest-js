import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../shared/database/database.service";

export type Account = any;
@Injectable()
export class AccountsService{
    constructor(private databaseService: DatabaseService) {}
    private readonly accounts = [];

    async findOne(username: string): Promise<Account | undefined> {
        const clientDB: any = await this.databaseService.connectDB('websiteDBNameHere');
        return new Promise((async (resolve, reject) => {
              const clientArr = await clientDB.findDocument('accountCollectionHere', {username: username});
              resolve(clientArr[0]);

        }));
    }
}
