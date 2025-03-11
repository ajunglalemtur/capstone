import React, { useState } from "react";
import "./styles.css";

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login & Register forms

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setIsRegister(false); // Reset to login when closing
  };

  return (
    <>
      {/* Login Button in the Navbar */}
      <button className="login-btn" onClick={openModal}>Login</button>

      {/* Popup Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>

            {isRegister ? (
              <>
                <h2>Register</h2>
                <form className="login-form">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />

                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" required />

                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Enter your password" required />

                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input type="password" id="confirm-password" placeholder="Confirm your password" required />

                  <button type="submit" className="submit-btn">Register</button>
                </form>
                <p className="toggle-form">
                  Already have an account? <span onClick={() => setIsRegister(false)}>Login here</span>
                </p>
              </>
            ) : (
              <>
                <h2>Login</h2>
                <form className="login-form">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" required />

                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Enter your password" required />

                  <button type="submit" className="submit-btn">Login</button>
                </form>
                <p className="toggle-form">
                  Don't have an account? <span onClick={() => setIsRegister(true)}>Register here</span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
