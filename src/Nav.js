import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import LoginForm from "./LoginForm"; // Import LoginForm component
import "./styles.css"; // Import your CSS file for styling

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">Little Lemon</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        
        {/* Login should be a button to open a popup instead of a Link */}
        <li><LoginForm /></li>
      </ul>
    </nav>
  );
};

export default Nav;
