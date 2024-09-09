// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EmailSent from './pages/Emailsent'; 
import ActivationPage from './pages/ActivationPage';
import HomePage from './pages/HomePage';
import './bootstrap/css/bootstrap.min.css';
import './css/activation.css';
import './css/forgotpw.css';
import ForgotPW from './pages/ForgotPW';


const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/activate/:uid/:token" element={<ActivationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path=""
          element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        <Route path="/forgotpw" element={<ForgotPW />} />
      </Routes>
    </Router>
  );
};

export default App;
