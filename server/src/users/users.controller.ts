import { Controller, Get, Request, Post, Body, Session, Req, Res, HttpCode } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../auth/auth.service';
import { Public } from '../auth/decorators/public.decorator';
import { signInDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { Readable } from 'stream';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) { }


    @Public()
    @Get('/code')
    async getCode(@Session() session, @Res() res) {
        const { data, text } = this.usersService.getCode();
        session.captcha = text;
        res.type('image/svg+xml')
        res.end(data);
    }


    @Public()
    @Post('/login')
    @ApiOperation({ summary: '用户登录' })
    @ApiResponse({ status: 200, description: '登录成功' })
    async login(@Body() signInDto, @Session() session) {
        return this.authService.signIn(signInDto.phone, signInDto.code, session);
    }


    @Public()
    @Post('/logOut')
    @ApiOperation({ summary: '用户退出' })
    @ApiResponse({ status: 200, description: '退出成功' })
    async logOut(@Body() body){
        return this.authService.logOut();
    }

    @Get('/profile')
    @ApiBearerAuth()
    getProfile(@Request() req) {
        return req.user;
    }

}
