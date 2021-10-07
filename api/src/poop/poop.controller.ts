import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TokenUser } from 'src/authz/user.decorator';
import { AuthzUser } from 'src/general/auth.user.type';
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
    @UseGuards(AuthGuard('jwt'))
    async getDetails(@TokenUser() usr: AuthzUser): Promise<Poop[]> {
        return await this.pooService.getRecent(usr);
    }

    /**
     * Returns all poops from user
     * @since 20210903
     */
    @Get('all')
    @UseGuards(AuthGuard('jwt'))
    async getAll(@TokenUser() usr: AuthzUser): Promise<Poop[]> {
        return await this.pooService.getAll(usr);
    }

    /**
     * Returns recent poops from user
     * @since 20211007
     */
    @Get('recent')
    @UseGuards(AuthGuard('jwt'))
    async getRecent(@TokenUser() usr: AuthzUser): Promise<Poop[]> {
        return await this.pooService.getRecent(usr);
    }

    /**
     * Inserts poop
     * @since 20210903
     */
    @Post()
    @UseGuards(AuthGuard('jwt'))
    async add(@TokenUser() usr: AuthzUser, @Body() data: CreatePoopDto): Promise<Poop> {
        return await this.pooService.add(data, usr);
    }

    /**
     * Deletes poop
     * @since 20210903
     */
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async delete(
        @TokenUser() usr: AuthzUser,
        @Param('id', ParseUUIDPipe) id: string): Promise<String> {
        return await this.pooService.delete(id, usr);
    }

}
