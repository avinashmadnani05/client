import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4 className="footer-title">Get in Touch</h4>
        <p>Email: <a href="mailto:">contact@</a></p>
        <p>Phone: <a href="tel:+91">+91 </a></p>
        <div className="social-buttons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-button linkedin">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-button github">GitHub</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-button instagram">Instagram</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="social-button whatsapp">WhatsApp</a>
        </div>
      </div>
      <div className="footer-bottom">
      <p>2024 GFG Student Chapter, GHRCEMN</p>
      </div>
    </footer>
  );
};

export default Footer;