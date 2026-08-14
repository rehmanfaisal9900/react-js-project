import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <h2 className="footer-logo">v-shop</h2>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} v-shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;