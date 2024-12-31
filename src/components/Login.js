import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', {email, password});
            console.log(response.data);
            navigate('/dasboard');
        } catch (error) {
            console.log('Login failed:', error);
        }
    };
    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="card p-4" style={{ width: '360px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h3 className="text-center mb-4" style={{ color: '#24292e', fontWeight: '600' }}>Login to SKY-BOT</h3>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" style={{ fontWeight: '500', color: '#24292e' }}>Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" style={{ fontWeight: '500', color: '#24292e' }}>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#007bff', borderColor: '#007bff', fontWeight: '500' }}>Sign in</button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0" style={{ color: '#586069' }}>New to Skybot? <Link to="/signup" style={{ color: '#0366d6', textDecoration: 'none', fontWeight: '500' }}>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
