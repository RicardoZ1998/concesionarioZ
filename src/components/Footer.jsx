import imgLogo from '../images/Logo.png'
import "./Footer.css";

export function Footer(){
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={imgLogo} alt="Logo" width={150} height={150} />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Adelaide, SA</p>
          </div>
          <div className="footer-column">
            <h3>Info</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Pantry Essentials</a></li>
              <li><a href="#">Gourmet Cocktails</a></li>
              <li><a href="#">Liquor</a></li>
              <li><a href="#">Gluten Free</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Account</h3>
            <ul>
              <li><a href="#">My account</a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Checkout</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>The Fine Print</h3>
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Returns Policy</a></li>
              <li><a href="#">Delivery + Payment</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 | Website</p>
      </div>
    </footer>
  );
};

