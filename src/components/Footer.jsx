import React from 'react';
import facebookIcon from '../assets/facebook.png';
import whatsappIcon from '../assets/whatsapp.png';
import instagramIcon from '../assets/instagram.png';

import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-content">
      <div className="container">
        <p className="footer-copyright">
          &copy; 2024 HELD Coffee Shop. Todos los derechos reservados.
        </p>
        <a href="#" className="footer-link">
          Políticas de Privacidad
        </a>
        <a href="#" className="footer-link">
          Términos de Uso
        </a>
        <div className="mt-3">
          <a
            href="https://www.facebook.com/DannaMishelle"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={facebookIcon}alt="Facebook" width="30" />
          </a>
          <a
            href="https://wa.me/990754359"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={whatsappIcon} alt="WhatsApp" width="30" />
          </a>
          <a
            href="https://www.instagram.com/danna.mishelle._"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <img src={instagramIcon} alt="Instagram" width="30" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
