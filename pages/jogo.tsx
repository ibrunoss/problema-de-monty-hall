import { useState } from "react";
import Link from "next/link";

import Porta from "../components/Porta";
import { criarPortas, atualizaPortas } from "../functions/porta";
import styles from "../styles/jogo.module.css";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(4, 2));

  const quandoMudar = (portaAtualizada) =>
    setPortas(atualizaPortas(portas, portaAtualizada));

  function renderizarPortas() {
    return portas.map((porta) => (
      <Porta key={porta.numero} porta={porta} quandoMudar={quandoMudar} />
    ));
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{renderizarPortas()}</div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
