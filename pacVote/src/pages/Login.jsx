import '../styles/Login.css';
import React from "react";
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

function clickMe() {
  alert('PacVote is an online voting system app for citizens of Pacopolis!');
}

function Login() {
  const navigate = useNavigate();
  
  const goToCreateAccount = () => {
    navigate("/create-account");
  };

  const goToHome = () => {
    navigate("/home");
  }
  
  return (
    <div className="login-container">
      <img src={logo} className="login-logo" alt="PacVote Logo" />

      <div className="login-box">
        <h3 className="login-title">Login</h3>
        <form className="login-form">
          <label className="login-label">
            Username:
            <input type="text" name="username" />
          </label>
          <label className="login-label">
            Password:
            <input type="password" name="password" />
          </label>
        </form>

        <div className="login-buttons">
          <button onClick={goToHome} className="login-button">Login</button> 
          <button onClick={goToCreateAccount} className="login-button">Create Account</button>
        </div>
      </div>

      <button 
        onClick={clickMe} 
        className="info-button"
      >
        Info
      </button>
    </div>
  );
}

export default Login;
