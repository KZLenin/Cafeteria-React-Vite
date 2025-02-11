import Header from "../components/Header";
import Hero from "../components/Inicio/Hero";
import SectionCoffee from "../components/Inicio/SectionCoffee";
import SectionVideo from "../components/Inicio/SectionVideo";
import SectionShop from "../components/Inicio/SectionShop";
import DescargaApp from "../components/Inicio/DescargaApp";
import Footer from "../components/Footer";
import "../styles/estilo-home.css";

const Inicio = ()=> {
    return (
      <>
        <Header />
        <div className="main-content">
        <Hero />
        <SectionCoffee />
        <SectionVideo />
        <SectionShop />
        <DescargaApp />
        <Footer />
        </div>
        <style jsx="true">{`
        /* Ajuste de margen superior para evitar superposición con el header */
        .main-content {
          margin-top: 110px; /* Ajusta el valor si la altura del header es mayor */
        }
      `}</style>
      </>
    );
  }
  
  export default Inicio;