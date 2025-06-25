import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => (
    <footer className="footer">
        <div className="container">
            <p>&copy; 2025 Aiden's Portfolio | <Link to="/attributions">Credits</Link></p>
        </div>
    </footer>
);

export default Footer;
