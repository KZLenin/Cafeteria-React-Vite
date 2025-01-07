import React from "react";

const SectionShop = () => {
  return (
    <section className="shop">
      <h2 className="title-shop">Nuevos locales en 2025!</h2>
      <div className="shop-content1">
        <p className="parrafo-shop">
        Tu restaurante favorito estará aun más cerca de ti. El año que viene,
        aperturaremos nuevas sucursales en diferentes ciudades.
        </p>
        <img
          className="shop-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYolTRShezogq9rH6GZE0SIhyN72UFtaEbg&s"
          alt=""
        />
      </div>
      <a href="/informacion" className="boton-2">Puntos de venta actuales</a>
      <div className="shop-content2">
        <h2 className="title-job">¿Quieres trabajar con nosotros?</h2>
        <img
          className="job-img"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGoFn9WyzWT69lqic-JgFETtdKLVRhcLAF98UrEBMmF9qDEspYemaLMbiQKivElu7cks5UjpTZkOabBSpMvUz-2OTtVNKHsXuEtTeoh25ToYs9e5T6O5wDdP6BQlNZHCcHhKHwYMzOlxah/s16000-rw/mozoaarg.jpg"
          alt=""
        />
        <p className="parrafo-job">
          Necesitamos personal comprometido a brindar un servicio de alta calidad. Si
          tienes años de experiencia en atención al cliente y te interesa formar parte de nuestro equipo, hemos abierto cupos para contratación de personal.
          <br />
          Envía tu hoja de vida a nuestro correo electrónico heldcoffeeshop@gmail.com y nos pondremos en contacto contigo lo antes posible.
        </p>
        <button className="boton-3">CONTACTO</button>
      </div>
    </section>
  );
};

export default SectionShop;