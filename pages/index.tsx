import Link from "next/link";
import { useEffect, useState } from "react";

import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from "../styles/formulario.module.css";

export default function Formulario() {
  const [invalido, setInvalido] = useState<boolean>(true);
  const [quantidadePortas, setQuantidadePortas] = useState(3);
  const [portaComPresente, setPortaComPresente] = useState(1);

  useEffect(() => {
    const quantidadeDePortasValida =
      quantidadePortas >= 3 && quantidadePortas <= 100;
    const portaPremiadaValida =
      portaComPresente >= 1 && portaComPresente <= quantidadePortas;

    setInvalido(!quantidadeDePortasValida || !portaPremiadaValida);
  }, [quantidadePortas, portaComPresente]);

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
          <Link href={`/jogo/${quantidadePortas}/${portaComPresente}`} passHref>
            <button className={styles.link} disabled={invalido}>
              Iniciar Jogo
            </button>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
