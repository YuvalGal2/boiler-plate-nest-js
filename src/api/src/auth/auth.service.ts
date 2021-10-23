import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
const APP_CONSTANTS = require('../auth/constants');
import {AccountsService} from "../accounts/accounts.service";

@Injectable()
export class AuthService {
    public user = null;
    constructor(private accountsService: AccountsService,
    private jwtService: JwtService) {}
    async validateAccount(username: string, pass: string): Promise<any> {
        let user = await this.accountsService.findOne(username);
        if (user && user.password === pass) {
            this.user = user; // assign it to be accessible to outside scope.
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async login(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload, {
                privateKey: APP_CONSTANTS.jwtConstants.secret
            })
        };
    }
    getUserDetails() {
        return this.user;
    }
}
