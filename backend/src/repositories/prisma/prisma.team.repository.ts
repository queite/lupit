import { Injectable } from '@nestjs/common';
import { Teams } from '@prisma/client';
import { CreateTeam } from 'src/dtos/create.team';
import { PrismaService } from '../../database/prisma.service';
import { TeamsRepository } from '../teams.repository';

@Injectable()
export class PrismaTeamsRepository implements TeamsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTeam): Promise<Teams> {
    return await this.prisma.teams.create({
      data,
    });
  }

  async list() {
    return await this.prisma.teams.findMany()
  }

  async update(id: number, data: CreateTeam) {
    return await this.prisma.teams.update({
      where: { id },
      data: {
        name: data.name,
        updatedAt: new Date()
      }
    })
  }

  async delete(id: number) {
    return await this.prisma.teams.delete({ where: { id } })
  }

  async findById(id: number) {
    return await this.prisma.teams.findUnique({ where: { id }})
  }
}