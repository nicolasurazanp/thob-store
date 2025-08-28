// src/components/Reviews.js
import React from 'react';
import './Reviews.css'; // Estilos para las reseñas

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            title: "¡Increíble producto!",
            body: "Este producto cambió mi rutina de cuidado personal. Lo recomiendo totalmente.",
            reviewer: "Laura P.",
            date: "15 de agosto de 2025",
            rating: 5
        },
        {
            id: 2,
            title: "Me encanta!",
            body: "He notado resultados desde el primer uso. ¡Muy efectivo y natural!",
            reviewer: "Carlos M.",
            date: "20 de agosto de 2025",
            rating: 5
        },
        {
            id: 3,
            title: "Excelente calidad",
            body: "Calidad de 10, y el envase es súper práctico. Sin duda seguiré comprando.",
            reviewer: "María G.",
            date: "22 de agosto de 2025",
            rating: 5
        }
    ];

    return (
        <section className="reviews">
            <h2>Reseñas De Nuestros Clientes</h2>
            <p>Lo que nuestros clientes dicen sobre nosotros</p>
            <div className="review-list">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-rating">
                            {[...Array(5)].map((_, index) => (
                                <span key={index} className={index < review.rating ? "star filled" : "star"}>★</span>
                            ))}
                        </div>
                        <h3>{review.title}</h3>
                        <p>{review.body}</p>
                        <div className="review-footer">
                            <div className="reviewer">
                                <img src="https://randomuser.me/api/portraits/women/1.jpg" alt={review.reviewer} className="review-avatar" />
                                <span>{review.reviewer}</span>
                            </div>
                            <span className="review-date">{review.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
