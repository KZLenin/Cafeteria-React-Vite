import React, { useRef } from "react";
import brownieImg from "../../assets/brownie-de-chocolate-receta-800x571.jpg";
import cheesecakeImg from "../../assets/cheesecake-de-fresa.jpg";
import croissantImg from "../../assets/croissant-mantequilla.jpg";
import empanadaImg from "../../assets/empanadas.jpg";
import mousseImg from "../../assets/mousse.jpg";
import paletaChocolateImg from "../../assets/paleta_chocolate.jpg";
import mixtapequeImg from "../../assets/mixtapeque.jpg";
import "../../styles/estilo-menu.css";

const Postres = ({ agregarAlCarrito }) => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const productos = [
    { nombre: "Brownie", descripcion: "Brownie de chocolate con nueces", precio: 2.00, img: brownieImg },
    { nombre: "Cheesecake", descripcion: "Cheesecake clásico con fresas frescas", precio: 3.50, img: cheesecakeImg },
    { nombre: "Croissant", descripcion: "Croissant de mantequilla, perfecto para acompañar con café", precio: 2.50, img: croissantImg },
    { nombre: "Empanada", descripcion: "Empanada de carne o queso, crujiente y deliciosa", precio: 2.50, img: empanadaImg },
    { nombre: "Mousse Maracuyá", descripcion: "Delicioso mousse de maracuyá con el toque exacto de acidez", precio: 1.50, img: mousseImg },
    { nombre: "Paleta de Chocolate", descripcion: "Paleta de chocolate suave y cremosa", precio: 0.50, img: paletaChocolateImg },
    { nombre: "Mixtas", descripcion: "Variedad de embutidos y encurtidos", precio: 4.99, img: mixtapequeImg },
  ];

  return (
    <div className="menu-section">
      <h2>Postres</h2>
      <div id="carouselPostres" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {productos.map((producto, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="card" style={{ width: "18rem", margin: "auto" }}>
                <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                <div className="card-body text-center">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                  <span className="price">${producto.precio.toFixed(2)}</span>
                  <button className="btn btn-primary d-block w-100 mt-2" onClick={() => agregarAlCarrito(producto)}>
                    Ordenar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselPostres" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselPostres" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Postres;
