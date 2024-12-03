import React from "react";
import logo from '../assets/logo.png';
import '../styles/Home.css';

function clickMe() {
    alert('PacVote is an online voting system app for citizens of Pacopolis!');
}

function Home() {
    return (
        <div className="Home-container">
            <div className="header-container">
                <img src={logo} className="Home-logo" alt="PacVote Logo" />
                <h1 className="Home-title">Welcome to PacVote - Voting System!</h1>
                <button className="logout-button">Logout</button>
            </div>

            <div className="Home-box">
                <h2 className="box-title">Current Votes:</h2>
                <div className="vote-row">
                    <span>• Candidate1 vs Candidate2, voting ends Date</span>
                    <button className="vote-button">Vote</button>
                </div>
            </div>

            <div className="Home-box">
                <h2 className="box-title">Past Votes:</h2>
                <div className="results-row">
                    <span>• Winner Candidate3! Ended Date, % of the votes</span>
                    <button className="results-button">Results</button>
                </div>
            </div>

            <button onClick={clickMe} className="info-button">
                Info
            </button>
        </div>
    );
}

export default Home;