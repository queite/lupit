import { EditPlayerForm } from "@/app/ui/EditPlayerForm"

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id

  const playerResp = await fetch(`http://localhost:3333/player/${id}`)
  const player = await playerResp.json();
  const teamsResp = await fetch(`http://localhost:3333/teams`)
  const teams = await teamsResp.json();

  return (
    <>
      <EditPlayerForm player={player} teams={teams}/>
    </>
  )
}