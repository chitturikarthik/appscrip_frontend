import React, { useState } from 'react';
import { FiSearch, FiHeart, FiUser, FiShoppingBag, FiChevronDown } from 'react-icons/fi'; 
import './Header.css';

const Header = () => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="https://img.freepik.com/premium-photo/close-up-black-white-logo-with-zebra_1035766-32091.jpg?ga=GA1.1.524228739.1726244464&semt=ais_hybrid" alt="Logo" />
      </div>

    <h1>LOGO</h1>

      <nav className="header-icons">
        <FiSearch className="icon" />
        <FiHeart className="icon" />
        <FiUser className="icon" />
        <FiShoppingBag className="icon" />
        
        <div className="language-select" onClick={toggleLanguageDropdown}>
          ENG <FiChevronDown className="dropdown-arrow" />
          {isLanguageDropdownOpen && (
            <ul className="language-dropdown">
              <li>English</li>
              <li>Spanish</li>
              <li>French</li>
              <li>German</li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
