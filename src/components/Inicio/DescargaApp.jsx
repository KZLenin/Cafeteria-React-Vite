import React from "react";

const DescargaApp = () => {
  return (
    <section className="container text-center my-5">
      <h1 className="fw-bold">¡Descarga nuestra app!</h1>
      <p className="lead">
        Reserva una mesa o un espacio para ti directamente desde nuestra app móvil.
      </p>
      
      {/* Imagen de la aplicación */}
      <div className="d-flex justify-content-center my-4">
        <img
          className="img-fluid rounded shadow"
          src="https://i.ytimg.com/vi/lySRx75rsoo/maxresdefault.jpg"
          alt="Vista previa de la aplicación"
          style={{ maxWidth: "600px" }}
        />
      </div>

      {/* Botones de descarga */}
      <div className="d-flex justify-content-center gap-3 mt-4">
        <a
          href="https://www.apple.com/es/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
            alt="Descargar en App Store"
            className="img-fluid"
            style={{ maxWidth: "150px" }}
          />
        </a>

        <a
          href="https://play.google.com/store/games?device=windows"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://olelifego.com/wp-content/uploads/2022/09/googeplay-1.png"
            alt="Disponible en Google Play"
            className="img-fluid"
            style={{ maxWidth: "170px" }}
          />
        </a>
      </div>
    </section>
  );
};

export default DescargaApp;