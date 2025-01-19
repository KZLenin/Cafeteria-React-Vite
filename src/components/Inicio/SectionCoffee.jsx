import React from "react";

const SectionCoffee = () => {
  return (
    <section className="coffee">
      <div className="coffee-content">
        <h2>Variedad de postres y bebidas</h2>
        <p className="txt-parrafo">
          Contamos con una gran variedad de productos, pero estas 3 categorías te pueden llamar la atención.
        </p>
        <div className="coffee-group">
          <div className="coffee-1">
            <img src="https://cafescamali.com/wp-content/uploads/2024/09/Productos-envasados.jpg" alt="" />
            <h3 className="titulo-bebida">Bebidas calientes</h3>
            <p className="texto-bebida">Te espera una taza humeante que promete un abrazo cálido. La espuma cremosa se funde con el intenso sabor del café recién molido, cada sorbo es un viaje a un lugar tranquilo, donde el estrés 
              se disipa y la felicidad se apodera de ti.</p>
          </div>
          <div className="coffee-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsRQxDoIzZ8a_e_UFWPJbmBkT8WdG3uF6uw&s" alt="" />
            <h3 className="titulo-bebida">Bebidas Frías</h3>
            <p className="texto-bebida">Nuestro frappé clásico es la bebida ideal para combatir el calor y recargar energías. La perfecta combinación de café intenso, leche cremosa y hielo picado te transportará a un oasis de frescura. 
               </p>
          </div>
          <div className="coffee-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT059uGttACXgcvHj-lJTWcvsZJhxgb4kB3LA&s" alt="" />
            <h3 className="titulo-bebida">Postres</h3>
            <p className="texto-bebida">Cada uno de nuestros postres es elaborado de forma artesanal. 
              Por eso debes probar nuestra torta especial de tres leches, preparada con ingredientes frescos y de la más alta calidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCoffee;