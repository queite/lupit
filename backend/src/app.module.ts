import { Module } from '@nestjs/common';
import { TeamController } from './controllers/team.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaTeamsRepository } from './repositories/prisma/prisma.team.repository';
import { TeamsRepository } from './repositories/teams.repository';
import { TeamService } from './services/team.service';

@Module({
  imports: [],
  controllers: [TeamController],
  providers: [
    PrismaService,
    TeamService,
    {
      provide: TeamsRepository,
      useClass: PrismaTeamsRepository
    },
  ],
})
export class AppModule {}
