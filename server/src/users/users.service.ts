import { Injectable } from '@nestjs/common';
import { User, UserInfo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as svgCaptcha from 'svg-captcha';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {

  }

  async findOne(phone: string): Promise<User | undefined> {
    return this.prisma.user.findUnique({ where: { phone } });
  }

  async findOneUserInfo(id: number): Promise<UserInfo | undefined> {
    const userInfo = await this.prisma.user.findUnique({ where: { id } }).userinfo();
    return userInfo[0];
  }

  getCode() {
    const captcha = svgCaptcha.create({
      size: 4,
      noise: 4,
      fontSize: 50,
      color: false
    });
    return captcha;
  }
}


