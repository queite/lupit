import Header from "@/components/Header";
import PlayerTable from "@/components/PlayerTable";
import styles from "./page.module.css";

export default function Home() {
  return (
  <main>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <div className="container">
        <Header title="FutLovers"/>
        <div className="home-title">
          <h1>Jogadores</h1>
          <button>+   ADICIONAR JOGADOR</button>
        </div>
        <PlayerTable/>
      </div>
    </main>
  );
}
