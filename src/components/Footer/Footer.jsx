import "./Footer.css"

export const Footer = () => {
    return (
        <div className="footer mt-auto">
          <div className="footer-content">
            <p>© 2024 Nombre de la Empresa. Todos los derechos reservados.</p>
            <p>Términos y condiciones</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      );
}