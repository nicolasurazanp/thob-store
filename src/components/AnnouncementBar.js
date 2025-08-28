
import React from 'react';
import { FaInstagram } from 'react-icons/fa'; 
import './AnnouncementBar.css'; 

const AnnouncementBar = () => {
    return (
        <div className="announcement-bar">
            <div className="announcement-content">
                <FaInstagram className="instagram-icon" />
                <span>Envíos GRATIS por compras superiores a $180.000</span>
            </div>
        </div>
    );
};

export default AnnouncementBar;
