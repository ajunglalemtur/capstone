import React from "react";
import "./styles.css";

const RegistrationForm = ({ onClose }) => {
  return (
    <div className="login-modal">
      <div className="login-box">
        <h2>Register</h2>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button className="login-submit">Register</button>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
