import React from 'react';
import './Alert.css';

const Alert = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="alert-overlay" onClick={onClose}>
      <div className="alert-box">
        <span>{message}</span>
        <button className="alert-close" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default Alert;
