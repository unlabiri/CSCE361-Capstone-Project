import React from "react";
import logo from '../assets/logo.png';
import '../styles/Results.css';

function clickMe() {
    alert('PacVote is an online voting system app for citizens of Pacopolis!');
}

function Results() {
    return (
        <div className="results-container">
            <div className="header-container">
                <img src={logo} className="results-logo" alt="PacVote Logo" />
                <h1 className="results-title">PacVote - Election Results - Date</h1>
                <button className="home-button">Home Page</button>
                <div className="divider"></div>
                <button className="logout-button">Logout</button>
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
