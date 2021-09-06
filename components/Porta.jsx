import styles from "../styles/Porta.module.css"

export default function Porta({ numero, selecionada }) {
  const classeSelecionada = selecionada ? styles.selecionada : "";
  return (
    <div className={styles.area}>
      <div className={[styles.estrutura, classeSelecionada].join(' ')}>
        <div className={styles.porta}>
          <div className={styles.numero}>{numero || 1}</div>
          <div className={styles.macaneta} />
        </div>
      </div>
      <div className={styles.chao} />
    </div>
  )
}