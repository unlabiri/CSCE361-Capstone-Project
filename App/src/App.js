import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import ElectionsPage from './pages/ElectionsPage';
import PastElectionsPage from './pages/PastElectionsPage';
import BallotPage from './pages/BallotPage';
import VoteConfirmationPage from './pages/VoteConfirmationPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/elections" element={<ElectionsPage />} />
        <Route path="/pastelections" element={<PastElectionsPage />} />
        <Route path="/ballot" element={<BallotPage />} />
        <Route path="/confirmation" element={<VoteConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;