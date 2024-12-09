import React from "react";
import logo from '../assets/logo.png';
import '../styles/Results.css';
import { useNavigate } from "react-router-dom";

function clickMe() {
    alert('PacVote is an online voting system app for citizens of Pacopolis!');
}

function Results() {
    const navigate = useNavigate();
    
    const goToHome = () => {
      navigate("/home");
    };

    return (
        <div className="results-container">
            <div className="header-container">
                <img src={logo} className="results-logo" alt="PacVote Logo" />
                <h1 className="results-title">PacVote - Election Results - Date</h1>
                <button onClick={goToHome} className="home-button">Home Page</button>
                <div className="divider"></div>
            </div>

            <div className="results-box">
                <h2 className="box-title">Mayoral Election:</h2>
                <div className="results-row">
                    <span>• Winner: *Candidate*! % of the votes</span>
                </div>
            </div>

            <div className="results-box">
                <h2 className="box-title">Issue #1:</h2>
                <div className="results-row">
                    <span>• Winner: *Issue*! % of the votes</span>
                </div>
            </div>

            <button onClick={clickMe} className="info-button">
                Info
            </button>
        </div>
    );
}

export default Results;
