// src/components/KitsSection.js

import React from 'react';
import { Link } from 'react-router-dom';
import './KitsSection.css';

// Formateador para COP
const formatCOP = (value) => {
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value);
};

const KitsSection = () => {
  return (
    <section className="kits-section">
      <h2 className="section-title">¡Descubre nuestros kits especiales!</h2>
      <div className="kits-cta">
        <p>Encuentra todos nuestros kits agrupados en la categoría "Kits". Allí podrás ver imágenes, detalles y comprar cada kit individualmente.</p>
        <Link to="/kits" className="view-all-kits">Ver todos los kits</Link>
      </div>
    </section>
  );
};

export default KitsSection;
