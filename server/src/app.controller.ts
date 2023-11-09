import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/decorators/public.decorator';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @Public()
  @Get()
  @ApiTags('welcome')
  getHello(): string {
    return this.appService.getHello();
  }
}
