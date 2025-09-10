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
      name: "Kit Rutina de Cuidado Facial Esencial para piel delicada",
      price: "$152700",
      description: " Tu piel merece fórmulas conscientes. Diseñamos tres kits esenciales de limpieza, hidratación y protección para acompañar tu rutina diaria según tu tipo de piel, con ingredientes botánicos cultivados en Colombia.",
      image: "/images/KitsTOHB/Kit Rutina de Cuidado Facial Esencial para piel delicada.jpeg",
      products: [
        "Kit para piel delicada",
        "Jabón artesanal de caléndula y manzanilla",
        "Crema facial con complejo revitalizante",
        "Protector solar natural biodegradable"
      ]
    },
    {
      id: 2,
      name: "Kit Rutina de Cuidado Facial Esencial para piel grasa o mixta",
      price: "$146700",
      description: "Tu piel merece fórmulas conscientes. Diseñamos tres kits esenciales de limpieza, hidratación y protección para acompañar tu rutina diaria según tu tipo de piel, con ingredientes botánicos cultivados en Colombia.",
      image: "/images/KitsTOHB/Kit Rutina de Cuidado Facial Esencial para piel grasa o mixta.jpeg",
      products: [
        "Kit para piel grasa o mixta",
        "Jabón artesanal de aloe vera",
        "Crema facial con aloe vera y pepino",
        "Protector solar natural biodegradable"
      ]
    },
    {
      id: 3,
      name: "Kit Rutina de Cuidado Facial Esencial para piel seca",
      price: "$149700",
      description: " Tu piel merece fórmulas conscientes. Diseñamos tres kits esenciales de limpieza, hidratación y protección para acompañar tu rutina diaria según tu tipo de piel, con ingredientes botánicos cultivados en Colombia.",
      image: "/images/KitsTOHB/Kit Rutina de Cuidado Facial Esencial para piel seca.jpeg",
      products: [
        "Kit para piel seca O madura",
        "Jabón artesanal de arroz",
        "Crema facial con ácido hialurónico y colágeno",
        "Protector solar natural biodegradable"
      ]
    },
    {
      id: 4,
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
      id: 5,
      name: "KIT LUCE HERMOSA EN SOLO 3 PASOS",
      price: "$141000",
      description: " Color, corrección y practicidad los esenciales para estar siempre linda.",
      image: "/images/KitsTOHB/KIT LUCE HERMOSA EN SOLO 3 PASOS.jpeg",
      products: [
        "Corrector facial para unificar",
        "Rubor 3 en 1",
        "Polvo matificante para sellar el maquillaje con acabado natural"
      ]
    },
    {
      id: 6,
      name: "KIT RUTINA FACIAL AVANZADO",
      price: "$304700",
      description: "Una rutina consciente para pieles que quieren sentirse y verse renovadas. Este kit es para ti si buscas algo más que cuidado: quieres resultados visibles, sensaciones naturales y una experiencia que conecte con tu piel en cada paso.",
      image: "/images/KitsTOHB/Kit Rutina Facil Avanzado.jpeg",
      products: [
        "Crema Regeneradora con Complejos de Aminoácidos 50 mL  ",
        " Sérum Facial Con Vitamina C Mayakú 50 mL",
        " Crema Contorno Ojos con Ácido Hialurónico 30 mL"
      ]
    },
    {
      id: 7,
      name: "KIT CUIDADO CORPORAL",
      price: "$128800",
      description: "Este kit es para ti si buscas una experiencia de cuidado corporal completa, que nutra y revitalice tu piel desde la ducha hasta la hidratación final.",
      image: "/images/KitsTOHB/Kit Cuidado Corporal.jpeg",
      products: [
        "Pasta Dental Solida",
        " Protector Solar con Extractos Botánicos / SPF 50+ de 80 ml",
        "Desodorante Natural Caléndula y Manzanilla 60 mL ",
        "Descuento del 5%"
      ]
    },
    {
      id: 8,
      name: "KIT CUIDADO CAPILAR",
      price: "$93800",
      description: "Formula con espumantes 100% biodegradables derivados de glucosas vegetales que limpian, hidratan y restauran la fibra capilar, protegiendo el color, aportando sedosidad y realzando el brillo natural del cabello. Libre de sal, sulfatos y amidas. ",
      image: "/images/KitsTOHB/Kit Cuidado Capilar.jpeg",
      products: [
        "Crema Nutritiva Capilar Chocolate Y Coco 500 mL",
        "Shampoo Natural Romero 280 mL  "
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
