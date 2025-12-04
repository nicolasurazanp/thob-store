// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Contacto from './components/Contacto';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Hero from './components/Hero';
import Reviews from './components/Reviews'; 
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CategoryPage from './components/CategoryPage';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';  // Asegúrate de importar CartPage
// KitsSection removed from homepage; kits are now a category in `Categories`
import './App.css';


const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [alert, setAlert] = useState("");

  // Función para mostrar alerta visual
  const showAlert = (msg) => {
    setAlert(msg);
    setTimeout(() => setAlert(""), 2000);
  };

  // Función para agregar productos al carrito (incluyendo cantidades)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
      let updatedCart;
      if (productIndex !== -1) {
        updatedCart = [...prevCart];
        updatedCart[productIndex].quantity = product.quantity;
      } else {
        updatedCart = [...prevCart, product];
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
    showAlert("Producto agregado correctamente al carrito");
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
        <Alert message={alert} onClose={() => setAlert("")} />
        <Navbar cartItems={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
        <Routes>
          <Route path="/" element={<><Hero /> <FeaturedProducts /> <Categories /> <Reviews /></>} />
          <Route path="/:category" element={<CategoryPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
