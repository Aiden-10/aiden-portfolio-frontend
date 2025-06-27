import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        title: "Forum Site",
        image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Project+1",
        tags: ["Full-Stack", "Next.js", "Auth","MongoDB"],
        description: `
            <p>
                A full-featured forum platform where users can create threads, post replies, and vote on content.
                Built with Next.js, MongoDB, and JWT-based authentication. Designed with responsive UI using Tailwind CSS.
            </p>
        `
    },
    {
        title: "C++ Graphical Engine",
        image: "https://placehold.co/600x400/10b981/ffffff?text=Project+2",
        tags: ["C++", "Direct3D", "Game Dev", "Graphics"],
        description: `
            <p>
                A lightweight 2D and 3D rendering engine built with C++ and Direct3D. Features sprite rendering, scene management,
                input handling, and asset loading. Designed as a foundation for real-time games and interactive applications.
            </p>
        `
    },
    {
        title: "Memory Scanner",
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Project+3",
        tags: ["C++", "Windows API", "Systems Programming"],
        description: `
            <p>
                A Windows-based memory viewer and scanner developed in C++. Lists running processes and scans memory for
                specific values. Includes functionality to read, freeze, or modify memory addresses in real time.
            </p>
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
