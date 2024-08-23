import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePlayer } from "src/dtos/create.player";
import { PlayersRepository } from "src/repositories/players.repository";

@Injectable()
export class PlayerService {
  constructor(private playersRepository: PlayersRepository) {}

  async create(data: CreatePlayer) {
    const convertedData = {
      name: data.name,
      age: Number(data.age),
      teamId: Number(data.teamId)
    }
    const player = await this.playersRepository.create(convertedData)

    return player
  }

  async list() {
    return await this.playersRepository.list()
  }

  async update(id: number, data: CreatePlayer) {
    await this.existingPlayer(id)

    const treatedData = {
      name: data.name,
      age: Number(data.age),
      teamId: Number(data.teamId)
    }
    return await this.playersRepository.update(id, treatedData)
  }

  async delete(id: number) {
    await this.existingPlayer(id)
    return await this.playersRepository.delete(id)
  }

  async existingPlayer(id: number) {
    const existingPlayer = await this.playersRepository.findById(id)

    if (!existingPlayer) throw new NotFoundException("Player not found")

    return existingPlayer
  }
}