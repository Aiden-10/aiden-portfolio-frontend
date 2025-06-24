import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="container header-content">
            <Link to="/#" className="logo">AS</Link>
            <nav className="nav">
                
            </nav>
            <Link to="/blog" className="cta-button">Blog</Link>
        </div>
    </header>
);

export default Header;
