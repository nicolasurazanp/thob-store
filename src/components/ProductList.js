import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Para la navegación entre páginas
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Leer los productos desde el archivo JSON
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <Link to={`/product/${product.id}`} className="product-link">Ver Detalles</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
