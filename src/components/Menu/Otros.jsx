import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import appFirebase from "../../credenciales";

const db = getFirestore(appFirebase);
const Otros = ({ agregarAlCarrito }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
      const obtenerProductos = async () => {
        const productosSnapshot = await getDocs(collection(db, "productos"));
        const productosList = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productosList);
      };
  
      obtenerProductos();
    }, []);

  return (
    <div className="menu-section">
      <h2>Otros/Varios</h2>
      <div id="carouselProductos" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {productos.map((producto, index) => (
            <div key={producto.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="card" style={{ width: "18rem", margin: "auto" }}>
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body text-center">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                  <span className="price">${parseFloat(producto.precio).toFixed(2)}</span>
                  <button
                    className="btn btn-outline-warning d-block w-100 mt-2"
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    Ordenar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselProductos" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselProductos" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Otros;
