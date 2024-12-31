import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.priventDefault();
        if( password !== confirmPassword ) {
            alert( 'Passwords do not match!!');
            return;
        }
        try {
            const response = await axios.post('/api/signup', { name, email, password });
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            console.log('Sign up failed: ', error)
        }
    };
    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="card p-4" style={{ width: '360px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3 className="text-center mb-4" style={{ color: '#24292e', fontWeight: '600' }}>Sign up for SKY-BOT</h3>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={{ fontWeight: '500', color: '#24292e' }}>Full Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ fontWeight: '500', color: '#24292e' }}>Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{ fontWeight: '500', color: '#24292e' }}>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label" style={{ fontWeight: '500', color: '#24292e' }}>Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#007bff', borderColor: '#007bff', fontWeight: '500' }}>Sign up</button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0" style={{ color: '#586069' }}>Already have an account? <Link to="/login" style={{ color: '#0366d6', textDecoration: 'none', fontWeight: '500' }}>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;