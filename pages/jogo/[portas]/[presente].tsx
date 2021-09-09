import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Porta from "../../../components/Porta";
import { criarPortas, atualizaPortas } from "../../../functions/porta";
import styles from "../../../styles/jogo.module.css";
import PortaModel from "../../../model/PortaModel";

export default function Jogo() {
  const [portas, setPortas] = useState<PortaModel[]>(criarPortas(0, 0));

  const { query } = useRouter();

  useEffect(() => {
    const quantidadeDePortas = +query.portas;
    const portaPremiada = +query.presente;

    setPortas(criarPortas(quantidadeDePortas, portaPremiada));
  }, [query]);

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
