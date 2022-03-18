import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export const Layout = ({ children, pagina, guitarra }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta name="description" content="Sitio web de ventas de guitarras" />
      </Head>

      <Header guitarra={guitarra} />

      {children}

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null,
};
