import Link from "next/link";
import ListadoBlog from "../components/ListadoBlog";
import { Layout } from "../components/Layout";
import styles from "../styles/Blog.module.css";

function Blog({ entradas }) {
  return (
    <div>
      <Layout pagina="Blog">
        <main className="contenedor">
          <h2 className="heading">Blog</h2>
          <ListadoBlog entradas={entradas}/>
        </main>
      </Layout>
    </div>
  );
}


//La url corre en el servidor por eso podemos usar .env pero no funciona la url si la ponemos dentro de la funcion ppal del cliente
//Para el lado del cliente hay que agregarle NEXT_PUBLIC
export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: {
      entradas: entradas,
    },
  };
}

export default Blog;
