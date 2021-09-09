import styles from "../styles/EntradaNumerica.module.css";

interface EntradaNumericaProps {
  texto: string;
  valor: number;
  quandoMudar: (novoValor: number) => void;
}
export default function EntradaNumerica(props: EntradaNumericaProps) {
  const { texto, valor, quandoMudar } = props;

  const decremento = () => quandoMudar(valor - 1);
  const incremento = () => quandoMudar(valor + 1);
  return (
    <div className={styles.entradaNumerica}>
      <span className={styles.texto}>{texto}</span>
      <span className={styles.valor}>{valor}</span>
      <div className={styles.botoes}>
        <button className={styles.botao} onClick={decremento}>
          -
        </button>
        <button className={styles.botao} onClick={incremento}>
          +
        </button>
      </div>
    </div>
  );
}
