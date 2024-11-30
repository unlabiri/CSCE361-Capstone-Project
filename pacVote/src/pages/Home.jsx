import React from "react";
import logo from '../assets/logo.png';
import '../styles/Home.css';

function clickMe() {
    alert('PacVote is an online voting system app for citizens of Pacopolis!');
  }

function Home() {
    return (
        <div className="Home-container">
            <img src={logo} className="Home-logo" alt="PacVote Logo" />






            <div className="logout-button">
                <button className="logout-button">Logout</button>
            </div>






         <button onClick={clickMe} className="info-button">
            Info
        </button>
        </div>
    )
}

export default Home;