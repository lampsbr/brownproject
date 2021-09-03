import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUser.decorator';
import JwtAuthGuard from 'src/auth/jwtAuth.guard';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    @Get('details')
    @UseGuards(JwtAuthGuard)
    async getDetails(@GetUser() usr: User) {
        console.log(usr);
        return 'user details';
    }

}
