import React, { useState } from 'react';
import './style.scss';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    client_name: '',
    client_email: '',
    portfolio: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  function submit(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_6ha4lf7', // Service ID
        'template_2fbve54', // Template ID 
        formData,
        'nU1wfnyLZoLgMkqtZ' // Public API key
      )
      .then(
        (response) => {
          setLoading(false);
          toast.success("Message sent successfully!");
        },
        (err) => {
          console.log(err);
          setLoading(false);
          toast.error("Failed to send the message");
        }
      );
  }

  function handleFormInfo(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={submit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              onChange={handleFormInfo}
              id="name"
              name="client_name"
              placeholder="Введите ваше имя"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleFormInfo}
              id="email"
              name="client_email" 
              placeholder="Введите ваш email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="portfolio">Portfolio</label>
            <input
              type="text"
              onChange={handleFormInfo}
              id="portfolio"
              name="portfolio" 
              placeholder="Введите ваш портфолио*"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              onChange={handleFormInfo}
              name="message" 
              placeholder="Введите ваше сообщение"
              required
            ></textarea>
          </div>

          <button className="submit-button" type="submit" disabled={loading}>
            {loading ? "Отправка..." : "Отправить"} 
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
