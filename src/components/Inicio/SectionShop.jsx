import React from "react";

const SectionShop = () => {
  return (
    <section className="shop">
      <h2 className="title-shop"> Conoce nuestros puntos de venta!</h2>
      <div className="shop-content1">
        <p className="parrafo-shop">
          Tu restaurante favorito está aun más cerca de ti. Consulta los diferentes puntos de venta aquí:
        </p>
        <img
          className="shop-img"
          src="https://i.ytimg.com/vi/wJNT-8cnVj4/maxresdefault.jpg"
          alt="Nuevas sucursales"
        />
        {/* Botón movido dentro del contenedor */}
        <a href="/informacion" className="boton-2">Puntos de venta actuales</a>
      </div>
    </section>
  );
};

export default SectionShop;
