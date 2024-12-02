import React from "react";
import logo from '../assets/logo.png';
import '../styles/Review.css';

function clickMe() {
    alert('PacVote is an online voting system app for citizens of Pacopolis!');
}

function Review() {
    return (
        <div className="review-container">
            <div className="header-container">
                <img src={logo} className="review-logo" alt="PacVote Logo" />
                <h1 className="review-title">Review your ballot before submitting.</h1>
                <button className="home-button">Home Page</button>
                <div className="divider"></div>
                <button className="logout-button">Logout</button>
            </div>

            <div className="review-box">
                <h2 className="box-title">Mayoral Election:</h2>
                <div className="review-row">
                    <span>• You chose: *Candidate*.</span>
                </div>
            </div>

            <div className="review-box">
                <h2 className="box-title">Issue #1:</h2>
                <div className="review-row">
                    <span>• You chose: *Issue*.</span>
                </div>
            </div>

            <div className="button-container">
                <button className="edit-button">
                    Edit my ballot.
                </button>
                <div className="divider"></div>
                <button className="submit-button">
                    Submit my vote!
                </button>
            </div>

            <form className="id-form">
                <div className="form-row">
                    <label className="id-label">
                    <input type="text" name="voterID" placeholder="Enter Voter ID" />
                    </label>
                </div>
            </form>


            <button onClick={clickMe} className="info-button">
                Info
            </button>
        </div>
    );
}

export default Review;
