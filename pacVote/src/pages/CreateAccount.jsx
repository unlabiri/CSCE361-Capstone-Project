import React from "react";
import logo from '../assets/logo.png';
import '../styles/CreateAccount.css';

function clickMe() {
  alert('PacVote is an online voting system app for citizens of Pacopolis!');
}

function CreateAccount() {
  return (
    <div className="create-container">
      <img src={logo} className="create-logo" alt="PacVote Logo" />
      <div className="create-box">
        <h3 className="create-title">Create Account</h3>

        <form className="create-form">
          <div className="form-row">
            <label className="create-label">
              <input type="text" name="firstName" placeholder="First Name" />
            </label>
            <label className="create-label">
              <input type="text" name="lastName" placeholder="Last Name" />
            </label>
          </div>

          <div className="form-row">
            <label className="create-label">
              <input type="text" name="username" placeholder="Username" />
            </label>
            <label className="create-label">
              <input type="month" name="birthdate" placeholder="Birthdate: MM-YYYY" />
            </label>
          </div>

          <div className="form-row">
            <label className="create-label">
              <input type="text" name="address" placeholder="Street Address" />
            </label>
            <label className="create-label">
              <input type="text" name="zipcode" placeholder="ZipCode: 12345" />
            </label>
          </div>

          <div className="form-row">
            <label className="create-label">
              <input type="password" name="password" placeholder="Password" />
            </label>
            <label className="create-label">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </label>
          </div>
        </form>

        <div className="login-buttons">
          <button className="login-button">Back to Login</button>
          <button className="login-button">Create Account</button>
        </div>
      </div>
      <button onClick={clickMe} className="info-button">
        Info
      </button>
    </div>
  );
}

export default CreateAccount;
