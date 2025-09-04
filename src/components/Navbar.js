import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación
import './Navbar.css';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para manejar el dropdown

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen); // Cambia el estado del dropdown
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/images/General/logoTOHB.png" alt="THOB Logo" />
            </div>
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li className="dropdown">
                    <button className="dropbtn" onClick={toggleDropdown}>
                        Productos <span className="arrow">▼</span>
                    </button>
                    {dropdownOpen && (
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
            <div className="auth-links">
                <Link to="#sign-in">Iniciar sesión</Link>
                <Link to="#register">Registrarse</Link>
            </div>
        </nav>
    );
};

export default Navbar;
