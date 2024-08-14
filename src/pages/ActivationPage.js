// ActivationPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ActivationPage = () => {
    const { uid, token } = useParams();
    const [status, setStatus] = useState('Verifying...');
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        const activateUser = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/users/activate/${uid}/${token}/`, {
                    method: 'GET', // Use POST if backend expects POST requests
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                
                if (response.ok) {
                    setStatus('Account activated successfully. Redirecting...');
                    setTimeout(() => {
                        navigate('/login'); // Use navigate instead of history.push
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

    return <div>{status}</div>;
};

export default ActivationPage;
