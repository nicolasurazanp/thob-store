import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importa `useNavigate`
import './CategoryPage.css';

const CategoryPage = () => {
    const { category } = useParams(); // Obtener la categoría de la URL
    const navigate = useNavigate(); // Inicializa `useNavigate` para navegación programática
    const [sortedProducts, setSortedProducts] = useState([]);

    // Memorizar los productos por categoría
    const productsByCategory = useMemo(() => ({
        "cuidado-capilar": [
            { id: 1, name: "Crema Capilar Cacao", brand: "Thob", price: 52900, image: "/images/CuidadoCapilar/CREMA-CAPILAR-CACAO.png" },
            { id: 2, name: "Crema Capilar Chocolate Y Coco", brand: "Thob", price: 52900, image: "/images/CuidadoCapilar/CREMA-NUTRITIVA-CAPILAR-CHOCOLATE-Y-COCO.png" },
            { id: 3, name: "Shampoo Natural Coco y Almendras 280 mL", brand: "Thob", price: 40900, image: "/images/CuidadoCapilar/SHAMPOO-COCO-280.png" },
            { id: 4, name: "Shampoo Natural Romero 280 mL", brand: "Thob", price: 40900, image: "/images/CuidadoCapilar/SHAMPOO-ROMERO.png" },
            { id: 5, name: "Tónico Capilar con Complejo con Aminoácidos 60 mL", brand: "Thob", price: 58900, image: "/images/CuidadoCapilar/tonico.jpg" }
        ],
        "cuidado-corporal": [
            { id: 6, name: "Desodorante Natural Té Verde 60mL", brand: "Thob", price: 27900, image: "/images/CuidadoCorporal/DESODORANTE-TE-VERDE.png" },
            { id: 7, name: "Desodorante Natural Calendula Y Manzanilla 60mL", brand: "Thob", price: 27900, image: "/images/CuidadoCorporal/DESODORANTE-CALENDULA-Y-MANZANILLA.png" },
            { id: 8, name: "Jabón Artesanal Arroz 100 g", brand: "Thob", price: 22900, image: "/images/CuidadoCorporal/JABON-ARTESANAL-DE-ARROZ.png" },
            { id: 9, name: "Jabón Artesanal Caléndula y Manzanilla 100 g", brand: "Thob", price: 22900, image: "/images/CuidadoCorporal/JABON-ARTESANAL-DE-CALENDULA.png" },
            { id: 10, name: "Jabón Artesanal Aloe Vera  100 g", brand: "Thob", price: 22900, image: "/images/CuidadoCorporal/JABON-ARTESANAL-DE-ALOE-VERA.png" }
        ],
         "cuidado-facial": [
            { id: 11, name: "Crema Contorno Ojos con Ácido Hialurónico 30 mL", brand: "Thob", price: 79900, image: "/images/CuidadoFacial/CREMA-CONTORNO-DE-OJOS.png" },
            { id: 12, name: "Crema Regeneradora con Complejos de Aminoácidos 50 mL", brand: "Thob", price: 99900, image: "/images/CuidadoFacial/CREMA-REGENERADORA.png" },
            { id: 13, name: "Sérum Facial Con Vitamina C Mayakú 50 mL", brand: "Thob", price: 124900, image: "/images/CuidadoFacial/SERUM-VITAMINA-C.png" },
            { id: 14, name: "Leche Desmaquilladora Arroz 120 mL", brand: "Thob", price: 37900, image: "/images/CuidadoFacial/LECHE-DE-ARROZ.png" },
            { id: 15, name: "Leche Desmaquilladora Uva y Argán 120 mL", brand: "Thob", price: 37900, image: "/images/CuidadoFacial/LECHE-UVA.png" },
            { id: 16, name: "Leche Desmaquilladora Perejil 120 mL", brand: "Thob", price: 37900, image: "/images/CuidadoFacial/LECHE-PEREJIL.png" },
            { id: 17, name: "Leche Limpiadora Caléndula y Manzanilla 120 mL", brand: "Thob", price: 42900, image: "/images/CuidadoFacial/LECHE-CALENDULA-120-png.png" },
            { id: 18, name: "Mascarilla Aloe Vera 60 mL", brand: "Thob", price: 19900, image: "/images/CuidadoFacial/MASCARILLA-ALOE-VERA-60.png" },
            { id: 19, name: "Mascarilla Calendula Y Manzanilla 60mL", brand: "Thob", price: 0, image: "/images/CuidadoFacial/MASCARILLA-CALENDULA-60.png" },
            { id: 20, name: "Protector Solar con Extractos Botánicos / SPF 50+", brand: "Thob", price: 73900, image: "/images/CuidadoFacial/PROTECTOR-SOLAR-80.png" },
            { id: 21, name: "Sérum Antiedad 30 mL", brand: "Thob", price: 64900, image: "/images/CuidadoFacial/SERUM-ANTIEDAD.png" },
            { id: 22, name: "Tónico Natural Rosas 120 mL", brand: "Thob", price: 31900, image: "/images/CuidadoFacial/TONICO-ROSAS.png" },
            { id: 23, name: "Tónico Natural Caléndula y Manzanilla 120 mL", brand: "Thob", price: 31900, image: "/images/CuidadoFacial/TONICO-CALENDULA-Y-MANZANILLA-1.png" },
            { id: 24, name: "Tónico Natural Té Verde 120 mL", brand: "Thob", price: 31900, image: "/images/CuidadoFacial/TONICO-TE-VERDE-1.png" }
        ],
         "maquillaje": [
            { id: 25, name: "Brillo Labial Morning Kiss", brand: "Thob", price: 32000, image: "/images/Maquillaje/brilloLabial.jpg" },
            { id: 26, name: "Corrector Facial Piel Canela - Toffee", brand: "Thob", price: 42000, image: "/images/Maquillaje/Screenshot 2025-08-17 at 01-21-58 Corrector Facial Piel Canela - Toffee – Chirpy MakeUp.png" },
            { id: 27, name: "Corrector Facial Tono Medio - Latte", brand: "Thob", price: 42000, image: "/images/Maquillaje/Screenshot 2025-08-17 at 01-23-14 Corrector Facial Tono Medio - Latte – Chirpy MakeUp.png" },
            { id: 28, name: "Corrector Facial Piel super clara - Vainilla", brand: "Thob", price: 42000, image: "/images/Maquillaje/Screenshot 2025-08-17 at 01-24-25 Corrector Facial Piel super clara - Vainilla – Chirpy MakeUp.png" },
            { id: 29, name: "Polvo Matificante", brand: "Thob", price: 42000, image: "/images/Maquillaje/polvoMatificante.jpg" },
            { id: 30, name: "Hidratante y Protector Labial Frutos Rojos", brand: "Thob", price: 13900, image: "/images/Maquillaje/HIDRATANTE-PARA-LABIOS-FRUTOS-ROJOS.png" },
            { id: 31, name: "Hidratante y Protector Labial Caléndula y Manzanilla ", brand: "Thob", price: 13900, image: "/images/Maquillaje/HIDRATANTE-PARA-LABIOS-CALENDULA.png" },
            { id: 32, name: "Hidratante y Protector Labial Menta", brand: "Thob", price: 13900, image: "/images/Maquillaje/HIDRTANTE-PARA-LABIOS-MENTA.png" },
            { id: 33, name: "Rubor Rosa", brand: "Thob", price: 49500, image: "/images/Maquillaje/RuborRosa.png" },
            { id: 34, name: "Rubor tono coral", brand: "Thob", price: 49500, image: "/images/Maquillaje/RuborCoral.png" },
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

    return (
        <div>
            <div className="category-page">
                <h2>{category.replace('-', ' ').toUpperCase()}</h2>
                
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
                                onClick={() => handleProductClick(product.id)} // Evento `onClick` para redirigir
                            >
                                <img src={product.image} alt={product.name} />
                                <h4>{product.name}</h4>
                                <p>{product.brand}</p>
                                <p>Desde: ${product.price}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
