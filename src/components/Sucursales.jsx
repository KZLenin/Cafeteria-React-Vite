const Sucursales = () => {
    return(
        <section className="sucursales">
            <div className="sucursal">
                <h3>Sucursal sur</h3>
                <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7835392682196!2d-78.52567942634947!3d-0.2392394997584052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5990adc06fca5%3A0x85e30a742a6a7d7c!2sRodrigo%20de%20Chavez%20Y%205%20de%20Junio!5e0!3m2!1ses!2sec!4v1731954961559!5m2!1ses!2sec"
                    width="220"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                <p>Al sur nos encuentras en la villaflora, Av. Rodrigo de Chávez y 5 de Junio, frente al Parque de las Flores.</p>
                <button>UBICACIÓN</button>
            </div>

            <div className="sucursal">
                <h3>Sucursal centro</h3>
                <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1410.6034694425653!2d-78.51550359310141!3d-0.21922534566941357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a29f4ce75d1%3A0x72df29ec7cfd24be!2sCrepes%20Y%20Jugos%20Local%2014!5e0!3m2!1ses!2sec!4v1731955694541!5m2!1ses!2sec"
                    width="220"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                <p>En el centro nos encuentras en la Plaza Santo Domingo, Av. Eugenio Espejo y Juan Pío Montúfar</p>
                <button>UBICACIÓN</button>
            </div>

            <div className="sucursal">
                <h3>Sucursal norte</h3>
                <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.36206961169808!2d-78.48288219139054!3d-0.20366577512588352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b2c65132a1f%3A0x8629798014ff70cc!2sCoati&#39;s%20Coffee%20Shop!5e0!3m2!1ses!2sec!4v1731955128998!5m2!1ses!2sec"
                    width="220"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                <p>En el norte nos encuentras en la Plaza Artigas, Av. 12 de octubre y Av. Coruña</p>
                <button>UBICACIÓN</button>
            </div>
            </section>

    );
};
export default Sucursales;