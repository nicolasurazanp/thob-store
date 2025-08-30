// src/components/ProductSeals.js
import React from 'react';
import './ProductSeals.css'; // Si necesitas agregar estilos específicos para este componente

const ProductSeals = () => {
    return (
        <div className="product-seals">
            <h3>Compromisos de la Marca</h3>
            <div className="seal-list">
                <div className="seal-item">
                    <img src="/images/Sellos/SELLOSPETROQUIMICOS.png" alt="Libre de Petroquímicos" />
                    <p>Libre de Petroquímicos: Nuestro compromiso es brindar una experiencia de cuidado natural, por eso nuestros productos son libres de petroquímicos y parabenos.</p>
                </div>
                <div className="seal-item">
                    <img src="/images/Sellos/COSECHAAgroecologica.png" alt="Cosecha Agroecológica" />
                    <p>Cosecha Agroecológica: Nuestras materias primas vegetales provienen de cosechas agroecológicas, libres de parabenos, aceites minerales y derivados de la industria petroquímica.</p>
                </div>
                <div className="seal-item">
                    <img src="/images/Sellos/MujerRural.png" alt="Mujer Rural" />
                    <p>Mujer Rural: Todos nuestros proveedores de materias primas vegetales son pequeños productores campesinos, principalmente mujeres rurales del oriente.</p>
                </div>
                <div className="seal-item">
                    <img src="/images/Sellos/ComercioJusto.png" alt="Comercio Justo" />
                    <p>Comercio Justo: Apoyamos a todas las familias que dependen de nosotros, pagando el doble de lo que normalmente les pagan a los campesinos por sus cosechas.</p>
                </div>
                <div className="seal-item">
                    <img src="/images/Sellos/Biodegradable.png" alt="Biodegradable" />
                    <p>Biodegradable: Nuestras materias primas son ecológicas. Los espumantes de nuestros productos son 100% biodegradables, derivados de glucosas vegetales con certificación ECOCERT.</p>
                </div>
                <div className="seal-item">
                    <img src="/images/Sellos/ProtegemosElAgua.png" alt="Protegemos El Agua" />
                    <p>Cuidamos El Agua: Trabajamos con materias primas aprobadas para cosmética natural, muchas de ellas con certificación orgánica. Además, son libres de aceites minerales y microplásticos, respetando la vida marina.</p>
                </div>
                <div className="seal-item">
                    <img src="/images/Sellos/CuidadoAnimales.png" alt="Crueltyfree" />
                    <p>Crueltyfree: Es importante para nosotros respetar y honrar todas las formas de vida del planeta, por tal motivo no testeamos en animales.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductSeals;
