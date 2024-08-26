
import React, { useState } from "react";
import "./Nav.css";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <ul className={`nav-ul ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="Inicio" className="item">Inicio</a></li>
        <li><a href="financiacion" className="item">Financiación</a></li>
        <li><a href="nosotros" className="item">Nosotros</a></li>
        <li><a href="contacto" className="item">Contacto</a></li>
        <div className="underline"></div>
      </ul>
    </nav>
  );
}