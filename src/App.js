// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ActivationPage from './pages/ActivationPage';
import './bootstrap/css/bootstrap.min.css';
import './css/activation.css';
// import './css/bs-theme-overrides.css';
// import './css/Login-Form-Basic-icons.css';

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/activate/:uid/:token" element={<ActivationPage />} />
        <Route
          path="/"
          element={isAuthenticated ? <h1>Home Page</h1> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
