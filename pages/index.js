import Curso from "../components/Curso";
import { Layout } from "../components/Layout";
import Listado from "../components/Listado";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, curso, entradas }) {
  return (
    <div>
      <Layout pagina="Inicio" guitarra={guitarras[3]}>
        <main className="contenedor">
          <h1 className="heading">Nuestra coleccion</h1>
          <Listado guitarras={guitarras} />
        </main>
        <Curso curso={curso} />
        <div className="contenedor">
          <h1 className="heading">Blog</h1>
          <ListadoBlog entradas={entradas}/>
        </div>
      </Layout>
    </div>
  );
}

// Esta es la forma para crear multiples consultas en Nextjs
export async function getServerSideProps() {
  // Para poder filtrar por ejemplo desde el precio mas alto al mas bajo const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`
  const urlGuitarras = `${process.env.API_URL}/guitarras?_limit=6`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog)
  ]);

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json()
  ]);

  return {
    props: {
      guitarras,
      curso,
      entradas,
    },
  };
}
