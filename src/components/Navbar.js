import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons'; // Agregamos el ícono de hamburguesa
import './Navbar.css';

const Navbar = ({ cartItems }) => {
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa

  // Función para alternar el estado del dropdown de productos
  const toggleProductsDropdown = () => setProductsDropdownOpen(!productsDropdownOpen);

  // Función para alternar el estado del menú hamburguesa
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Menú hamburguesa (solo en móvil) */}
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>

      {/* Logo */}
      <div className="logo">
        <img src="/images/General/logoTOHB.png" alt="THOB Logo" />
      </div>

      {/* Menú de navegación */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
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
        <li><Link to="/contacto">Contacto</Link></li>
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
