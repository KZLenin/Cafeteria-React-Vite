import React from "react";

const SectionShop = () => {
  return (
    <section className="container my-5 text-center">
      <h2 className="title-shop">¡Conoce nuestros puntos de venta!</h2>
      <p className="parrafo-shop">
        Tu restaurante favorito está aún más cerca de ti. Consulta los diferentes puntos de venta aquí:
      </p>
      <img
        className="img-fluid rounded my-3"
        src="https://i.ytimg.com/vi/wJNT-8cnVj4/maxresdefault.jpg"
        alt="Nuevas sucursales"
      />
      <div>
        <a href="/informacion" className="btn btn-outline-warning w-100 mb-2">Puntos de venta actuales</a>
      </div>
    </section>
  );
};

export default SectionShop;
