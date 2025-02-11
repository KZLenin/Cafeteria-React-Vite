import React from "react";

const sucursalesData = [
  {
    nombre: "Sucursal Sur",
    direccion:
      "Al sur nos encuentras en la Villaflora, Av. Rodrigo de Chávez y 5 de Junio, frente al Parque de las Flores.",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7835392682196!2d-78.52567942634947!3d-0.2392394997584052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5990adc06fca5%3A0x85e30a742a6a7d7c!2sRodrigo%20de%20Chavez%20Y%205%20de%20Junio!5e0!3m2!1ses!2sec!4v1731954961559!5m2!1ses!2sec",
  },
  {
    nombre: "Sucursal Centro",
    direccion:
      "En el centro nos encuentras en la Plaza Santo Domingo, Av. Eugenio Espejo y Juan Pío Montúfar.",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.6034694425653!2d-78.51550359310141!3d-0.21922534566941357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a29f4ce75d1%3A0x72df29ec7cfd24be!2sCrepes%20Y%20Jugos%20Local%2014!5e0!3m2!1ses!2sec!4v1731955694541!5m2!1ses!2sec",
  },
  {
    nombre: "Sucursal Norte",
    direccion:
      "En el norte nos encuentras en la Plaza Artigas, Av. 12 de octubre y Av. Coruña.",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.793142337749!2d-78.48551272634954!3d-0.203550399794444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b00621dc977%3A0x20ae986207c07c62!2sPlaza%20Artigas!5e0!3m2!1ses!2sec!4v1739247128839!5m2!1ses!2sec",
  },
];

const Sucursales = () => {
  return (
    <section className="container mt-4">
      <div className="row">
        {sucursalesData.map((sucursal, index) => (
          <div key={index} className="col-md-4">
            <div className="card" style={{ width: "100%" }}>
              <iframe
                src={sucursal.mapa}
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="card-img-top"
              ></iframe>
              <div className="card-body">
                <h5 className="card-title">{sucursal.nombre}</h5>
                <p className="card-text">{sucursal.direccion}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    sucursal.nombre
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning"
                >
                  UBICACIÓN
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sucursales;
