import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ActivationPage = () => {
    const { uid, token } = useParams();
    const [status, setStatus] = useState('Verifying...');
    const navigate = useNavigate();

    useEffect(() => {
        const activateUser = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/users/activate/${uid}/${token}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    setStatus('Account activated successfully. Redirecting...');
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                } else {
                    setStatus('Activation failed. Please try again.');
                }
            } catch (error) {
                setStatus('An error occurred. Please try again.');
                console.error('Activation error:', error);
            }
        };

        activateUser();
    }, [uid, token, navigate]);

    return (
        <div>
            <nav className="navbar navbar-expand-md fixed-top" style={{ background: '#ffffff' }}>
                <div className="container-fluid">
                    <a className="navbar-brand login" href="#">GEDSI HUB</a>
                </div>
            </nav>
            <div className="container status" style={{ marginTop: '100px' }}>
                <h2 style={{ textAlign: 'center' }}>Status</h2>
                <div className="row justify-content-center">
                    <div className>
                        <p>Account activated successfully. Redirecting...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivationPage;
