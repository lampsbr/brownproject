import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreatePoopDto } from './dto/createPoop.dto';
import { Poop } from './poop.entity';

@Injectable()
export class PoopService {
    constructor(
        @InjectRepository(Poop)
        private readonly pooRepo: Repository<Poop>,
        private readonly logger: Logger,
    ) { }

    async delete(id: string, usr: User): Promise<String> {
        try {
            await this.pooRepo.delete({id, userId: usr.id});
            return "deleted";
        } catch (err) {
            this.logger.error(err);
            throw new InternalServerErrorException(err);
        }
    }

    async add(data: CreatePoopDto, usr: User): Promise<Poop> {
        try {
            console.log(data, usr);
            const newOne = await this.pooRepo.create({type: data.type, userId: usr.id, ts: new Date()});
            await this.pooRepo.save(newOne);
            return newOne;
        } catch (err) {
            this.logger.error(err);
            throw new InternalServerErrorException(err);
        }
    }

    async getAll(usr: User): Promise<Poop[]> {
        try {
            return await this.pooRepo.find({ where: { userId: usr.id }, order: { ts: 'DESC' } });
        } catch (err) {
            this.logger.error(err);
            throw new InternalServerErrorException(err);
        }
    }

    async getRecent(usr: User): Promise<Poop[]> {
        try {
            return await this.pooRepo.find({ where: { userId: usr.id }, order: { ts: 'DESC' }, take: 10 });
        } catch (err) {
            this.logger.error(err);
            throw new InternalServerErrorException(err);
        }
    }
}
