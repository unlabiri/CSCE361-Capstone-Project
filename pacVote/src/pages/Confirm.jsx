import React from "react";
import logo from '../assets/logo.png';
import '../styles/Confirm.css';

function clickMe() {
    alert('PacVote is an online voting system app for citizens of Pacopolis!');
}

function Confirm() {
    return (
        <div className="confirm-container">
            <div className="header-container">
                <img src={logo} className="confirm-logo" alt="PacVote Logo" />
                <h1 className="confirm-title">Your vote has been submitted. Thank you for voting!</h1>
                <button className="logout-button">Logout</button>
            </div>

            <button onClick={clickMe} className="info-button">
                Info
            </button>
        </div>
    );
}

export default Confirm;
