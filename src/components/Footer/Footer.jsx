import "./Footer.css"
import React from 'react';

export const Footer = () => {
    return (
      <div className="footer fixed bottom-0 w-full py-5 px-11 text-md font-light">
      <div className="footer-content flex justify-between items-center">
          <p>© 2024 MANTEL ROJO</p>
          <p>Todos los derechos reservados.</p>
          <p>Términos y condiciones</p>
          <div className="flex gap-3">
             <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
          </div>
      </div>
  </div>
  
      );
}