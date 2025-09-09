// src/components/CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

const CartPage = ({ cartItems, addToCart, removeFromCart }) => {
    // Calcular el subtotal
    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    const subtotal = calculateSubtotal();
    const total = subtotal; // Aquí puedes agregar impuestos o descuentos si lo deseas

    // Maneja el cambio de cantidad (sumar o restar)
    const handleQuantityChange = (product, quantity) => {
        console.log('handleQuantityChange llamada');
        console.log(`Producto: ${product.name || product.title}, Cantidad anterior: ${product.quantity}, Nueva cantidad: ${quantity}`);
        
        if (quantity <= 0) {
            console.log('Cantidad menor o igual a 0, eliminando producto...');
            removeFromCart(product); // Elimina el producto si la cantidad es 0 o menos
        } else {
            const updatedProduct = { ...product, quantity }; // Actualiza el producto con la nueva cantidad
            console.log('Actualizando cantidad del producto...', updatedProduct);
            addToCart(updatedProduct); // Actualiza la cantidad en el carrito
        }
    };

    return (
        <div className="cart-page">
            <h2>Factura de Compra</h2>
            {cartItems.length === 0 ? (
                <p>No tienes productos en el carrito.</p>
            ) : (
                <div className="cart-content">
                    {/* Lista de productos en el carrito */}
                    <div className="cart-items">
                        <table className="cart-table">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Cantidad</th>
                                    <th>Precio</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => {
                                    console.log(`Item ${index}:`, item); // Mostrar los productos en consola

                                    // Obtener el nombre del producto, que puede estar en "name" o "title"
                                    const productName = item.name || item.title || "Producto sin nombre"; // Usar "name" o "title", o "Producto sin nombre" si no existe

                                    return (
                                        <tr key={index}>
                                            {/* Celda para el nombre del producto */}
                                            <td>
                                                <div className="cart-item">
                                                    <img src={item.image} alt={productName} className="cart-item-image" />
                                                    {/* Mostrar el nombre del producto */}
                                                    <span>{productName}</span>
                                                </div>
                                            </td>
                                            {/* Celda para la cantidad */}
                                            <td>
                                                <div className="quantity-container">
                                                    <button
                                                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                                                        disabled={item.quantity <= 1}
                                                        className="quantity-btn"
                                                    >
                                                        -
                                                    </button>
                                                    <input
                                                        type="number"
                                                        value={item.quantity || 1} // Si quantity es null o undefined, asignar 1
                                                        readOnly
                                                        className="quantity-input"
                                                    />
                                                    <button
                                                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                                                        className="quantity-btn"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td>${item.price}</td>
                                            <td>
                                                <button onClick={() => removeFromCart(item)} className="remove-btn">
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Totales de la factura */}
                    <div className="cart-summary">
                        <div className="invoice-section">
                            <div className="invoice-line">
                                <p>Subtotal</p>
                                <p>${subtotal.toFixed(2)}</p>
                            </div>
                            <div className="invoice-line">
                                <p>Total</p>
                                <p>${total.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="checkout-section">
                            <Link to="/checkout">
                                <button className="checkout-btn">Finalizar Compra</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
