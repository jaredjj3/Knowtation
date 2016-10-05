import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <div className="footer-bar">
    <ul className="footer-links">
      <li><Link to="/faq">FAQs</Link></li>
      <li><Link to="/privacy">Privacy Policy</Link></li>
      <li><a href="https://www.instagram.com/pickupjazz/">Instagram</a></li>
      <li><a href="https://www.youtube.com/pickupjazz">Youtube</a></li>
    </ul>
  </div>
);

export default Footer;
