import { MouseEvent } from "react";

import PortaModel from "../model/PortaModel";
import Presente from "./Presente";
import styles from "../styles/Porta.module.css";

interface PortaProps {
  porta: PortaModel;
  quandoMudar: (novaPorta: PortaModel) => void;
}

export default function Porta(props: PortaProps) {
  const { porta, quandoMudar } = props;

  const classeSelecionada =
    porta.selecionada && !porta.aberta ? styles.selecionada : "";

  const abrirPorta = (e: MouseEvent) => {
    e.stopPropagation();
    quandoMudar(porta.abrir());
  };

  const selecaoPorta = () => quandoMudar(porta.alternarSelecao());

  const renderizarPresente = () => (porta.temPresente ? <Presente /> : false);

  const renderizarPorta = () => (
    <div className={styles.porta}>
      <div className={styles.numero}>{porta.numero || 1}</div>
      <div className={styles.macaneta} onClick={abrirPorta} />
    </div>
  );

  return (
    <div className={styles.area} onClick={selecaoPorta}>
      <div className={[styles.estrutura, classeSelecionada].join(" ")}>
        {porta.aberta ? renderizarPresente() : renderizarPorta()}
      </div>
      <div className={styles.chao} />
    </div>
  );
}
