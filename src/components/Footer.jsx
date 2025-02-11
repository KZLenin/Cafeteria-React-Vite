import React from "react";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import wh from "../assets/whatsapp.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href="#" className="footer-link">Políticas de Privacidad</a> |
          <a href="#" className="footer-link">Términos de Uso</a>
        </div>
        <div className="footer-section">
          <p>© 2025 HELD Coffee Shop. Todos los derechos reservados.</p>
        </div>
        <div className="footer-section social-icons">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={fb} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://wa.me/" target="_blank">
            <img src={wh} alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={ig} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
