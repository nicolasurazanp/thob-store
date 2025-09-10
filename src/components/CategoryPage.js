// src/components/CategoryPage.js
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Asegúrate de usar useNavigate
import './CategoryPage.css';

const CategoryPage = ({ addToCart }) => {
    const { category } = useParams(); // Obtener la categoría de la URL
    const navigate = useNavigate(); // Navegar entre rutas
    const [sortedProducts, setSortedProducts] = useState([]);

    // Si `category` es undefined o null, podemos mostrar un mensaje de error o simplemente no mostrar nada
    const categoryName = category ? category.replace('-', ' ').toUpperCase() : "Categoría no disponible"; 

    // Memorizar los productos por categoría
    const productsByCategory = useMemo(() => ({
        "cuidado-capilar": [
            { id: 1, name: "Crema Capilar Cacao", brand: "TOHB", price: 52900, image: "/images/CuidadoCapilar/CREMA-CAPILAR-CACAO.png" },
            { id: 2, name: "Crema Capilar Chocolate Y Coco", brand: " TOHB", price: 52900, image: "/images/CuidadoCapilar/CREMA-NUTRITIVA-CAPILAR-CHOCOLATE-Y-COCO.png" },
            { id: 3, name: "Shampoo Natural Coco y Almendras 280 mL", brand: " TOHB", price: 40900, image: "/images/CuidadoCapilar/SHAMPOO-COCO-280.png" },
            { id: 4, name: "Shampoo Natural Romero 280 mL", brand: " TOHB", price: 40900, image: "/images/CuidadoCapilar/SHAMPOO-ROMERO.png" },
            { id: 5, name: "Tónico Capilar con Complejo con Aminoácidos 60 mL", brand: " TOHB", price: 58900, image: "/images/CuidadoCapilar/tonico.jpg" },
            { id: 6, name: "Acondicionador Solido", brand: " TOHB", price: 24000, image: "/images/CuidadoCapilar/AcondicionadorsolidoOiris_540x.webp" },
            { id: 7, name: "Cera Para Peinar", brand: " TOHB", price: 12000, image: "/images/CuidadoCapilar/CeraPeinarOiris_540x.webp" },
            { id: 8, name: "Shampoo Rise & Shine Verde Romero (Anticaspa)", brand: " TOHB", price: 24000, image: "/images/CuidadoCapilar/ShampooAnticaspaSolo_720x.webp" },
            { id: 9, name: "Champú Sólido de Naranja", brand: " TOHB", price: 16000, image: "/images/CuidadoCapilar/ChampuNaranjaOiris40gr_540x.webp" },
        ],
        "cuidado-corporal": [
            { id: 10, name: "Desodorante Natural Té Verde 60mL", brand: "TOHB", price: 27900, image: "/images/CuidadoCorporal/DESODORANTE-TE-VERDE.png" },
            { id: 11, name: "Desodorante Natural Calendula Y Manzanilla 60mL", brand: "TOHB", price: 27900, image: "/images/CuidadoCorporal/DESODORANTE-CALENDULA-Y-MANZANILLA.png" },
            { id: 12, name: "Jabón Corporal De Coco 100 g", brand: "TOHB", price: 10000, image: "/images/CuidadoCorporal/JabonCorporalCoco_540x.webp" },
            { id: 13, name: "Jabón Corporal De Aloe Vera ", brand: "TOHB", price: 10000, image: "/images/CuidadoCorporal/JabonCorporalAloeVera.webp" },
            { id: 14, name: "Jabón Corporal De Avena ", brand: "TOHB", price: 10000, image: "/images/CuidadoCorporal/JabonCorporalAvena_540x.webp" },
            { id: 15, name: "Jabón Corporal De Café ", brand: "TOHB", price: 10000, image: "/images/CuidadoCorporal/JabonCorporalCafe_540x.webp" },
        ],
         "cuidado-facial": [
            { id: 16, name: "Jabón Artesanal Arroz 100 g", brand: "TOHB", price: 22900, image: "/images/CuidadoCorporal/JABON-ARTESANAL-DE-ARROZ.png" },
            { id: 17, name: "Jabón Artesanal Caléndula y Manzanilla 100 g", brand: "TOHB", price: 22900, image: "/images/CuidadoCorporal/JABON-ARTESANAL-DE-CALENDULA.png" },
            { id: 18, name: "Jabón Artesanal Aloe Vera  100 g", brand: "TOHB", price: 22900, image: "/images/CuidadoCorporal/JABON-ARTESANAL-DE-ALOE-VERA.png" },
            { id: 19, name: "Crema Contorno Ojos con Ácido Hialurónico 30 mL", brand: "TOHB", price: 79900, image: "/images/CuidadoFacial/CREMA-CONTORNO-DE-OJOS.png" },
            { id: 20, name: "Crema Regeneradora con Complejos de Aminoácidos 50 mL", brand: "TOHB", price: 99900, image: "/images/CuidadoFacial/CREMA-REGENERADORA.png" },
            { id: 21, name: "Sérum Facial Con Vitamina C Mayakú 50 mL", brand: "TOHB", price: 124900, image: "/images/CuidadoFacial/SERUM-VITAMINA-C.png" },
            { id: 22, name: "Leche Desmaquilladora Arroz 120 mL", brand: "TOHB", price: 37900, image: "/images/CuidadoFacial/LECHE-DE-ARROZ.png" },
            { id: 23, name: "Leche Desmaquilladora Uva y Argán 120 mL", brand: "TOHB", price: 37900, image: "/images/CuidadoFacial/LECHE-UVA.png" },
            { id: 24, name: "Leche Desmaquilladora Perejil 120 mL", brand: "TOHB", price: 37900, image: "/images/CuidadoFacial/LECHE-PEREJIL.png" },
            { id: 25, name: "Leche Limpiadora Caléndula y Manzanilla 120 mL", brand: "TOHB", price: 42900, image: "/images/CuidadoFacial/LECHE-CALENDULA-120-png.png" },
            { id: 26, name: "Mascarilla Aloe Vera 60 mL", brand: "TOHB", price: 19900, image: "/images/CuidadoFacial/MASCARILLA-ALOE-VERA-60.png" },
            { id: 27, name: "Mascarilla Calendula Y Manzanilla 60mL", brand: "TOHB", price: 0, image: "/images/CuidadoFacial/MASCARILLA-CALENDULA-60.png" },
            { id: 28, name: "Protector Solar con Extractos Botánicos / SPF 50+", brand: "TOHB", price: 73900, image: "/images/CuidadoFacial/PROTECTOR-SOLAR-80.png" },
            { id: 29, name: "Sérum Antiedad 30 mL", brand: "TOHB", price: 64900, image: "/images/CuidadoFacial/SERUM-ANTIEDAD.png" },
            { id: 30, name: "Tónico Natural Rosas 120 mL", brand: "TOHB", price: 31900, image: "/images/CuidadoFacial/TONICO-ROSAS.png" },
            { id: 31, name: "Tónico Natural Caléndula y Manzanilla 120 mL", brand: "TOHB", price: 31900, image: "/images/CuidadoFacial/TONICO-CALENDULA-Y-MANZANILLA-1.png" },
            { id: 32, name: "Tónico Natural Té Verde 120 mL", brand: "TOHB", price: 31900, image: "/images/CuidadoFacial/TONICO-TE-VERDE-1.png" },
            { id: 33, name: "PASTA DENTAL SÓLIDA ", brand: "TOHB", price: 27000, image: "/images/CuidadoFacial/PastaDentalOiris.webp" },
            { id: 34, name: "Jabón De Arroz", brand: "TOHB", price: 13000, image: "/images/CuidadoFacial/JabonArrozOiris_540x.webp" },
            { id: 35, name: "Jabón Anti Age - Hiper Hidratante (Natiú Artesanal)", brand: "TOHB", price: 14000, image: "/images/CuidadoFacial/JabonAntiageNatiu_720x.webp" },
            { id: 36, name: "Jabón Purify para el Acné (Natiú Artesanal)", brand: "TOHB", price: 14000, image: "/images/CuidadoFacial/JabonPurify1.jpg" },
            { id: 37, name: "Jabón Baby (Natiú Artesanal)", brand: "TOHB", price: 14000, image: "/images/CuidadoFacial/JabonBaby.jpg" },
            { id: 38, name: "Jabón Shaving Coral - Para Depilar (Natiú Artesanal)", brand: "TOHB", price: 14000, image: "/images/CuidadoFacial/JabonCoralDepilar1.jpg" },
            { id: 39, name: "Crema Facial con Ácido Hialurónico y Colágeno 60 mL", brand: "TOHB", price: 52900, image: "/images/CuidadoFacial/Crema Facial con Ácido Hialurónico y Colágeno 60 mL.jpeg" },
            { id: 40, name: "Complejo Revitalizante 60 mL", brand: "TOHB", price: 55900, image: "/images/CuidadoFacial/Complejo1.jpeg" },
            { id: 41, name: "Crema Facial con Aloe Vera y Pepino 60 mL", brand: "TOHB", price: 49900, image: "/images/CuidadoFacial/CremaFacialAloeVeraYPepino.jpeg" },
        ],
         "maquillaje": [
            { id: 42, name: "Brillo Labial Morning Kiss", brand: "TOHB", price: 32000, image: "/images/Maquillaje/brilloLabial.jpg" },
            { id: 43, name: "Corrector Facial Piel Canela - Toffee", brand: "TOHB", price: 42000, image: "/images/Maquillaje/Screenshot 2025-08-17 at 01-21-58 Corrector Facial Piel Canela - Toffee – Chirpy MakeUp.png" },
            { id: 44, name: "Corrector Facial Tono Medio - Latte", brand: "TOHB", price: 42000, image: "/images/Maquillaje/Screenshot 2025-08-17 at 01-23-14 Corrector Facial Tono Medio - Latte – Chirpy MakeUp.png" },
            { id: 45, name: "Corrector Facial Piel super clara - Vainilla", brand: "TOHB", price: 42000, image: "/images/Maquillaje/Screenshot 2025-08-17 at 01-24-25 Corrector Facial Piel super clara - Vainilla – Chirpy MakeUp.png" },
            { id: 46, name: "Polvo Matificante Toffe", brand: "TOHB", price: 42000, image: "/images/Maquillaje/polvoMatificante.jpg" },
            { id: 47, name: "Polvo Matificante Latte", brand: "TOHB", price: 42000, image: "/images/Maquillaje/PolvoMatificanteLatte.webp" },
            { id: 48, name: "Polvo Matificante Vainilla", brand: "TOHB", price: 42000, image: "/images/Maquillaje/PolvoMatificanteVainilla.webp" },
            { id: 49, name: "Hidratante y Protector Labial Frutos Rojos", brand: "TOHB", price: 13900, image: "/images/Maquillaje/HIDRATANTE-PARA-LABIOS-FRUTOS-ROJOS.png" },
            { id: 50, name: "Hidratante y Protector Labial Caléndula y Manzanilla ", brand: "TOHB", price: 13900, image: "/images/Maquillaje/HIDRATANTE-PARA-LABIOS-CALENDULA.png" },
            { id: 51, name: "Hidratante y Protector Labial Menta", brand: "TOHB", price: 13900, image: "/images/Maquillaje/HIDRTANTE-PARA-LABIOS-MENTA.png" },
            { id: 52, name: "Rubor Rosa", brand: "TOHB", price: 49500, image: "/images/Maquillaje/RuborRosa.png" },
            { id: 53, name: "Rubor tono coral", brand: "TOHB", price: 49500, image: "/images/Maquillaje/RuborCoral.png" },
            { id: 54, name: "Recarga Polvo Matificante Latte", brand: "TOHB", price: 21000, image: "/images/Maquillaje/recargapolvolatte.webp" },
            { id: 55, name: "Recarga Polvo Matificante Toffe", brand: "TOHB", price: 21000, image: "/images/Maquillaje/recargapolvotoffe.webp" },
            { id: 56, name: "Recarga Polvo Matificante Vainilla", brand: "TOHB", price: 21000, image: "/images/Maquillaje/recargapolvovainilla.webp" }
        ],
        // Agregar más categorías...
    }), []); 

 // Filtro de productos por precio
    const sortProducts = (order) => {
        const sorted = [...(productsByCategory[category] || [])].sort((a, b) => {
            if (order === 'asc') return a.price - b.price;
            return b.price - a.price;
        });
        setSortedProducts(sorted);
    };

    // Cargar productos de la categoría seleccionada
    useEffect(() => {
        if (productsByCategory[category]) {
            setSortedProducts(productsByCategory[category]);
        } else {
            setSortedProducts([]); // Si no existe la categoría, mostramos vacío
        }
    }, [category, productsByCategory]);

    // Función para manejar el clic en un producto y redirigir al detalle
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`); // Redirige a la página del producto
    };

    // Formateador para COP
    const formatCOP = (value) => {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value);
    };

    return (
        <div className="category-page">
            <h2>{categoryName}</h2>
            {/* Filtro de precio */}
            <div className="filter-section">
                <h3>Filtrar:</h3>
                <select onChange={(e) => sortProducts(e.target.value)}>
                    <option value="asc">Precio: Bajo a Alto</option>
                    <option value="desc">Precio: Alto a Bajo</option>
                </select>
            </div>

            {/* Cards de productos */}
            <div className="product-list">
                {sortedProducts.length === 0 ? (
                    <p>No se encontraron productos en esta categoría.</p>
                ) : (
                    sortedProducts.map(product => (
                        <div 
                            key={product.id}
                            className="product-card"
                            onClick={() => handleProductClick(product.id)}
                        >
                            <img src={product.image} alt={product.name} />
                            <h4>{product.name}</h4>
                            <p>{product.brand}</p>
                            <p>Desde: {formatCOP(product.price)}</p>
                            <button className="details-btn">Ver Detalles</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
