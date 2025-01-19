import React from "react";

const SectionVideo = () => {
  return (
    <section className="video-section">
      <h1 className="video-title">Descubre el Sabor de Nuestra Café en Cada Taza</h1>
      <p className="video-description">
        En HELD COFFEE SHOP, te ofrecemos más que café; te brindamos una experiencia única en cada taza.
      </p>
      <div className="video-container">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/-EYNyZjdUw0?autoplay=1&mute=1&loop=1&playlist=-EYNyZjdUw0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default SectionVideo;