import "./Nav.css";

export function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li><a href="Inicio" className="item">Inicio</a></li>
        <li><a href="financiacion" className="item">Financiación</a></li>
        <li><a href="nosotros" className="item">Nosotros</a></li>
        <li><a href="contacto" className="item">Contacto</a></li>
        <div className="underline"></div>
      </ul>
    </nav>
  );
}
