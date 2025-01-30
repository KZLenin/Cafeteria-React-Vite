import React, { useRef } from "react";
import alemanImg from "../../assets/aleman-final.jpg";
import pancakeImg from "../../assets/pancake.jpg";
import espigalImg from "../../assets/espigal.jpg";
import tradicionalImg from "../../assets/tradicional.jpg";
import ambatenoImg from "../../assets/ambateño.jpg";
import lightImg from "../../assets/ligth.jpg";
import "../../styles/estilo-menu.css";

const Desayunos = ({ agregarAlCarrito }) => {
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
      <div id="carouselDesayunos" className="carousel slide" data-bs-ride="carousel">
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

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselDesayunos" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselDesayunos" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Desayunos;
