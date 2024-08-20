import { IsNotEmpty } from "class-validator";

export class CreateTeam {
  @IsNotEmpty()
  name: string
}