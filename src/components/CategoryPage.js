// src/components/CategoryPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import { formatCOP } from '../utils/formatCurrency';

// Mapeo por defecto de ids usado como fallback si los productos no contienen "category"
const CATEGORY_ID_MAP = {
    'cuidado-capilar': [1,2,3,4,5,6,7,8,9,10,11],
    'cuidado-corporal': [12,13,14,15,16,17,18,19,20],
    'cuidado-facial': [25,26,27,28,29,30,31,35,36,37,38,39,40,41,42,43,44,45,46],
    'maquillaje': [48,49,50,51,52,53,54,55,56,57,58,59,60,61,62],
    'kits': [63,64,65,66,67,68,69,70,71,72,73,74]
};

const CategoryPage = ({ addToCart }) => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const categoryName = category ? category.replace('-', ' ').toUpperCase() : 'Categoría no disponible';

    // Cargar productos desde public/products.json y filtrar según categoría (fallback por ids)
    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                if (cancelled) return;
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error cargando products.json', err);
                setProducts([]);
                setLoading(false);
            });
        return () => { cancelled = true; };
    }, []);

    // Actualiza la lista mostrada cuando cambian productos o categoría
    useEffect(() => {
        const cat = category || '';
        const idSet = new Set((CATEGORY_ID_MAP[cat] || []).map(n => String(n)));
        const filtered = products.filter(p => {
            // Si el producto tiene explicit category, úsalo
            if (p.category) return p.category === cat;
            // Si no, usa el fallback por id
            return idSet.has(String(p.id));
        });
        setSortedProducts(filtered);
    }, [products, category]);

    const sortProducts = (order) => {
        const sorted = [...sortedProducts].sort((a,b) => order === 'asc' ? a.price - b.price : b.price - a.price);
        setSortedProducts(sorted);
    };

    const handleProductClick = (productId) => {
        // Para kits no navegamos al detalle
        if (category === 'kits') return;
        navigate(`/product/${productId}`);
    };

    return (
        <div className="category-page">
            <h2>{categoryName}</h2>

            <div className="filter-section">
                <h3>Filtrar:</h3>
                <select onChange={(e) => sortProducts(e.target.value)}>
                    <option value="asc">Precio: Bajo a Alto</option>
                    <option value="desc">Precio: Alto a Bajo</option>
                </select>
            </div>

            <div className="product-list">
                {loading ? (
                    <p>Cargando productos…</p>
                ) : sortedProducts.length === 0 ? (
                    <p>No se encontraron productos en esta categoría.</p>
                ) : (
                    sortedProducts.map(product => {
                        const isCoverImage = category === 'kits' && [66, 67, 68].includes(Number(product.id));
                        const isSoldOut = Boolean(product.soldOut);
                        return (
                            <div
                                key={product.id}
                                className={"product-card" + (isCoverImage ? ' cover-image' : '') + (isSoldOut ? ' sold-out' : '')}
                                onClick={() => handleProductClick(product.id)}
                            >
                                {isSoldOut && <span className="sold-out-badge">Agotado</span>}
                                <img src={product.image} alt={product.title || product.name} />
                                <h4>{product.title || product.name}</h4>
                                <p>{product.brand || 'TOHB'}</p>
                                <p>Desde: {formatCOP(product.price)}</p>

                                {isSoldOut ? (
                                    <button className="details-btn sold-out-btn" disabled>Agotado</button>
                                ) : category === 'kits' ? (
                                    <button
                                        className="add-to-cart-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            const kitForCart = {
                                                id: product.id,
                                                name: product.title || product.name,
                                                price: product.price,
                                                image: product.image,
                                                quantity: 1
                                            };
                                            addToCart(kitForCart);
                                        }}
                                    >Agregar al carrito</button>
                                ) : (
                                    <button className="details-btn">Ver Detalles</button>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
