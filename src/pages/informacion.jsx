import Header from "../components/Header";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Sucursales from "../components/Sucursales";
import "../styles/info.css";

const Informacion = ()=> {
    return (
      <>
        <Header />
        <Info />
        <Sucursales />
        <Footer />
      </>
    );
  }
  
  export default Informacion;