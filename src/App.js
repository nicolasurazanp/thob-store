// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import Hero from './components/Hero';
import Reviews from './components/Reviews'; 
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import CategoryPage from './components/CategoryPage';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                  <AnnouncementBar /> {/* Colocamos el anuncio encima de la navbar */}
                <Navbar />
                <Routes>
                    <Route path="/" element={<><Hero />  <FeaturedProducts /> <Categories /> <Reviews /></>} />
                    <Route path="/:category" element={<CategoryPage />} /> {/* Ruta dinámica para las categorías */}
                     <Route path="/" element={<ProductList />} /> {/* Página de lista de productos */}
                    <Route path="/product/:productId" element={<ProductDetail />} /> {/* Página de detalles del producto */}
                </Routes>
                 <Footer /> {/* Agregamos el footer al final */}
            </div>
        </Router>
    );
};

export default App;
