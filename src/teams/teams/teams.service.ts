import {TeamDto} from '../teams/team.model';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  constructor(private readonly dbService:InMemoryDBService<TeamDto>){}
   

   async addTeam(team:TeamDto):Promise<TeamDto>{
        return await this.dbService.create(team); 
    }

    async getAll():Promise<TeamDto[]> {
        return await this.dbService.getAll();
    }

   async getSingleTeam(id:string):Promise<TeamDto>{
        const team =  await this.dbService.get(id);
        if(team){
            return team;
        }
        throw new HttpException('Team not found',HttpStatus.NOT_FOUND)
    }
   
     
    
   
}