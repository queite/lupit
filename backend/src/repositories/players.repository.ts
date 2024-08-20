import { Players } from "@prisma/client";
import { CreatePlayer } from "src/dtos/create.player";

export abstract class PlayersRepository {
  abstract create(data: CreatePlayer): Promise<Players>
  abstract list(): Promise<Players[]>
  abstract update(id: number, data: CreatePlayer): Promise<Players>
  abstract delete(id: number): Promise<Players>
  abstract findById(id: number): Promise<Players>
}