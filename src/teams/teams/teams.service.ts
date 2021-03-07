import {TeamDto} from '../teams/team.model';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  constructor(private readonly dbService:InMemoryDBService<TeamDto>){}
   

    addTeam(team:TeamDto):TeamDto{
        return this.dbService.create(team); 
    }

    getAll():TeamDto[] {
        return this.dbService.getAll();
    }

   async getSingleTeam(id:string):Promise<TeamDto>{
        const team =  await this.dbService.get(id);
        if(team){
            return team;
        }
        throw new HttpException('Team not found',HttpStatus.NOT_FOUND)
    }
   
     
    
   
}