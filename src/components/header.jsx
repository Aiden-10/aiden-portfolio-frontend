import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="container header-content">
            <Link to="/#" className="logo">AS</Link>
            <nav className="nav">
                <Link to="/#about" className="nav-link">About</Link>
                <Link to="/#projects" className="nav-link">Projects</Link>
                <Link to="/#contact" className="nav-link">Contact</Link>
                <Link to="/blog" className="nav-link">Blog</Link>
            </nav>
            <a href="https://www.github.com/Aiden-10" className="cta-button" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
    </header>
);

export default Header;
