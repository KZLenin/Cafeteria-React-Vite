import React, { useRef } from "react";
import alemanImg from "../assets/aleman-final.jpg";
import pancakeImg from "../assets/pancake.jpg";
import espigalImg from "../assets/espigal.jpg";
import tradicionalImg from "../assets/tradicional.jpg";
import ambatenoImg from "../assets/ambateño.jpg";
import lightImg from "../assets/ligth.jpg";
import "../styles/estilo-menu.css";

const Desayunos = ({ agregarAlCarrito }) => {
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
    {
      nombre: "Desayuno Alemán",
      descripcion: "Salchicha Ranchera + Huevos con jamón + Tostada mixta + Jugo + Cappuccino.",
      precio: 7.50,
      img: alemanImg,
    },
    {
      nombre: "Desayuno Pancake",
      descripcion: "3 Pancakes + Miel de Maple + Huevos con jamón + Yogurt Frutos Rojos + Jugo + Cappuccino.",
      precio: 7.50,
      img: pancakeImg,
    },
    {
      nombre: "Desayuno Espigal",
      descripcion: "Huevos con Tocino + Tostada mixta + Yogurt Frutos Rojos + Jugo + Cappuccino.",
      precio: 8.50,
      img: espigalImg,
    },
    {
      nombre: "Desayuno Tradicional",
      descripcion: "Sanduche (Jamón y Queso) + Huevos + Jugo + Café.",
      precio: 6.50,
      img: tradicionalImg,
    },
    {
      nombre: "Desayuno Ambateño",
      descripcion: "Tostada mixta + Huevos + Jugo + Chocolate.",
      precio: 4.99,
      img: ambatenoImg,
    },
    {
      nombre: "Desayuno Light",
      descripcion: "4 Tostadas con Mantequilla y Mermelada + Jugo + Café.",
      precio: 4.99,
      img: lightImg,
    },
  ];

  return (
    <div className="menu-section">
      <h2>Desayunos</h2>
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {productos.map((producto, index) => (
            <div className="item" key={index}>
              <img src={producto.img} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <span className="price">${producto.precio}</span>
              <button
                className="add-to-cart"
                onClick={() => agregarAlCarrito(producto)}
              >
                Ordenar
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button className="prev" onClick={handlePrev}>
          ‹
        </button>
        <button className="next" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Desayunos;
