import Header from "@/components/Header";
import PlayerTable from "@/components/PlayerTable";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header title="FutLovers"/>
        <PlayerTable/>
      </div>
    </main>
  );
}
