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
        <Hero />
        <SectionCoffee />
        <SectionVideo />
        <SectionShop />
        <DescargaApp />
        <Footer />
      </>
    );
  }
  
  export default Inicio;