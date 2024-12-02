import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; 
import CreateAccount from "./pages/CreateAccount"; 
import Home from "./pages/Home";
import Ballot from "./pages/Ballot";
import Confirm from "./pages/Confirm";
import Results from "./pages/Results";
import Review from "./pages/Review";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ballot" element={<Ballot />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/results" element={<Results />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
