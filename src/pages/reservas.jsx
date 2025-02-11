import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fotocafe from "../assets/c2.png";
import bancamovil from "../assets/banca-movil.jpeg";
import tarjetas from "../assets/tarjetas-img.jpg";
import banca from "../assets/banca2.png";
import "../styles/estilo-reservas.css";

const Reservas = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <section className="reserva">
          <div className="reserva-contenido">
            <div className="texto">
              <h2>Reserva tu Experiencia en Held Coffee Shop</h2>
              <h3>Condiciones</h3>
              <p>
                Para que todos nuestros clientes puedan disfrutar de una
                experiencia agradable, ten en cuenta las siguientes condiciones:
              </p>
              <ul>
                <li>
                  Reservas sujetas a disponibilidad y deben confirmarse 24 horas
                  antes.
                </li>
                <li>
                  Por favor, cancela o modifica tu reserva si no puedes asistir.
                </li>
                <li>
                  Tolerancia máxima de 15 minutos después de la hora reservada.
                </li>
                <li>
                  Para grupos grandes o eventos especiales, contáctanos
                  directamente.
                </li>
              </ul>
              <p className="parrafo-content">
                Queremos asegurarnos de que tengas una experiencia cómoda y sin
                contratiempos. ¡Gracias por tu comprensión y preferencia!
              </p>
            </div>
            <div className="foto-cafe-contenedor">
              <img src={fotocafe} alt="Café" className="foto-cafe" />
            </div>
          </div>
        </section>

        <section id="reservas" className="reservas-section">
          <div className="reservas-container">
            <div className="reservas-image">
              <img
                src="https://img.freepik.com/fotos-premium/calendario-fecha-taza-cafe_1292623-723.jpg"
                alt="Imagen ilustrativa de condiciones"
              />
            </div>
            <div className="reservas-form">
              <h2 className="reservas-title">Reserva tu espacio</h2>
              <form action="#" method="post">
                <div>
                  <label htmlFor="name">Nombre completo:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">Correo electrónico:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ingresa tu correo"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date">Fecha de la reserva:</label>
                  <input type="date" id="date" name="date" required />
                </div>
                <div>
                  <label htmlFor="time">Hora de la reserva:</label>
                  <input type="time" id="time" name="time" required />
                </div>
                <div>
                  <label htmlFor="notes">Notas adicionales:</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="4"
                    placeholder="Escribe algún detalle adicional..."
                  ></textarea>
                </div>
                <button type="submit">Reservar</button>
              </form>
            </div>
          </div>
        </section>  

        <section className="pago-content">
          <h2 className="pago-title">Métodos de Pago</h2>
          <div className="pago-list">
            <div className="pago-item">
              <p>
                TRANSFERENCIA BANCA MÓVIL PICHINCHA <br />
                <img
                  className="pago-img"
                  src={bancamovil}
                  alt="Banca Móvil"
                />
                <br />
                Nombre: Held Coffee Shop <br />
                No. Cuenta: XXXXXXX-44 <br />
                Cuenta Ahorros.
              </p>
            </div>
            <div className="pago-item">
              <p>
                TARJETAS DE CRÉDITO <br />
                <img
                  className="pago-img"
                  src={tarjetas}
                  alt="Tarjetas de Crédito"
                />
              </p>
            </div>
            <div className="pago-item">
              <p>
                Pago por Banco Guayaquil <br />
                <img
                  className="pago-img"
                  src={banca}
                  alt="Banco Guayaquil"
                />
                <br />
                Nombre: Held Coffee Shop <br />
                No. Cuenta: XXXXXXX-35 <br />
                Cuenta Ahorros.
              </p>
            </div>
          </div>
        </section>

        <section id="opiniones" className="opiniones">
          <h3>Opiniones de Nuestros Clientes</h3>
          <div className="opiniones-container">
            <div className="comentario">
              <p>
                "Una experiencia maravillosa. El ambiente es acogedor y el café
                excelente." <br /> ★★★★★
              </p>
            </div>
            <div className="comentario">
              <p>
                "Perfecto para reuniones. Los postres son deliciosos." <br />{" "}
                ★★★★☆
              </p>
            </div>
            <div className="comentario">
              <p>
                "Lugar agradable, aunque los tiempos de espera pueden mejorar."{" "}
                <br /> ★★★☆☆
              </p>
            </div>
            <div className="comentario">
              <p>
                "La atención fue excelente. Sin duda, volveré pronto." <br />{" "}
                ★★★★★
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx="true">{`
        /* Ajuste de margen superior para evitar superposición con el header */
        .main-content {
          margin-top: 110px; /* Ajusta el valor si la altura del header es mayor */
        }
      `}</style>
    </>
  );
};

export default Reservas;

