import { Teams } from "@prisma/client";
import { CreateTeam } from "src/dtos/create.team";

export abstract class TeamsRepository {
  abstract create(data: CreateTeam): Promise<Teams>
  abstract list(): Promise<Teams[]>
  abstract update(id: number, data: CreateTeam): Promise<Teams>
  abstract delete(id: number): Promise<Teams>
  abstract findById(id: number): Promise<Teams>
}