import React from "react";
import { useNavigate } from "react-router-dom";

const Carrito = ({ productos, eliminarDelCarrito, total }) => {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  return (
    <div id="cart-container">
      <h2>Carrito</h2>
      {productos.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {productos.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio.toFixed(2)}
                <button type="button" class="btn btn-outline-danger btn-sm" onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          {/* Botón para redirigir a la página de Reservas */}
          <button type="button" class="btn btn-outline-secondary" onClick={() => navigate("/Reservas")}>Ir a Pagar</button>
        </>
      )}
    </div>
  );
};

export default Carrito;
