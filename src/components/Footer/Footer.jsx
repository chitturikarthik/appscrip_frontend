import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>BE THE FIRST TO KNOW</h3>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-links">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#orders">Orders & Shipping</a></li>
            <li><a href="#returns">Returns & Refunds</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;