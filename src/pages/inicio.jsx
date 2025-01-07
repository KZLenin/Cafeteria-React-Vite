import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionCoffee from "../components/SectionCoffee";
import SectionVideo from "../components/SectionVideo";
import SectionShop from "../components/SectionShop";
import DescargaApp from "../components/DescargaApp";
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