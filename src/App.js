// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Hero from './components/Hero';
import Reviews from './components/Reviews'; 
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CategoryPage from './components/CategoryPage';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';  // Asegúrate de importar CartPage
import KitsSection from './components/KitsSection';
import './App.css';

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Función para agregar productos al carrito (incluyendo cantidades)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);

      if (productIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity = product.quantity; // Actualizar cantidad
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, product]; // Si no existe el producto, se agrega
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <Router>
      <div>
        <AnnouncementBar />
        <Navbar cartItems={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
        <Routes>
          <Route path="/" element={<><Hero /> <FeaturedProducts /> <KitsSection /> <Categories /> <Reviews /></>} />
          <Route path="/:category" element={<CategoryPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} /> {/* Agrega CartPage */}
          <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
