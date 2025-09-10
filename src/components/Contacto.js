import React from 'react';
import '../App.css';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-page">
      <div className="contacto-image-container">
        <img 
          src="/images/General/imagenContacto.jpg" 
          alt="Contacto" 
          className="contacto-image"
        />
      </div>
    </div>
  );
};

export default Contacto;
