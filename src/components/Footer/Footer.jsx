import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettä muse.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." required />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="footer-content">
          <div className="footer-section about">
            <h4>mettā muse</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className="footer-section quick-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>
              <a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a>
            </p>
            <h4>CURRENCY</h4>
            <p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
                alt="USD Flag"
                width="16"
              />{' '}
              - USD
            </p>
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>

          <div className="footer-section follow-us">
            <div className="payment-icons">
              <img
                src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                alt="Google Pay"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888870.png"
                alt="MasterCard"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
                alt="PayPal"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/349/349226.png"
                alt="Amex"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/889/889221.png"
                alt="Apple Pay"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/602/602116.png"
                alt="Shopify"
              />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 mettamuse. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
