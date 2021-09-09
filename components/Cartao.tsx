import styles from "../styles/Cartao.module.css";

interface CartaoProps {
  bgColor?: string;
  children?: React.ReactNode[] | React.ReactNode;
}

export default function Cartao(props: CartaoProps) {
  const { bgColor, children } = props;

  return (
    <div
      className={styles.cartao}
      style={{
        backgroundColor: bgColor || "#ffffff",
      }}
    >
      {children}
    </div>
  );
}
