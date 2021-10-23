import { Injectable } from '@nestjs/common';
const DB = require('../../../../utilities/database.handler');
@Injectable()
export class DatabaseService {
    async connectDB(dbName) {
        const DBH = await new DB.DatabaseHandler(dbName,'mongodb://localhost:27017');
        await DBH.connect();
        return DBH;
    }
}
