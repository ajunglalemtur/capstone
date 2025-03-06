import React from "react";
import "./styles.css";
import Logo from "./images/logo.png"; // Add your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>

      <div className="footer-links">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Contact Info</h3>
        <p>123 Lemon St, Chicago, IL</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@littlelemon.com</p>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
