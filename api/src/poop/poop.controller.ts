import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/getUser.decorator';
import JwtAuthGuard from 'src/auth/jwtAuth.guard';
import { User } from 'src/users/user.entity';
import { CreatePoopDto } from './dto/createPoop.dto';
import { Poop } from './poop.entity';
import { PoopService } from './poop.service';

@Controller('poop')
export class PoopController {
    constructor(private readonly pooService: PoopService) { }

    /**
     * Returns the 10 most recent poops from user
     * @since 20210903
     */
    @Get()
    @UseGuards(JwtAuthGuard)
    async getDetails(@GetUser() usr: User): Promise<Poop[]> {
        return await this.pooService.getRecent(usr);
    }

    /**
     * Returns all poops from user
     * @since 20210903
     */
    @Get('all')
    @UseGuards(JwtAuthGuard)
    async getAll(@GetUser() usr: User): Promise<Poop[]> {
        return await this.pooService.getAll(usr);
    }

    /**
     * Inserts poop
     * @since 20210903
     */
    @Post()
    @UseGuards(JwtAuthGuard)
    async add(@GetUser() usr: User, @Body() data: CreatePoopDto): Promise<Poop> {
        return await this.pooService.add(data, usr);
    }

    /**
     * Deletes poop
     * @since 20210903
     */
    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async delete(
        @GetUser() usr: User,
        @Param('id', ParseUUIDPipe) id: string): Promise<String> {
        return await this.pooService.delete(id, usr);
    }

}
