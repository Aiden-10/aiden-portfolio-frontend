import React from 'react';

const About = () => (
    <section id="about" className="section">
        <div className="container about-grid">
            <div className="about-image-wrapper">
                <img src="https://placehold.co/600x600/1f2937/d1d5db?text=AS" alt="Aiden Portrait" className="about-image" />
            </div>
            <div className="about-content">
                <h2 className="about-title">About Me</h2>
                <p className="about-text">
                    Hey! I'm Aiden, a Computer Science student at The University of Alabama. I'm deeply interested in low-level systems programming, reverse engineering, and embedded systems. 
                    I enjoy building tools like memory scanners, UEFI/driver interfaces, and voice-controlled automation using kernel-level components.
                </p>
                <div className="skills-container">
                    <span className="skill-tag">C/C++</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Reverse Engineering</span>
                    <span className="skill-tag">Windows Internals</span>
                    <span className="skill-tag">Embedded Systems</span>
                </div>
            </div>
        </div>
    </section>
);

export default About;
