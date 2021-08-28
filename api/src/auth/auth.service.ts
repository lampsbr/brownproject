import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    public async register(registrationData: CreateUserDto) {
        const npw = await bcrypt.hash(registrationData.password, 10);
        try {
            const newUser = await this.usersService.create({ ...registrationData, password: npw });
            delete newUser.password;
            return newUser;
        } catch (err) {
            if (err?.code === PostgresErrorCode.UniqueViolation) {
                throw new BadRequestException('User already exists');
            }
            throw new InternalServerErrorException('Error saving user ' + err);
        }
    }
    
      async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }

    public async validateUser(email: string, pw: string) {
        try {
            const user = await this.usersService.getByEmail(email);
            await this.verifyPassword(pw, user.password);
            delete user.password;
            return user;
        } catch (error) {
            throw new BadRequestException('Wrong credentials');
        }
    }

    private async verifyPassword(pw: string, hashed: string){
        const ok = await bcrypt.compare(pw, hashed);
        if(!ok){
            throw new BadRequestException('Wrong credentials');
        }
    }


}
