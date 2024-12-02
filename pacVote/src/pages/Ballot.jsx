import React from "react";
import logo from '../assets/logo.png';
import '../styles/Ballot.css';

function clickMe() {
    alert('PacVote is an online voting system app for citizens of Pacopolis!');
}

function clickInfo() { // edit to display candidate and issue information
    alert('Insert Candidate/Issue Info Here');
}

function Ballot() {
    return (
        <div className="ballot-container">
            <div className="header-container">
                <img src={logo} className="ballot-logo" alt="PacVote Logo" />
                <h1 className="ballot-title">PacVote - General Election - Date</h1>
                <button className="home-button">Home Page</button>
                <div className="divider"></div>
                <button className="logout-button">Logout</button>
            </div>

            <form className="ballot-form">
                <h2 className="box-title">Mayoral Election:</h2>
                <div className="ballot-row">
                    <span>• *Candidate1*</span>
                    <input type="radio" name="candidate1"></input>
                    <button type="button" onClick={clickInfo} className="more-info-button">Learn more</button>
                </div>
                <div className="ballot-row">
                    <span>• *Candidate2*</span>
                    <input type="radio" name="candidate1"></input>
                    <button type="button" onClick={clickInfo} className="more-info-button">Learn more</button>
                </div>
            </form>

            <form className="ballot-form">
                <h2 className="box-title">Issue #1:</h2>
                <div className="ballot-row">
                    <span>• *Issue1*</span>
                    <input type="radio" name="issue1"></input>
                    <button type="button" onClick={clickInfo} className="more-info-button">Learn more</button>
                </div>
                <div className="ballot-row">
                    <span>• *Issue2*</span>
                    <input type="radio" name="issue1"></input>
                    <button type="button" onClick={clickInfo} className="more-info-button">Learn more</button>
                    </div>
            </form>

            <div className="button-container">
                <button className="edit-button">
                    Continue to Review
                </button>
            </div>

            <button onClick={clickMe} className="info-button">
                Info
            </button>
        </div>
    );
}

export default Ballot;