import { useEffect, useState } from "react";
import "../../styles/estilo-menu.css";

const RecetasAPI = ({ agregarAlCarrito }) => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const obtenerRecetas = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes?limit=10");
        const data = await res.json();
        const recetasList = data.recipes.map((receta) => ({
          id: receta.id,
          nombre: receta.name,
          descripcion: receta.ingredients.join(", ") + "...",
          precio: parseFloat((Math.random() * 10 + 5).toFixed(2)), // precio simulado entre $5 y $15
          imagen: receta.image || "https://via.placeholder.com/150",
        }));
        setRecetas(recetasList);
      } catch (error) {
        console.error("Error al obtener recetas:", error);
      }
    };

    obtenerRecetas();
  }, []);

  return (
    <div className="menu-section">
      <h2>Recetas Nuevas</h2>
      <div id="carouselRecetas" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {recetas.map((receta, index) => (
            <div key={receta.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="card" style={{ width: "18rem", margin: "auto" }}>
                <img src={receta.imagen} className="card-img-top" alt={receta.nombre} />
                <div className="card-body text-center">
                  <h5 className="card-title">{receta.nombre}</h5>
                  <p className="card-text">{receta.descripcion}</p>
                  <span className="price">${receta.precio}</span>
                  <button
  className="btn btn-outline-warning d-block w-100 mt-2"
  onClick={() =>
    agregarAlCarrito({
      nombre: receta.nombre,
      precio: receta.precio,
      img: receta.imagen,
    })
  }
>
  Ordenar
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselRecetas" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselRecetas" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default RecetasAPI;