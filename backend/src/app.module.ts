import { Module } from '@nestjs/common';
import { PlayerController } from './controllers/player.controler';
import { TeamController } from './controllers/team.controller';
import { PrismaService } from './database/prisma.service';
import { PlayersRepository } from './repositories/players.repository';
import { PrismaPlayersRepository } from './repositories/prisma/prisma.player.repository';
import { PrismaTeamsRepository } from './repositories/prisma/prisma.team.repository';
import { TeamsRepository } from './repositories/teams.repository';
import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';

@Module({
  imports: [],
  controllers: [TeamController, PlayerController],
  providers: [
    PrismaService,
    TeamService,
    PlayerService,
    {
      provide: TeamsRepository,
      useClass: PrismaTeamsRepository
    },
    {
      provide: PlayersRepository,
      useClass: PrismaPlayersRepository
    }
  ],
})
export class AppModule {}
