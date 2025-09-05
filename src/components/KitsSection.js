// src/components/KitsSection.js
import React from 'react';
import './KitsSection.css';

const KitsSection = () => {
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
        "Jabón artesanal de arroz",
        "Rubor 3 en 1",
        "Polvo matificante para sellar el maquillaje con acabado natural"
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
              <p className="kit-price">{kit.price}</p>
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

              <button className="kit-button">Comprar Ahora</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KitsSection;
