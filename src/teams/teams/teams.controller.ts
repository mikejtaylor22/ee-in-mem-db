/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Get, Param, Post,ParseUUIDPipe, HttpCode} from '@nestjs/common';
import {TeamsService} from './teams.service';
import {TeamDto} from './team.model';
import {HttpStatus} from '@nestjs/common';






@Controller('api')
export class TeamsController {
constructor(private teamService:TeamsService){}

    @Get('team/:id')
   async getTeam(@Param('id', new ParseUUIDPipe({errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY})) id:string):Promise<TeamDto>{
        return await this.teamService.getSingleTeam(id);
    }

    @Get('teams')
    @HttpCode(HttpStatus.OK)
    async getAllTeams():Promise<TeamDto[]>{
        return await this.teamService.getAll();
    }

  

    @Post('team')
    @HttpCode(HttpStatus.CREATED)
    async createTeam(@Body() newTeam: TeamDto){
      return await (await this.teamService.addTeam(newTeam)).id;
     
    }

}