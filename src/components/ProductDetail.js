import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams(); // Obtener el ID del producto de la URL
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState(''); // Estado para la imagen seleccionada

    useEffect(() => {
        console.log('productId:', productId); // Verificamos el productId recibido de la URL

        // Leer el archivo JSON y obtener el producto por su ID
        fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                console.log('Data fetched:', data); // Verificamos los datos cargados del JSON

                // Aseguramos que productId y p.id sean del mismo tipo (ambos como cadenas) para la comparación
                const foundProduct = data.find(p => String(p.id) === String(productId)); // Convertir ambos a cadenas

                console.log('Found product:', foundProduct); // Verificamos el producto encontrado

                if (foundProduct) {
                    setProduct(foundProduct);
                    setCurrentImage(foundProduct?.images[0]); // Establecer la primera imagen como la inicial
                } else {
                    console.error('Producto no encontrado');
                }
            })
            .catch(error => console.error('Error loading product:', error));
    }, [productId]);

    // Si no tenemos el producto aún, mostramos un mensaje de carga
    if (!product) {
        return <p>Cargando...</p>; 
    }

    return (
        <div className="product-detail">
            <div className="product-gallery">
                <div className="main-image">
                    <img src={currentImage} alt={product.title} />
                </div>

                <div className="image-thumbnails">
                    {product.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            className="thumbnail"
                            onClick={() => setCurrentImage(image)} // Evento click para cambiar la imagen principal
                        />
                    ))}
                </div>
            </div>

            <div className="product-info">
                <h2>{product.title}</h2>
                <p className="price">${product.price}</p>
                <button className="add-to-cart">Agregar al carrito</button>

                <h3>Descripción:</h3>
                <p>{product.description}</p>

                <h3>Modo de uso:</h3>
                <p>{product.usage}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
