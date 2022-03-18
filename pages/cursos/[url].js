import { Layout } from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Curso.module.css";
import { formatearFecha } from "../../helpers";

function ListadoCurso({ curso }) {
  const { titulo, imagen, contenido, published_at } = curso;
  return (
    <Layout pagina={titulo}>
      <main className="contenedor">
        <h1 className="heading">{titulo}</h1>
        <article className={styles.entrada}>
          <Image
            priority
            layout="responsive"
            width={600}
            height={400}
            src={imagen.url}
            alt={`Imagen entrada ${titulo}`}
          />
          <div className={styles.contenido - curso}>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto - curso}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query: { url } }) {
  const urlCursos = `${process.env.API_URL}/cursos?url=${url}`;
  const respuesta = await fetch(urlCursos);
  const curso = await respuesta.json();

  return {
    props: {
      curso,
    },
  };
}
export default ListadoCurso;
