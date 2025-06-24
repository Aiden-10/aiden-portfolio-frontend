import React from 'react';

const Contact = () => (
    <section id="contact" className="section contact-section">
        <div className="container">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-text">
                Feel free to reach out for opportunities, collaborations, or questions.
            </p>
            <a href="mailto:aiden.slabiak@gmail.com" className="contact-button">
                aiden.slabiak@gmail.com
            </a>

            <div className="social-buttons-container">
                <a
                    href="https://www.linkedin.com/in/aiden-slabiak-115831296" 
                    className="social-circle-button linkedin"
                    aria-label="LinkedIn Profile"
                >
                    <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" 
                        alt="LinkedIn"
                        className="social-logo-icon"
                    />
                </a>
                <a
                    href="https://www.instagram.com/aiden.slabiak" 
                    className="social-circle-button instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                >
                    <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" // Direct URL for Instagram logo
                        alt="Instagram"
                        className="social-logo-icon"
                    />
                </a>
                <a
                    href="https://github.com/Aiden-10"
                    className="social-circle-button github"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                >
                    <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" 
                        alt="GitHub"
                        className="social-logo-icon"
                    />
                </a>
            </div>

        </div>
    </section>
);

export default Contact;