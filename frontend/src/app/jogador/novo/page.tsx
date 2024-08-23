import Link from "../../../../node_modules/next/link";
import Header from "../../ui/Header";
import { PlayerForm } from "../../ui/PlayerForm";

export default function Players() {
  return (
    <div className="container">
      <Header title="Dashboard"/>
      <PlayerForm title="Inserir jogador"/>
      <Link href="/">
        <button>Voltar</button>
      </Link>
    </div>
  )
}