import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import appFirebase from "../../credenciales";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: ""
  });

  const [productoEditando, setProductoEditando] = useState(null);
  const [usuario, setUsuario] = useState(null);
  const [esAdmin, setEsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
        const usuarioDoc = await getDoc(doc(db, "usuarios", usuarioFirebase.uid));
        if (usuarioDoc.exists() && usuarioDoc.data().rol === "admin") {
          setEsAdmin(true);
          obtenerProductos();
        } else {
          setEsAdmin(false);
          alert("Acceso denegado");
          window.location.href = "/";
        }
      } else {
        setUsuario(null);
        setEsAdmin(false);
        window.location.href = "/";
      }
    });
    return () => unsubscribe();
  }, []);

  const obtenerProductos = async () => {
    const productosSnapshot = await getDocs(collection(db, "productos"));
    const productosList = productosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setProductos(productosList);
  };

  const agregarProducto = async (e) => {
    e.preventDefault();
    if (!nuevoProducto.nombre || !nuevoProducto.precio || !nuevoProducto.descripcion || !nuevoProducto.imagen) return;

    await addDoc(collection(db, "productos"), nuevoProducto);
    setNuevoProducto({
      nombre: "",
      descripcion: "",
      precio: "",
      imagen: ""
    });
    obtenerProductos();
  };

  const eliminarProducto = async (id) => {
    await deleteDoc(doc(db, "productos", id));
    obtenerProductos();
  };

  const seleccionarProductoParaEditar = (producto) => {
    setProductoEditando(producto);
  };

  const actualizarProducto = async () => {
    if (!productoEditando) return;

    await updateDoc(doc(db, "productos", productoEditando.id), {
      nombre: productoEditando.nombre,
      descripcion: productoEditando.descripcion,
      precio: productoEditando.precio,
      imagen: productoEditando.imagen
    });

    setProductoEditando(null);
    obtenerProductos();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setProductoEditando((prev) => ({ ...prev, [name]: value }));
  };

  if (!esAdmin) return null;

  return (
    <div className="container mt-5">
      <h1>Admin Dashboard</h1>
      <button className="btn btn-outline-danger mb-3" onClick={() => signOut(auth)}>Cerrar sesión</button>

      <div className="login-background">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card shadow-lg login-card">
            <form onSubmit={agregarProducto}>
              <h3 className="card-title text-center mb-4">Registrar Producto</h3>

              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Nombre del Producto</label>
                <input type="text" className="form-control bg-dark text-white border-light" id="productName" name="nombre" value={nuevoProducto.nombre} onChange={handleInputChange} placeholder="Nombre del producto" required />
              </div>

              <div className="mb-3">
                <label htmlFor="productDescription" className="form-label">Descripción</label>
                <textarea className="form-control bg-dark text-white border-light" id="productDescription" name="descripcion" value={nuevoProducto.descripcion} onChange={handleInputChange} placeholder="Descripción detallada" required></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">Precio</label>
                <input type="number" className="form-control bg-dark text-white border-light" id="productPrice" name="precio" value={nuevoProducto.precio} onChange={handleInputChange} placeholder="Precio en USD" required />
              </div>

              <div className="mb-3">
                <label htmlFor="productImage" className="form-label">Imagen</label>
                <input type="url" className="form-control bg-dark text-white border-light" id="productImage" name="imagen" value={nuevoProducto.imagen} onChange={handleInputChange} placeholder="URL de la imagen" required />
              </div>

              <button type="submit" className="btn btn-outline-success w-100">Registrar Producto</button>
            </form>
          </div>
        </div>
      </div>

      <h2 className="mt-4">Lista de Productos</h2>
      <ul className="list-group">
        {productos.map((producto) => (
          <li key={producto.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{producto.nombre}</strong>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
              <img src={producto.imagen} alt={producto.nombre} style={{ width: "100px", height: "auto" }} />
            </div>
            <div>
              <button className="btn btn-outline-primary me-2" onClick={() => seleccionarProductoParaEditar(producto)}>Editar</button>
              <button className="btn btn-outline-danger" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal de Edición */}
      {productoEditando && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Editar Producto</h3>
            <input type="text" name="nombre" value={productoEditando.nombre} onChange={handleEditInputChange} className="form-control mb-2" />
            <textarea name="descripcion" value={productoEditando.descripcion} onChange={handleEditInputChange} className="form-control mb-2"></textarea>
            <input type="number" name="precio" value={productoEditando.precio} onChange={handleEditInputChange} className="form-control mb-2" />
            <input type="url" name="imagen" value={productoEditando.imagen} onChange={handleEditInputChange} className="form-control mb-2" />
            <button className="btn btn-success" onClick={actualizarProducto}>Guardar Cambios</button>
            <button className="btn btn-secondary ms-2" onClick={() => setProductoEditando(null)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
