import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-your-logo" alt="Logo" />
      </div>

      <nav className="header-icons">
        <div className="language-select">
          ENG <span className="dropdown-arrow">▼</span>
        </div>
      </nav>

      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaRegTimesCircle className="icon" /> : <div className="hamburger-lines"></div>}
      </div>
    </header>
  );
};

export default Header;
