import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        id: "ravshdajkfhbidvglohe1cap",
        title: "Full-Stack Discussion Platform",
        image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Project+1",
        tags: ["Full-Stack", "React", "Auth","Firebase"],
        description: `
            <p>
                A full-featured forum platform where users can create threads, post replies, and vote on content.
                Built with React, Firebase, and realtime authentication.
            </p>
        `
    },
    {
        id: "wayt5vyn32a4r8qiyqsv74n8",
        title: "Direct3D 2D Renderer / GUI Engine",
        image: "https://placehold.co/600x400/10b981/ffffff?text=Project+2",
        tags: ["C++", "Direct3D11", "Graphics", "GUI"],
        description: `
            <p>
                A lightweight 2D rendering engine built with C++ and Direct3D. Features sprite rendering, scene management,
                input handling, and asset loading. Designed as a foundation for interactive applications.
            </p>
        `
    },
    {
        id: "waoar9zew0uxldv1k6w9yyq1",
        title: "DMA Memory Analysis Tool",
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

                           

                            <Link to={`/post/${project.id}`}>
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
