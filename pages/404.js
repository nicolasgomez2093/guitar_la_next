import Link from "next/link";
import styles from "../styles/NoEncontrado.module.css";

function NoEncontrado() {
  return (
    <div className={styles.noEncontrado}>
      <h1 className="heading">Pagina no encontrada</h1>
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
}
export default NoEncontrado;
