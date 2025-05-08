import React from "react";

const SectionCoffee = () => {
  const items = [
    {
      img: "https://img.freepik.com/premium-photo/glass-coffee-with-whipped-cream-cup-coffee-wooden-table_235573-3799.jpg",
      title: "Bebidas calientes",
      desc: "Te espera una taza humeante que promete un abrazo cálido. La espuma cremosa se funde con el intenso sabor del café recién molido, cada sorbo es un viaje a un lugar tranquilo, donde el estrés se disipa y la felicidad se apodera de ti.",
    },
    {
      img: "https://png.pngtree.com/thumb_back/fw800/background/20231015/pngtree-chilled-coffee-served-in-elegant-tall-glasses-with-creamy-layers-topped-image_13683615.png",
      title: "Bebidas Frías",
      desc: "Nuestro frappé clásico es la bebida ideal para combatir el calor y recargar energías. La perfecta combinación de café intenso, leche cremosa y hielo picado te transportará a un oasis de frescura.",
    },
    {
      img: "https://healthyeahlife.com/wp-content/uploads/what-does-gluten-do-in-cake-1024x576.png",
      title: "Postres",
      desc: "Cada uno de nuestros postres es elaborado de forma artesanal. Por eso debes probar nuestra torta especial de tres leches, preparada con ingredientes frescos y de la más alta calidad.",
    },
  ];

  return (
    <section className="coffee-section py-5">
      <div className="container text-center">
        <h2 className="mb-3 section-title">Variedad de postres y bebidas</h2>
        <p className="txt-parrafo mb-4">
          Contamos con una gran variedad de productos, pero estas 3 categorías te pueden llamar la atención.
        </p>
        <div className="row">
          {items.map((item, idx) => (
            <div className="col-12 col-md-4 mb-4" key={idx}>
              <div className="coffee-card p-3 h-100">
                <img src={item.img} className="img-fluid rounded mb-3" alt={item.title} />
                <h3 className="titulo-bebida">{item.title}</h3>
                <p className="texto-bebida">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCoffee;
