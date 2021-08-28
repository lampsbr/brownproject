import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { request } from 'express';
import { AppService } from './app.service';
import JwtAuthGuard from './auth/jwtAuth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('loggedin')
  isLoggedIn(@Request() req) {
    return request.user;
  }
}
