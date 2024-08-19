import { Injectable } from '@nestjs/common';
import { Teams } from '@prisma/client';
import { PrismaService } from '../../database/prisma.service';
import { TeamsRepository } from '../team.repository';

@Injectable()
export class PrismaTeamsRepository implements TeamsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data): Promise<Teams> {
    return this.prisma.teams.create({
      data,
    });
  }
}