import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTeam } from 'src/dtos/create-team';
import { TeamService } from 'src/services/team.service';

@Controller()
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('team')
  create(@Body() data: CreateTeam) {
    return this.teamService.create(data);
  }

  @Get('teams')
  list() {
    return this.teamService.list()
  }

  @Put('team/:id')
  update(@Param('id') id: number, @Body() data: CreateTeam) {
    return this.teamService.update(Number(id), data)
  }

  @Delete('team/:id')
  delete(@Param('id') id: number) {
    return this.teamService.delete(Number(id))
  }
}
