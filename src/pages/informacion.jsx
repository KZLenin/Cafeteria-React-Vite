import Header from "../components/Header";
import Info from "../components/Informacion/Info";
import Footer from "../components/Footer";
import Sucursales from "../components/Informacion/Sucursales";
import "../styles/info.css";

const Informacion = ()=> {
    return (
      <>
        <Header />
        <div className="main-content">
        <Info />
        <Sucursales />
        </div>
        <Footer />
        <style jsx="true">{`
        /* Ajuste de margen superior para evitar superposición con el header */
        .main-content {
          margin-top: 110px; /* Ajusta el valor si la altura del header es mayor */
        }
      `}</style>
      </>
    );
  }
  
  export default Informacion;