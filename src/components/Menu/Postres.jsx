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
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {productos.map((producto, index) => (
            <div className="item" key={index}>
              <img src={producto.img} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <span className="price">${producto.precio}</span>
              <button className="add-to-cart" onClick={() => agregarAlCarrito(producto)}>
                Ordenar
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="prev" onClick={handlePrev}>‹</button>
        <button className="next" onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default Postres;
