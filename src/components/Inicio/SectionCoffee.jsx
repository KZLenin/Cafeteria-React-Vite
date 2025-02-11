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
            <img src="https://img.freepik.com/premium-photo/glass-coffee-with-whipped-cream-cup-coffee-wooden-table_235573-3799.jpg" alt="" />
            <h3 className="titulo-bebida">Bebidas calientes</h3>
            <p className="texto-bebida">Te espera una taza humeante que promete un abrazo cálido. La espuma cremosa se funde con el intenso sabor del café recién molido, cada sorbo es un viaje a un lugar tranquilo, donde el estrés 
              se disipa y la felicidad se apodera de ti.</p>
          </div>
          <div className="coffee-1">
            <img src="https://png.pngtree.com/thumb_back/fw800/background/20231015/pngtree-chilled-coffee-served-in-elegant-tall-glasses-with-creamy-layers-topped-image_13683615.png" alt="" />
            <h3 className="titulo-bebida">Bebidas Frías</h3>
            <p className="texto-bebida">Nuestro frappé clásico es la bebida ideal para combatir el calor y recargar energías. La perfecta combinación de café intenso, leche cremosa y hielo picado te transportará a un oasis de frescura. 
               </p>
          </div>
          <div className="coffee-1">
            <img src="https://healthyeahlife.com/wp-content/uploads/what-does-gluten-do-in-cake-1024x576.png" alt="" />
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
