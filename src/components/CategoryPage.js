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
            { id: 10, name: "Shampoo Rise & Shine Azabache Laurel", brand: " TOHB", price: 25000, image: "/images/CuidadoCapilar/cabelloGraso.jpg" },
            { id: 11, name: "Shampoo Caída", brand: " TOHB", price: 37000, image: "/images/CuidadoCapilar/ShampooCaida.jpg" },
        ],
        "cuidado-corporal": [
            { id: 12, name: "Desodorante Natural Té Verde 60mL", brand: "TOHB", price: 27900, image: "/images/CuidadoCorporal/DESODORANTE-TE-VERDE.png" },
            { id: 13, name: "Desodorante Natural Calendula Y Manzanilla 60mL", brand: "TOHB", price: 27900, image: "/images/CuidadoCorporal/DESODORANTE-CALENDULA-Y-MANZANILLA.png" },
            { id: 14, name: "Jabón Corporal De Coco 100 g", brand: "TOHB", price: 10000, image: "/images/CuidadoCorporal/JabonCorporalCoco_540x.webp" },
            { id: 15, name: "Jabón Corporal De Aloe Vera ", brand: "TOHB", price: 10000, image: "/images/CuidadoCorporal/JabonCorporalAloeVera.webp" },
            { id: 16, name: "Jabón Corporal De Avena ", brand: "TOHB", price: 10000, image: "/images/CuidadoCorporal/JabonCorporalAvena_540x.webp" },
            { id: 17, name: "Jabón Corporal De Café ", brand: "TOHB", price: 10000, image: "/images/CuidadoCorporal/JabonCorporalCafe_540x.webp" },
            { id: 18, name: "Crema Humectante Sólida", brand: "TOHB", price: 20000, image: "/images/CuidadoCorporal/cremaHumentanteSolida.jpg" },
            { id: 19, name: "Jabón exfoliante De Limón y Amapola", brand: "TOHB", price: 14000, image: "/images/CuidadoCorporal/JabonExfolianteLimon.jpg" },
            { id: 20, name: "Jabón exfoliante De Café y Canela", brand: "TOHB", price: 14000, image: "/images/CuidadoCorporal/jabonExfolianteCafe.jpg" },
            { id: 21, name: "Desodorante de alumbre – Lavanda 60ml para mujer", brand: "TOHB", price: 36900, image:"/images/CuidadoCorporal/CorporalV1.2/Desodorante1.jpg"},
            { id: 22, name: "Desodorante de alumbre – Salvia y laurel para hombre 60ml", brand: "TOHB", price: 36900, image:"/images/CuidadoCorporal/CorporalV1.2/DesodoranteHombre1.jpg"}
        ],
         "cuidado-facial": [
            { id: 23, name: "Mascarilla Aloe Vera 60 mL", brand: "TOHB", price: 19900, image: "/images/CuidadoFacial/MASCARILLA-ALOE-VERA-60.png" },
            { id: 24, name: "Mascarilla Calendula Y Manzanilla 60mL", brand: "TOHB", price: 0, image: "/images/CuidadoFacial/MASCARILLA-CALENDULA-60.png" },
            { id: 25, name: "Protector Solar con Extractos Botánicos / SPF 50+", brand: "TOHB", price: 73900, image: "/images/CuidadoFacial/PROTECTOR-SOLAR-80.png" },
            { id: 26, name: "PASTA DENTAL SÓLIDA ", brand: "TOHB", price: 27000, image: "/images/CuidadoFacial/PastaDentalOiris.webp" },
            { id: 27, name: "Jabón De Arroz", brand: "TOHB", price: 13000, image: "/images/CuidadoFacial/JabonArrozOiris_540x.webp" },
            { id: 28, name: "Jabón Anti Age - Hiper Hidratante (Natiú Artesanal)", brand: "TOHB", price: 14000, image: "/images/CuidadoFacial/JabonAntiageNatiu_720x.webp" },
            { id: 29, name: "Jabón Purify para el Acné (Natiú Artesanal)", brand: "TOHB", price: 14000, image: "/images/CuidadoFacial/JabonPurify1.jpg" },
            { id: 30, name: "Jabón Baby (Natiú Artesanal)", brand: "TOHB", price: 14000, image: "/images/CuidadoFacial/JabonBaby.jpg" },
            { id: 31, name: "Jabón Shaving Coral - Para Depilar (Natiú Artesanal)", brand: "TOHB", price: 14000, image: "/images/CuidadoFacial/JabonCoralDepilar1.jpg" },
            
            { id: 35, name: "Jabón de rostro carbón activado", brand: "TOHB", price: 12000, image: "/images/CuidadoCorporal/CuidadoCorporalDetalle/jabonRostroCarbonActivado.jpg" },
            { id: 36, name: "Complejo antiedad Contorno de ojos 18ml", brand: "TOHB", price: 74900, image: "/images/CuidadoFacial/CuidadoFacilV1.2/Antiedad1.jpg"},
            { id: 37, name: "Espuma Limpiadora Facial Cúrcuma", brand: "TOHB", price: 37900, image:"/images/CuidadoFacial/CuidadoFacilV1.2/Espuma1.jpg"},
            { id: 38, name: "Hidratante Facial Bio Complejo – 50ml", brand: "TOHB", price: 59900, image: "/images/CuidadoFacial/CuidadoFacilV1.2/Hidratante1.jpg" },
            { id: 39, name: "Jabón limpiador facial caléndula y manzanilla", brand: "TOHB", price: 36900, image: "/images/CuidadoFacial/CuidadoFacilV1.2/Limpiador1.jpg"},
            { id: 40, name: "Mousse desmaquillante", brand:"TOHB", price: 22900, image:"/images/CuidadoFacial/CuidadoFacilV1.2/Desmaquillante1.jpg"},
            { id: 41, name: "Serum facial intensivo Fitoretinol 30ml", brand: "TOHB", price: 72900, image:"/images/CuidadoFacial/CuidadoFacilV1.2/Serum1.jpg"},
            { id: 42, name: "Serum Facial RevitaC 30ml", brand: "TOHB", price: 72900, image: "/images/CuidadoFacial/CuidadoFacilV1.2/SerumFacial1.jpg"},
            { id: 43, name: "SERUM EXFOLIANTE ÁCIDO GLICÓLICO 5% + LÁCTICO 5%- 30ML", brand: "TOHB", price: 49000, image: "/images/CuidadoFacial/CuidadoFacilV1.2/Exfoliante1.jpg"},
            { id: 44, name: "Serum niacinamida al 4% y ácido hialurónico al 2%- 30ml", brand: "TOHB", price: 52000, image: "/images/CuidadoFacial/CuidadoFacilV1.2/Niacimida1.jpg"},
            { id: 45, name: "Hidratante facial Soufflé 50ml", brand: "TOHB", price: 59900, image:"/images/CuidadoFacial/CuidadoFacilV1.2/Souffle1.jpg"},
            { id: 46, name: "Oleum facial iluminador 30ml", brand: "TOHB", price: 46900, image:"/images/CuidadoFacial/CuidadoFacilV1.2/Oleum1.jpg"}
        ],
         "maquillaje": [
            { id: 47, name: "Brillo Labial Morning Kiss", brand: "TOHB", price: 32000, image: "/images/Maquillaje/brilloLabial.jpg" },
            { id: 48, name: "Corrector Facial Piel Canela - Toffee", brand: "TOHB", price: 42000, image: "/images/Maquillaje/Screenshot 2025-08-17 at 01-21-58 Corrector Facial Piel Canela - Toffee – Chirpy MakeUp.png" },
            { id: 49, name: "Corrector Facial Tono Medio - Latte", brand: "TOHB", price: 42000, image: "/images/Maquillaje/Screenshot 2025-08-17 at 01-23-14 Corrector Facial Tono Medio - Latte – Chirpy MakeUp.png" },
            { id: 50, name: "Corrector Facial Piel super clara - Vainilla", brand: "TOHB", price: 42000, image: "/images/Maquillaje/Screenshot 2025-08-17 at 01-24-25 Corrector Facial Piel super clara - Vainilla – Chirpy MakeUp.png" },
            { id: 51, name: "Polvo Matificante Toffe", brand: "TOHB", price: 42000, image: "/images/Maquillaje/polvoMatificante.jpg" },
            { id: 52, name: "Polvo Matificante Latte", brand: "TOHB", price: 42000, image: "/images/Maquillaje/PolvoMatificanteLatte.webp" },
            { id: 53, name: "Polvo Matificante Vainilla", brand: "TOHB", price: 42000, image: "/images/Maquillaje/PolvoMatificanteVainilla.webp" },
            { id: 54, name: "Hidratante y Protector Labial Frutos Rojos", brand: "TOHB", price: 13900, image: "/images/Maquillaje/HIDRATANTE-PARA-LABIOS-FRUTOS-ROJOS.png" },
            { id: 55, name: "Hidratante y Protector Labial Caléndula y Manzanilla ", brand: "TOHB", price: 13900, image: "/images/Maquillaje/HIDRATANTE-PARA-LABIOS-CALENDULA.png" },
            { id: 56, name: "Hidratante y Protector Labial Menta", brand: "TOHB", price: 13900, image: "/images/Maquillaje/HIDRTANTE-PARA-LABIOS-MENTA.png" },
            { id: 57, name: "Rubor Rosa", brand: "TOHB", price: 49500, image: "/images/Maquillaje/RuborRosa.png" },
            { id: 58, name: "Rubor tono coral", brand: "TOHB", price: 49500, image: "/images/Maquillaje/RuborCoral.png" },
            { id: 59, name: "Recarga Polvo Matificante Latte", brand: "TOHB", price: 21000, image: "/images/Maquillaje/recargapolvolatte.webp" },
            { id: 60, name: "Recarga Polvo Matificante Toffe", brand: "TOHB", price: 21000, image: "/images/Maquillaje/recargapolvotoffe.webp" },
            { id: 61, name: "Recarga Polvo Matificante Vainilla", brand: "TOHB", price: 21000, image: "/images/Maquillaje/recargapolvovainilla.webp" },
            { id: 62, name: "Labial Chocolate", brand: "TOHB", price: 49500, image:"/images/Maquillaje/LabialChocolate.jpg"}
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
