// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ cartItems, addToCart, removeFromCart }) => {
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  // Función para alternar el estado del dropdown de productos
  const toggleProductsDropdown = () => setProductsDropdownOpen(!productsDropdownOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/General/logoTOHB.png" alt="THOB Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li className="dropdown">
          <button className="dropbtn" onClick={toggleProductsDropdown}>
            Productos <span className="arrow">▼</span>
          </button>
          {productsDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/cuidado-capilar">Cuidado Capilar</Link>
              <Link to="/cuidado-corporal">Cuidado Corporal</Link>
              <Link to="/cuidado-facial">Cuidado Facial</Link>
              <Link to="/maquillaje">Maquillaje</Link>
            </div>
          )}
        </li>
        <li><Link to="#contact">Contacto</Link></li>
      </ul>

      {/* Ícono de carrito */}
      <div className="cart-icon">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
