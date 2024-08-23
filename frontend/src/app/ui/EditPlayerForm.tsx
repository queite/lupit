import { updatePlayer } from "../lib/actions";
import { Team } from "./PlayerForm";

interface Player {
  id: number
  name: string
  age: number
  teamId: number
  createdAt: string
  updatedAt: string
}

export function EditPlayerForm({
  player,
  teams
}: {
  player: Player,
  teams: Team[]
}) {

  const updatePlayerWithId = updatePlayer.bind(null, Number(player.id));

  return(
    <form action={updatePlayerWithId}>
      <input type="text" name="name" placeholder="Nome" defaultValue={player.name}/>
      <input type="number" name="age" placeholder="Idade" defaultValue={player.age}/>
      <select name="teamId" defaultValue={player.teamId}>
        <option value="">Selecione um time</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
      <button type='submit'>Salvar</button>
    </form>
  )
}