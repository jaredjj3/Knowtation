import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <footer className="footer-bar">
    <ul className="footer-links">
      <li><Link to="/faq">FAQs</Link></li>
      <li><Link to="/privacy">Privacy Policy</Link></li>
      <li><Link to="/terms">Terms of Use</Link></li>
      <li><a href="https://www.instagram.com/pickupjazz/">Instagram</a></li>
      <li><a href="https://www.youtube.com/pickupjazz">Youtube</a></li>
    </ul>
  </footer>
);

export default Footer;
