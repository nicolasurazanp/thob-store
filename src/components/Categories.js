// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link de react-router-dom
import './Categories.css'; // Estilos para las categorías

const Categories = () => {
    const categories = [
        { id: 1, name: 'Cuidado Capilar', image: '/images/General/cuidadoCapilar.webp', link: '/cuidado-capilar' },
        { id: 2, name: 'Cuidado Corporal', image: '/images/General/CuidadoCorporal.png', link: '/cuidado-corporal' },
        { id: 3, name: 'Cuidado Facial', image: '/images/General/cuidadoFacial.webp', link: '/cuidado-facial' },
        { id: 4, name: 'Maquillaje', image: '/images/General/CategoriaMaquillajeF.png', link: '/maquillaje' },
        // Nueva categoría 'Kits' — imagen dejada vacía para que el usuario la agregue
        { id: 5, name: 'Kits', image: '/images/KitsTOHB/kitsPortada.jpg', link: '/kits' }
    ];

    return (
        <section className="categories ">
            <h2>Categorías</h2>
            <div className="category-list">
                {categories.map(category => (
                    <Link key={category.id} to={category.link} className="category-card">
                        <img src={category.image} alt={category.name} className="category-image" />
                        <div className="category-name">{category.name}</div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
