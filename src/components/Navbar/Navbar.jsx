import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <li><a href="/">SHOP</a></li>
        <li><a href="/">SKILLS</a></li>
        <li><a href="/">STORIES</a></li>
        <li><a href="/">ABOUT</a></li>
        <li><a href="/">CONTACT US</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
      </div>
    </nav>
  );
};

export default Navbar;
