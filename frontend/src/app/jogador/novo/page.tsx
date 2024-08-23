import Header from "../../ui/Header";
import { PlayerForm } from "../../ui/PlayerForm";

export default function Players() {
  return (
    <div className="container">
      <Header title="Dashboard"/>
      <PlayerForm title="Inserir jogador"/>
    </div>
  )
}