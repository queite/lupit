import { Teams } from "@prisma/client";
import { CreateTeam } from "src/dtos/create-team";

export abstract class TeamsRepository {
  abstract create(data: CreateTeam): Promise<Teams>
}