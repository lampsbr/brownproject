import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './localAuth.guard';
import RequestWithUser from './requestWithUser.interface';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    async signup(@Body() data: CreateUserDto) {
        return this.authService.register(data);
    }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async signin(@Req() req: RequestWithUser) {
        const user = req.user;
        delete user.password
        return user;
    }
}
