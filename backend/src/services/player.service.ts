import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePlayer } from "src/dtos/create.player";
import { PlayersRepository } from "src/repositories/players.repository";

@Injectable()
export class PlayerService {
  constructor(private playersRepository: PlayersRepository) {}

  async create(data: CreatePlayer) {
    const player = await this.playersRepository.create(data)

    return player
  }

  async list() {
    return await this.playersRepository.list()
  }

  async update(id: number, data: CreatePlayer) {
    await this.existingPlayer(id)
    return await this.playersRepository.update(id, data)
  }

  async delete(id: number) {
    await this.existingPlayer(id)
    return await this.playersRepository.delete(id)
  }

  async existingPlayer(id: number) {
    const existingPlayer = await this.playersRepository.findById(id)

    if (!existingPlayer) throw new NotFoundException("Player not found")
  }
}