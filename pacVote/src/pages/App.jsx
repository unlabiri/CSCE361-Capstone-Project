import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";           
import CreateAccount from "./CreateAccount";  
import Home from "./Home";            
import Ballot from "./Ballot";         
import Confirm from "./Confirm";      
import Results from "./Results";       
import Review from "./Review";       

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ballot" element={<Ballot />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/results" element={<Results />} />
      <Route path="/review" element={<Review />} />
    </Routes>
  );
}

export default App;
