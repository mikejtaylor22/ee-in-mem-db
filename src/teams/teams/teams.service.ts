import {TeamDto} from '../teams/team.model';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamsService {
  constructor(private readonly dbService:InMemoryDBService<TeamDto>){}
   

    addTeam(team:TeamDto):TeamDto{
        return this.dbService.create(team); 
    }

    getAll():TeamDto[] {
        return this.dbService.getAll();
    }

    getSingleTeam(id:string):TeamDto{
        return this.dbService.get(id);
    }
   
     
    
   
}