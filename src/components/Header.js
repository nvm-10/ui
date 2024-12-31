import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h4 mb-0">SKY-BOT</h1>
                <nav>
                    <Link to="/login" className="text-white me-4 text-decoration-none">Login</Link>
                    <Link to="/signup" className="text-white text-decoration-none">Sign Up</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;