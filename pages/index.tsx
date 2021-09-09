import Link from "next/link";
import { useState } from "react";

import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from "../styles/formulario.module.css";

export default function Formulario() {
  const [quantidadePortas, setQuantidadePortas] = useState(3);
  const [portaComPresente, setPortaComPresente] = useState(1);

  const quandoMudar = (fn) => (novaQuantidade) => fn(novaQuantidade);
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">Monty Hall</Cartao>
        <Cartao>
          <EntradaNumerica
            valor={quantidadePortas}
            texto="Quantidade de Portas?"
            quandoMudar={quandoMudar(setQuantidadePortas)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            valor={portaComPresente}
            texto="Qual a porta com o presente?"
            quandoMudar={quandoMudar(setPortaComPresente)}
          />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${quantidadePortas}/${portaComPresente}`}>
            <h2 className={styles.link}>Iniciar Jogo</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
