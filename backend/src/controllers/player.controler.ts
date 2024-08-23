import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePlayer } from 'src/dtos/create.player';
import { PlayerService } from 'src/services/player.service';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('player')
  create(@Body() data: CreatePlayer) {
    return this.playerService.create(data);
  }

  @Get('player/:id')
  getById(@Param('id') id: number) {
    return this.playerService.existingPlayer(Number(id))
  }

  @Get('players')
  list() {
    return this.playerService.list()
  }

  @Put('player/:id')
  update(@Param('id') id: number, @Body() data: CreatePlayer) {
    return this.playerService.update(Number(id), data)
  }

  @Delete('player/:id')
  delete(@Param('id') id: number) {
    return this.playerService.delete(Number(id))
  }
}
