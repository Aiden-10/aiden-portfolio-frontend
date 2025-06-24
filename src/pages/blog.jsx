import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';
import Toolbar from '../components/toolbar'
import './Blog.css';

// --- New Pagination Component ---
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Don't render pagination if there's only one page
    if (totalPages <= 3) {
        return null;
    }

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination-nav">
            <ul className="pagination-list">
                {pageNumbers.map(number => (
                    <li key={number} className={`pagination-item ${currentPage === number ? 'active' : ''}`}>
                        <button onClick={() => onPageChange(number)} className="pagination-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    // --- State for Pagination ---
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5); // You can change this number

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:1337/api/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok. Is your Strapi server running?');
                }
                const data = await response.json();
                setPosts(data.data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page on new search
    };
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1); // Reset to first page on new filter
    };

    const filteredPosts = posts.filter(post => {
        const title = post.title || '';
        const excerpt = post.excerpt || '';
        const tags = post.tags || [];
        const matchesCategory = selectedCategory ? tags.includes(selectedCategory) : true;
        const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const allCategories = [...new Set(posts.flatMap(post => post.tags || []))];

    // --- Pagination Calculation ---
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) { /* ... loading JSX ... */ }
    if (error) { /* ... error JSX ... */ }

    return (
        <div className="blog-page-wrapper">
            <Header />
            <main className="container">
                <section className="blog-section">
                    
                    <Toolbar
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}
                        categories={allCategories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />
                    
                    <div className="posts-container">
                        {currentPosts.length > 0 ? (
                            currentPosts.map(post => (
                                <div key={post.id} className="post-card">
                                    <div className="post-meta">
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                        <div className="post-tags">
                                            {(post.tags || []).map(tag => <span key={tag} className="post-tag">{tag}</span>)}
                                        </div>
                                    </div>
                                    <h2 className="post-title">{post.title}</h2>
                                    <p className="post-excerpt">{post.excerpt}</p>
                                    <Link to={`/post/${post.documentId}`} className="post-read-more">
                                        Read Article &rarr;
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="no-posts-message">No posts found matching your criteria.</p>
                        )}
                    </div>

                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />

                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;