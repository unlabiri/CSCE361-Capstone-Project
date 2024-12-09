import React from "react";
import logo from '../assets/logo.png';
import '../styles/Confirm.css';
import { useNavigate } from "react-router-dom";

function clickMe() {
    alert('PacVote is an online voting system app for citizens of Pacopolis!');
}

function Confirm() {
    const navigate = useNavigate();
    
    const goToHome = () => {
      navigate("/home");
    };

    return (
        <div className="confirm-container">
            <div className="header-container">
                <img src={logo} className="confirm-logo" alt="PacVote Logo" />
                <h1 className="confirm-title">Your vote has been submitted. Thank you for voting!</h1>
            </div>

            <div className="confirm-box">
                <h2 className="box-title">Mayoral Election:</h2>
                <div className="confirm-row">
                    <span>• You chose: *Candidate*.</span>
                </div>
            </div>

            <div className="confirm-box">
                <h2 className="box-title">Issue #1:</h2>
                <div className="confirm-row">
                    <span>• You chose: *Issue*.</span>
                </div>
            </div>

            <div className="button-container">
                <button onClick={goToHome} className="home-button">Home Page</button>
            </div>

            <button onClick={clickMe} className="info-button">
                Info
            </button>

        </div>
    );
}

export default Confirm;
