// Donate.js
import React from 'react';
import './Donate.scss'; // Импорт стилей

const Donate = () => {
    return (
        <div className="donate-container">
            <h1>Сначала, дай нам $1000!</h1>
            <p>Потом начни бесплатно создавать свои портфолио</p>
            <button onClick={() => alert('Спасибо Чушпанчик!')}>Поддержать</button>
        </div>
    );
};

export default Donate;
