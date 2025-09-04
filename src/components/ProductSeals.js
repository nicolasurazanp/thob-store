// src/components/ProductSeals.js
import React from 'react';
import './ProductSeals.css'; // Estilos para los sellos

const ProductSeals = ({ seals }) => {
    return (
        <div className="product-seals">
            <h3>Compromisos de la Marca</h3>
            <div className="seal-list">
                {seals.map((seal, index) => (
                    <div className="seal-item" key={index}>
                        <div className="seal-card">
                            <div className="seal-card-front">
                                <img src={seal.img} alt={seal.alt} />
                            </div>
                            <div className="seal-card-back">
                                <p>{seal.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSeals;
