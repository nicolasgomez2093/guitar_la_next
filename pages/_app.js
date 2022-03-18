import "../styles/normalize.css";
import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    setCarrito(carritoLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (producto) => {
    // Primero verificamos que no le demos dos veces al boton de agregar producto con este if
    if (carrito.some((articulo) => articulo._id === producto._id)) {
      const carritoActualizado = carrito.map((articulo) => {
        if (articulo._id === producto._id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  // Para modificar la cantidad del producto desde el carrito
  const actualizarCantidad = producto => {
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo._id === producto._id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });

    setCarrito(carritoActualizado)
  }

  const eliminarProducto = id => {
      const carritoActualizado = carrito.filter( articulo => articulo._id !== id )
      setCarrito(carritoActualizado)
  }


  return (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarCarrito={agregarCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarProducto={eliminarProducto}
    />
  );
}

export default MyApp;
