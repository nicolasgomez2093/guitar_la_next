import Guitarra from "./Guitarra";
import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";

function Listado({ entradas }) {
  return (
    <div className={styles.blog}>
      {entradas.map((entrada) => (
        <Entrada key={entrada._id} entrada={entrada} />
      ))}
    </div>
  );
}
export default Listado;
