import './Header.css'
import  logo  from '../images/logoS.png'

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <h1 className='header-logo-h1'>ZuluagaVeículos</h1>
        </div>
          <img src={logo} alt="logo" width={80} height={90} />          

        <div className="header-contacto">
          <p className='header-contacto-p'>
            <strong>Contáctame: </strong>3167713484
          </p>
        </div>
      </div>
    </header>
  );
}