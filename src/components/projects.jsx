import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        title: "E-Commerce Platform Redesign",
        image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Project+1",
        tags: ["UI/UX Design", "Branding", "Webflow"],
        description: `
            <p>This project involved a complete redesign of an existing e-commerce platform to improve user experience and increase conversion rates. The primary goal was to create a modern, intuitive interface that simplified the shopping process.</p>
            <h4 class="modal-subtitle">The Challenge</h4>
            <p>The old platform was outdated, difficult to navigate, and not mobile-friendly. User feedback indicated high cart abandonment rates due to a confusing checkout process.</p>
            <h4 class="modal-subtitle">The Solution</h4>
            <p>I started with user research and created detailed personas and user journey maps. This led to a new information architecture and wireframes. The final design features a clean, minimalist aesthetic with a strong focus on product imagery and a streamlined, three-step checkout process. The site was developed in Webflow to allow the client to easily manage content.</p>
        `
    },
    {
        title: "Mobile Banking App",
        image: "https://placehold.co/600x400/10b981/ffffff?text=Project+2",
        tags: ["Mobile App", "React Native", "Fintech"],
        description: `
            <p>Developed a secure and user-friendly mobile banking application for a new fintech startup. The app allows users to manage their accounts, transfer funds, and pay bills on the go.</p>
            <h4 class="modal-subtitle">The Challenge</h4>
            <p>The main challenge was to ensure top-level security while maintaining a simple and intuitive user experience. The app needed to handle sensitive financial data and comply with industry regulations.</p>
            <h4 class="modal-subtitle">The Solution</h4>
            <p>We used React Native for cross-platform compatibility. For security, we implemented multi-factor authentication, biometric login, and end-to-end encryption. The UI was designed to be clean and accessible, with a clear dashboard that provides an at-a-glance overview of the user's finances. Extensive testing was conducted to ensure the app was both secure and bug-free.</p>
        `
    },
    {
        title: "Data Visualization Dashboard",
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Project+3",
        tags: ["Data Viz", "D3.js", "SaaS"],
        description: `
            <p>Created a powerful data visualization dashboard for a SaaS company to help their clients understand complex datasets through interactive charts and graphs.</p>
            <h4 class="modal-subtitle">The Challenge</h4>
            <p>The client's customers were struggling to make sense of the raw data provided by their service. They needed a tool that could transform this data into actionable insights.</p>
            <h4 class="modal-subtitle">The Solution</h4>
            <p>Using D3.js and React, I built a modular dashboard where users can create custom reports. It features various chart types (bar, line, pie, geo-maps) that are fully interactive. Users can filter data by date range, demographics, and other custom parameters. The end product empowered users to discover trends and make data-driven decisions effectively.</p>
        `
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <div className="project-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <div className="project-tags">
                                    {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
                                </div>
                            </div>

                            <Link to="/post/c4ep84lexrgsmr3ajsrzccuh" >
                                <div className="project-overlay">
                                    <span className="overlay-text">Read More...</span>
                                </div>
                            </Link>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
