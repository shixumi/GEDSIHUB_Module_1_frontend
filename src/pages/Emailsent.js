import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailSent = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-md fixed-top" style={{ background: '#ffffff' }}>
                <div className="container-fluid">
                    <a className="navbar-brand login" href="#">GEDSI HUB</a>
                </div>
            </nav>
            <section id="main" className="emailsent">
                <div className="container emailsent">
                    <h2 style={{ textAlign: 'center' }}>Email Sent!</h2>
                    <div className="activation-msg">
                        <div className="row d-flex d-xxl-flex justify-content-center align-items-center flex-sm-row justify-content-xxl-center align-items-xxl-center">
                            <div className="col">
                                <div className="d-flex d-xxl-flex justify-content-center justify-content-xxl-center align-items-xxl-center">
                                    <p className="p-email">
                                        We’ve just sent you an email! Check your inbox and click the
                                        <strong> activation link</strong> to finalize your registration. Your account is almost ready!
                                    </p>
                                </div>
                            </div>
                            <div className="col-xxl-3 d-flex d-sm-flex d-md-flex d-xl-flex d-xxl-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-md-center align-items-md-center justify-content-xl-center align-items-xl-center justify-content-xxl-center icon-col">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-mail email-icon">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                    <path d="M3 7l9 6l9 -6"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default EmailSent;
