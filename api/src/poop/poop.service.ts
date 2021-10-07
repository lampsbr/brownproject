import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthzUser } from 'src/general/auth.user.type';
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

    async delete(id: string, usr: AuthzUser): Promise<String> {
        try {
            await this.pooRepo.delete({id, userEmail: usr.email});
            return "deleted";
        } catch (err) {
            this.logger.error(err);
            throw new InternalServerErrorException(err);
        }
    }

    async add(data: CreatePoopDto, usr: AuthzUser): Promise<Poop> {
        try {
            console.log(data, usr);
            const newOne = await this.pooRepo.create({type: data.type, userEmail: usr.email, ts: new Date()});
            await this.pooRepo.save(newOne);
            return newOne;
        } catch (err) {
            this.logger.error(err);
            throw new InternalServerErrorException(err);
        }
    }

    async getAll(usr: AuthzUser): Promise<Poop[]> {
        try {
            return await this.pooRepo.find({ where: { userEmail: usr.email }, order: { ts: 'DESC' } });
        } catch (err) {
            this.logger.error(err);
            throw new InternalServerErrorException(err);
        }
    }

    async getRecent(usr: AuthzUser): Promise<Poop[]> {
        try {
            return await this.pooRepo.find({ where: { userEmail: usr.email }, order: { ts: 'DESC' }, take: 10 });
        } catch (err) {
            this.logger.error(err);
            throw new InternalServerErrorException(err);
        }
    }
}
