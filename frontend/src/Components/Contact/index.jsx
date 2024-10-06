import React from 'react';
import './style.scss';

const ContactForm = () => {
  return (
    <div className="contact-container">
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input type="text" id="name" name="user_name" placeholder="Введите ваше имя" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" placeholder="Введите ваш email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Сообщение</label>
          <textarea id="message" name="message" placeholder="Введите ваше сообщение" required></textarea>
        </div>

        <button className="submit-button" type="submit">Отправить</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
