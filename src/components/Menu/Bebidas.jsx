import React, { useRef } from "react";
import cafelecheImg from "../../assets/cafeleche.jpg";
import capuccinoVanillaImg from "../../assets/capuccino-vainilla.jpg";
import chocolateAmbaImg from "../../assets/Chocolateamba.jpg";
import jugoMoraImg from "../../assets/jugomora.jpg";
import batido2Img from "../../assets/Batido2.jpg";
import colaImg from "../../assets/cola.jpg";
import passionFruitImg from "../../assets/passion fruit.jpg";
import tropicalImg from "../../assets/tropical.jpg";
import nutellaWebImg from "../../assets/nutella-web.jpg";
import unicornioWebImg from "../../assets/unicornio-web.jpg";
import oreoWebImg from "../../assets/oreo-web.jpg";
import "../../styles/estilo-menu.css";

const Bebidas = ({ agregarAlCarrito }) => {
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
    { nombre: "Café Espresso", descripcion: "Café concentrado, fuerte y aromático", precio: 2.25, img: cafelecheImg },
    { nombre: "Latte", descripcion: "Café con leche vaporizada y suave espuma", precio: 2.90, img: capuccinoVanillaImg },
    { nombre: "Chocolate Caliente", descripcion: "Leche caliente con cacao y un toque de canela", precio: 2.90, img: chocolateAmbaImg },
    { nombre: "Jugos", descripcion: "Variedad de frutas frescas a elegir", precio: 2.90, img: jugoMoraImg },
    { nombre: "Batidos", descripcion: "Variedad de frutas frescas a elegir", precio: 3.50, img: batido2Img },
    { nombre: "Gaseosas", descripcion: "Variedad de gaseosas a elegir", precio: 1.25, img: colaImg },
    { nombre: "Jumbo Passion Fruit", descripcion: "Mezcla de FRESA con NARANJA", precio: 3.99, img: passionFruitImg },
    { nombre: "Jumbo Tropical Fruit", descripcion: "Mezcla de MORA con GUANÁBANA", precio: 3.99, img: tropicalImg },
    { nombre: "Frozen NUTELLA", descripcion: "Frappe de Nutella con crema chantilli y chispitas de chocolate", precio: 4.50, img: nutellaWebImg },
    { nombre: "Frozen UNICORNIO", descripcion: "Frappe de frutos rojos con crema chantilli y masmelos", precio: 4.50, img: unicornioWebImg },
    { nombre: "Frozen OREO", descripcion: "Frappe de Oreo con crema chantilli y jarabe de chocolate", precio: 4.50, img: oreoWebImg },
  ];

  return (
    <div className="menu-section">
      <h2>Bebidas</h2>
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

export default Bebidas;
