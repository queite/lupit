import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTeam } from "src/dtos/create-team";
import { TeamsRepository } from "src/repositories/team.repository";

@Injectable()
export class TeamService {
  constructor(private teamRepository: TeamsRepository) {}

  async create(data: CreateTeam) {
    const team = await this.teamRepository.create(data)

    return team
  }

  async list() {
    return await this.teamRepository.list()
  }

  async update(id: number, data: CreateTeam) {
    await this.existingTeam(id)
    return await this.teamRepository.update(id, data)
  }

  async delete(id: number) {
    await this.existingTeam(id)
    return await this.teamRepository.delete(id)
  }

  async existingTeam(id: number) {
    const existingTeam = await this.teamRepository.findById(id)

    if (!existingTeam) throw new NotFoundException("Team not found")
  }
}