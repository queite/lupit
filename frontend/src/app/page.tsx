import Header from "@/app/ui/Header";
import PlayerTable from "@/app/ui/PlayerTable";
import Link from "../../node_modules/next/link";

export default function Home() {
  return (
  <main>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <div className="container">
        <Header title="FutLovers"/>
        <div className="home-title">
          
          <h1>Jogadores</h1>
          <Link href="/jogador/novo">
            <button>+   ADICIONAR JOGADOR</button>
          </Link>
        </div>
        <PlayerTable/>
      </div>
    </main>
  );
}
