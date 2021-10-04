import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
    @UseGuards(AuthGuard('jwt'))
    //async getDetails(@GetUser() usr: User): Promise<Poop[]> {
    async getDetails(): Promise<Poop[]> {
        // return await this.pooService.getRecent(usr);
        return await this.pooService.getRecent(new User());
    }

    /**
     * Returns all poops from user
     * @since 20210903
     */
    @Get('all')
    @UseGuards(AuthGuard('jwt'))
    // async getAll(@GetUser() usr: User): Promise<Poop[]> {
    async getAll(): Promise<Poop[]> {
        // return await this.pooService.getAll(usr);
        return await this.pooService.getAll(new User());
    }

    /**
     * Inserts poop
     * @since 20210903
     */
    @Post()
    @UseGuards(AuthGuard('jwt'))
    // async add(@GetUser() usr: User, @Body() data: CreatePoopDto): Promise<Poop> {
    async add(@Body() data: CreatePoopDto): Promise<Poop> {
        // return await this.pooService.add(data, usr);
        return await this.pooService.add(data, new User());
    }

    /**
     * Deletes poop
     * @since 20210903
     */
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async delete(
        // @GetUser() usr: User,
        @Param('id', ParseUUIDPipe) id: string): Promise<String> {
        // return await this.pooService.delete(id, usr);
        return await this.pooService.delete(id, new User());
    }

}
