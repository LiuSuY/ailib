import { HttpException, HttpStatus, Injectable, Res, Session, UnauthorizedException, UnprocessableEntityException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private jwtService: JwtService) { }

    async signIn(username: string, password: string, session) {
        if(!(session.captcha && session.captcha.toUpperCase() == password.toUpperCase())) {
            throw new HttpException('验证码错误', HttpStatus.BAD_REQUEST);
        }
        const user = await this.usersService.findOne(username);

        if(!user){
            throw new HttpException('登录失败,用户名或验证码错误', HttpStatus.BAD_REQUEST);
        }
        const payload = await this.usersService.findOneUserInfo(user.id);
        return {
            token: await this.jwtService.signAsync(payload),
        };
    }

    async logOut() {
        return '退出登录成功';
    }
}
