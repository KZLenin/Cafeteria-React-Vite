import React from "react";

const DescargaApp = () => {
  return (
    <section className="descarga-app">
      <h1 className="title-descarga">Descarga nuestra app!</h1>
      <p className="descarga-description">
        Reserva una mesa o un espacio para ti directamente desde nuestra app móvil.
      </p>
      <img 
        className='app-img' 
        src="https://i.ytimg.com/vi/lySRx75rsoo/maxresdefault.jpg" 
        alt="Vista previa de la aplicación" 
      />
      
      {/* Botones de descarga */}
      <div className="descarga-botones">
        <a 
          href="https://www.apple.com/es/app-store/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
            alt="Descargar en App Store" 
            className="app-store-btn"
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
            className="google-play-btn"
          />
        </a>
      </div>
    </section>
  );
};

export default DescargaApp;
