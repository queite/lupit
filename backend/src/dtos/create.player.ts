import { IsNotEmpty } from "class-validator";

export class CreatePlayer {
  @IsNotEmpty()
  name: string
  @IsNotEmpty()
  age: number
  @IsNotEmpty()
  teamId: number
}