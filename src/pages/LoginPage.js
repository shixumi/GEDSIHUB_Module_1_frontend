// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gadologo from '../img/v2gadologo.png';
import ForgotPW from './ForgotPW';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/users/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        const errorData = await response.json();
        setError(errorData.detail || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred');
    }
  };

  return (
    <div class="body-home">
      <nav className="navbar navbar-expand-md fixed-top" style={{ background: '#ffffff' }}>
        <div className="container-fluid">
          <a className="navbar-brand login">GEDSI HUB</a>
        </div>
      </nav>
      <section id="main-form" className="log-main">
        <div className="container login-con">
        <div class="text-center formlogo">
            <img src={gadologo} width='150px' margin-bottom="200px" alt="logo" className="logo" />
          </div>

          <h2 className='gedsilogo'>GEDSI HUB</h2>
          <p class='text-center'>Sign in to start your session</p>
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="mb-3">

              <input
                className="focus-ring focus-ring-light form-control login-form"
                type="email"
                name="email"
                placeholder="Webmail"
                required
                pattern="^[a-zA-Z0-9._%+-]+@.+\.(pup|edu|com)$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">

              <input
                className="focus-ring focus-ring-light form-control"
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength="6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-between login-ftr">
              <div className="form-check rbm-me">
                <input className="form-check-input" type="checkbox" id="formCheck-1" />
                <label className="form-check-label" htmlFor="formCheck-1">Keep me logged in</label>
              </div>
              <a className="fgt-pass" href='/forgotpw'>Forgot Password?</a>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary shadow-sm d-block w-100 login-btn" type="submit">Sign in</button>
            </div>
          </form>
          {error && <p className="text-danger">{error}</p>}
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
