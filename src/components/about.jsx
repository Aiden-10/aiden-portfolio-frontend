import React from 'react';

const About = () => (
    <section id="about" className="section">
        <div className="container about-grid">
            <div className="about-image-wrapper">
                <img src="/images/boy.png" alt="Aiden Portrait" className="about-image" />
            </div>
            <div className="about-content">
                <h2 className="about-title">About Me</h2>
                <p className="about-text">
                    Hi, I'm Aiden, a Computer Science student at The University of Alabama
                    with a focus on low-level systems and reverse engineering. I'm passionate
                    about creating software, particularly within the Windows ecosystem. 
                </p>
                <div className="skills-container">
                    <span className="skill-tag">C/C++</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Game Hacking</span>
                    <span className="skill-tag">Reverse Engineering</span>
                    <span className="skill-tag">Windows Internals</span>
                </div>
            </div>
        </div>
    </section>
);

export default About;
