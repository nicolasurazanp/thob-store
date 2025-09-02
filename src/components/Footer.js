import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'; // Importamos el ícono de TikTok

import './Footer.css'; // Estilos para el footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>
                        <FaWhatsapp /> <a href="https://wa.me/573182333137" target="_blank" rel="noopener noreferrer">WhatsApp: 3182333137 o  3015437292</a>
                    </p>
                    <p>
                        <FaInstagram /> <a href="https://www.instagram.com/t.o_hierbabuena/" target="_blank" rel="noopener noreferrer">Instagram: t.o_hierbabuena</a>
                    </p>
                    <p>
                        <FaFacebook /> <a href="https://www.facebook.com/organica.store.hierbabuena" target="_blank" rel="noopener noreferrer">Facebook: orgánica Store Hierbabuena</a>
                    </p>
                    <p>
                        <FaTiktok /> <a href="https://www.tiktok.com/@t.organica_hierbabuena" target="_blank" rel="noopener noreferrer">TikTok: @t.organica_hierbabuena</a>
                    </p>
                </div>
                <div className="footer-logo">
                    <img src="/images/logoTOHB.png" alt="Logo THOB" />
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Tienda Orgánica Hierbabuena - Todos los derechos reservados</p>
            </div>
        </footer>
    );
};

export default Footer;
