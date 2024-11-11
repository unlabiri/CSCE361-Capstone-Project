import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import AccountPage from './AccountPage';
import ElectionsPage from './ElectionsPage';
import PastElectionsPage from './PastElectionsPage';
import BallotPage from './BallotPage';
import VoteConfirmationPage from './VoteConfirmationPage';

function App() {
  return (
    <BrowserRouter>
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