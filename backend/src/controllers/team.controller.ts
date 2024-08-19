import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeam } from 'src/dtos/create-team';
import { TeamService } from 'src/services/team.service';

@Controller()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('team')
  getHello(@Body() data: CreateTeam) {
    return this.teamService.create(data);
  }
}
