import React, { useState } from 'react';

const ForgotPW = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the logic to handle the email submission here
    console.log(`Email submitted: ${email}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top" style={{ background: '#ffffff' }}>
        <div className="container-fluid">
          <a className="navbar-brand login" href="#">GEDSI HUB</a>
        </div>
      </nav>
      
      <section id="main" className="log-main">
        <div
          className="text-center flex-column justify-content-center align-items-center align-content-center mx-auto justify-content-md-center upper info"
          style={{ maxWidth: '596px' }}
        >
          <h2 className="fw-semibold text-center" style={{ textAlign: 'center', marginBottom: '20px' }}>
            Reset Your Password
          </h2>
          <p className="d-flex justify-content-center reset-p">
            Enter your PUP webmail below and we will send you a link to reset your password.
          </p>
        </div>
        
        <div className="container login-con" style={{ paddingTop: '40px' }}>
          <form className="text-center" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label d-flex d-lg-flex justify-content-start justify-content-lg-start login-lbl">
                Email
              </label>
              <input
                className="focus-ring focus-ring-light form-control d-flex justify-content-center align-items-center login-form"
                type="email"
                name="email"
                placeholder="Enter your PUP webmail"
                value={email}
                onChange={handleEmailChange}
                required
                pattern="^[a-zA-Z0-9._%+-]+@.+\.(pup|edu|com)$"
              />
            </div>
            
            <div className="mb-3">
              <button className="shadow-sm d-block w-100 login-btn" type="submit" title="click to login">
                Send Email
              </button>
            </div>
            
            <div className="mb-3">
              <a className="shadow-sm d-block w-100 cancel-btn" role="button" href="#" title="click to login">
                Cancel
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPW;
