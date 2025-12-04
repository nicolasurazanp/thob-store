// src/components/KitsSection.js

import React from 'react';
import './KitsSection.css';

// Formateador para COP
const formatCOP = (value) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value);
};

const KitsSection = ({ addToCart }) => {
  const kits = [
    
    {
      id: 1,
      name: "KIT CORRECTOR FACIAL 2 EN 1 Y RUBOR 3 EN 1",
      price: "$91500",
      description: "EN OFERTA CON ENVIO GRATIS 🌸 Unos minutos, toda la diferencia",
      image: "/images/KitsTOHB/KIT CORRECTOR FACIAL 2 EN 1 Y RUBOR 3 EN 1.jpeg",
      products: [
        "Rubor 3 en 1 úsalo como sombra, rubor y labial para un look armónico y natural.",
        "Corrector 2 en 1 cubre ojeras, manchitas y rojeces y puedes usarlo como base en todo el rostro para tener el tono más uniforme."
      ]
    },
     {
      id: 2,
      name: "KIT LUCE HERMOSA EN SOLO 3 PASOS",
      price: "$141000",
      description: " Color, corrección y practicidad los esenciales para estar siempre linda.",
      image: "/images/KitsTOHB/KIT LUCE HERMOSA EN SOLO 3 PASOS.jpg",
      products: [
        "Corrector facial para unificar",
        "Rubor 3 en 1",
        "Polvo matificante para sellar el maquillaje con acabado natural"
      ]
    },
   
    {
      id: 3,
      name: "KIT CUIDADO CORPORAL",
      price: "165.700",
      description: "Para pieles maduras, este kit ayuda a acondicionar y preparar la piel ante la posibilidad de aparición prematura de las señales del paso del tiempo, atenuando y disminuyendo las líneas de expresión, brindando un aspecto fresco a la piel y mejorando su elasticidad, firmeza y lozanía.",
      image: "/images/KitsTOHB/kitCuidadoCorporal.jpg",
      products: [
        "Sérum Antiedad 30 mL",
        "Protector solar",
        "Hidratante labial",
        "Jabón facial de arroz"
      ]
    },
    {
      id: 4,
      name: "KIT CUIDADO CAPILAR",
      price: "$93800",
      description: "Formula con espumantes 100% biodegradables derivados de glucosas vegetales que limpian, hidratan y restauran la fibra capilar, protegiendo el color, aportando sedosidad y realzando el brillo natural del cabello. Libre de sal, sulfatos y amidas. ",
      image: "/images/KitsTOHB/kit Cuidado Capilar.jpg",
      products: [
        "Crema Nutritiva Capilar Chocolate Y Coco 500 mL",
        "Shampoo Natural Romero 280 mL  "
      ]
    },
    
    { 
      id: 5,
      name: "KIT CUIDADO FACIAL PARA HOMBRES",
      price: "$115800",
      description: "Kit de cuidado facial para hombre Este kit Enriquecido con ingredientes activos naturales que ayudan a mantener la piel hidratada, contiene caléndula para evitar la irritación.",
      image: "/images/KitsTOHB/kitCuidadoFacialHombre.jpg",
      products: [
        "Desodorante Natural Té Verde 60 mL",
        "Protector solar",
        "Jabón Shaving Coral - Para afeitar"
      ]
    },
    { 
      id: 6,
      name: "KIT CUIDADO MIXTO PRESENTACION SOLIDA",
      price: "$80000",
      description: "Kit de cuidado mixto en presentación solida Este kit Enriquecido con ingredientes activos naturales que proporciona un suave pero profundo efecto exfoliante dejando la piel regenerada y libre de impurezas, gracias a sus componentes orgánicos.",
      image: "/images/KitsTOHB/kitCuidadoMixto.jpg",
      products: [
        "Shampoo Caída solido",
        "Jabón corporal de café",
        "Jabón exfoliante: Café y Canela",
        "Crema Humectante Sólida"
      ]
    }
  ];

  return (
    <section className="kits-section">
      <h2 className="section-title">¡Descubre nuestros kits especiales!</h2>
      <div className="kits-container">
        {kits.map((kit) => (
          <div key={kit.id} className="kit-card">
            <img src={kit.image} alt={kit.name} className="kit-image" />
            <div className="kit-details">
              <h3 className="kit-name">{kit.name}</h3>
              <p className="kit-price">{formatCOP(Number(kit.price.replace(/[^\d]/g, '')))}</p>
              <p className="kit-description">{kit.description}</p>

              {/* Lista de productos dentro del kit */}
              <div className="kit-products">
                <h4>Productos incluidos:</h4>
                <ul>
                  {kit.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </div>

              <button
                className="kit-button"
                onClick={() => {
                  // Convertir el precio a número
                  const priceNumber = Number(kit.price.replace(/[^\d]/g, ''));
                  // Estructura del producto para el carrito
                  const kitForCart = {
                    id: kit.id,
                    name: kit.name,
                    price: priceNumber,
                    image: kit.image,
                    quantity: 1
                  };
                  addToCart(kitForCart);
                }}
              >
                Comprar Ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KitsSection;
