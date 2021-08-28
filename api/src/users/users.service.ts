import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepo: Repository<User>
    ){}

    async getByEmail(email: string): Promise<User> {
        const user = await this.usersRepo.findOne({email});
        if(user){
            return user;
        }
        throw new NotFoundException('User not found');
    }

    async getById(id: string): Promise<User> {
        const user = await this.usersRepo.findOne(id);
        if(user){
            return user;
        }
        throw new NotFoundException('User not found');
    }

    async create (userData: CreateUserDto) {//: Promise<User>{
        const user = await this.usersRepo.create(userData);
        await this.usersRepo.save(user);
        return user;
    }
}
