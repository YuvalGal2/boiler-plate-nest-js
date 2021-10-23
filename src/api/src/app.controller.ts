import {Controller, Request, Post, Get, UseGuards, OnModuleInit} from '@nestjs/common';
import {AuthService} from "./auth/auth.service";
import {Public} from "./shared/decorators/SetMetaData.decorator";

@Controller()
export class AppController{
    constructor(private authService: AuthService, ) {}
    @Public()
    @Post('auth/login')
    async login(@Request() req) {
        const user = await this.authService.validateAccount(req.body.username, req.body.password);
        if (user) {
        const result = await this.authService.login(user);
        return result;
        }
        return null;
    }
    // if user with valid jwt come here he will get 200
    @Get('/')
    async JWTValidityTest() {
        return "200";
    }
}
