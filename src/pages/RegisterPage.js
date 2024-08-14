import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Default to empty, matches the HTML provided
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/users/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }), // Include the role in the request
      });

      if (response.ok) {
        navigate('/login');
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
    <div>
      <nav className="navbar navbar-expand-md fixed-top" style={{ background: '#ffffff' }}>
        <div className="container-fluid">
          <a className="navbar-brand login" href="#">GEDSI</a>
        </div>
      </nav>
      <section id="main" className="log-main">
        <h2 style={{ textAlign: 'center' }}>Activate your Account</h2>
        <div className="container login-con">
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label d-flex justify-content-start login-lbl">Email</label>
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
              <label className="form-label d-flex justify-content-start login-lbl">Password</label>
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
              <label className="form-label d-flex justify-content-start login-lbl">Role</label>
              <select
                className="focus-ring focus-ring-light form-select select-role"
                id="role"
                name="role"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="" disabled>Select your role</option>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div className="d-flex justify-content-between login-ftr">
              <div className="form-check rbm-me">
                <input className="form-check-input" type="checkbox" id="formCheck-1" />
                <label className="form-check-label" htmlFor="formCheck-1">Keep me logged in</label>
              </div>
              <a className="fgt-pass" href="#">Forgot Password?</a>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary shadow-sm d-block w-100 login-btn" type="submit">Login</button>
            </div>
          </form>
          {error && <p className="text-danger">{error}</p>}
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
