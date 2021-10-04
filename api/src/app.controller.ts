import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { request } from 'express';
import { AppService } from './app.service';
import { Permissions } from './permissions.decorator';
import { PermissionsGuard } from './permissions.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('loggedin')
  isLoggedIn(@Request() req) {
    return request.user;
  }


  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('root')
  @Get('rootroute')
  rootRoute(@Request() req) {
    return 'you have root permission!';
  }

}
