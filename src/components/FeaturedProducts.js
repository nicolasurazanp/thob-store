// src/components/FeaturedProducts.js
import React from 'react';
import './FeaturedProducts.css'; // Estilos específicos para los productos destacados

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            video: "/videos/jabonArtesanalVideo.mp4",  // Asegúrate de tener los videos en la carpeta public/videos
            title: "Jabon Artesanal"
        },
        {
            id: 2,
            video: "/videos/CremaNutritivaCapilar.mp4",
            title: "Crema Nutritiva Capilar"
        },
        {
            id: 3,
            video: "/videos/ruborVideo.mp4",
            title: "Brillo Labial Morning Kiss"
        }
    ];

    return (
        <section className="featured-products">
            <h2>Productos Destacados</h2>
            <p>Nuestros más vendidos están aquí para ti!</p>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <video 
                            controls
                            autoPlay 
                            loop 
                            muted 
                            className="product-video"
                        >
                            <source src={product.video} type="video/mp4" />
                            Tu navegador no soporta el formato de video.
                        </video>
                        <h3>{product.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
