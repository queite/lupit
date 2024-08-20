import { Injectable } from '@nestjs/common';
import { Players } from '@prisma/client';
import { CreatePlayer } from 'src/dtos/create.player';
import { PrismaService } from '../../database/prisma.service';
import { PlayersRepository } from '../players.repository';

@Injectable()
export class PrismaPlayersRepository implements PlayersRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePlayer): Promise<Players> {
    return await this.prisma.players.create({
      data,
    });
  }

  async list() {
    return await this.prisma.players.findMany()
  }

  async update(id: number, data: CreatePlayer) {
    return await this.prisma.players.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date()
      }
    })
  }

  async delete(id: number) {
    return await this.prisma.players.delete({ where: { id } })
  }

  async findById(id: number) {
    return await this.prisma.players.findUnique({ where: { id }})
  }
}