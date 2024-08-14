import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import gadologo from '../img/v2gadologo.png';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/users/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      if (response.ok) {
        navigate('/email-sent');
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        setError(errorData.detail || 'Registration failed');
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
          <h2 class="head2">GEDSI HUB</h2>
          <p class='text-center'>Fill up to activate your account</p>
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="mb-3">

              <input
                className="focus-ring focus-ring-light form-control login-form"
                type="email"
                name="email"
                placeholder="Enter your pup webmail"
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
                placeholder="Enter your password"
                required
                minLength="6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <select
                className="focus-ring focus-ring-light form-select select-role"
                id="role"
                name="role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled>Select your role</option>
                <option value="Student">Student</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary shadow-sm d-block w-100 login-btn" type="submit">Activate</button>
            </div>
          </form>
          {error && <p className="text-danger">{error}</p>}
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
