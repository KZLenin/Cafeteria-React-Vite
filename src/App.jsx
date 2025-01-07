import "./styles/estilo-home.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./pages/menu";
import Inicio from "./pages/inicio";
import Informacion from "./pages/informacion";
import Reservas from "./pages/reservas";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/Informacion" element={<Informacion></Informacion>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/Reservas" element={<Reservas></Reservas>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;