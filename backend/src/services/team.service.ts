import { Injectable } from "@nestjs/common";
import { CreateTeam } from "src/dtos/create-team";
import { TeamsRepository } from "src/repositories/team.repository";

@Injectable()
export class TeamService {
  constructor(private teamRepository: TeamsRepository) {}

  async create(data: CreateTeam) {
    const team = await this.teamRepository.create(data)

    return team
  }
}