import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ReactMarkdown from 'react-markdown'; 
import remarkGfm from 'remark-gfm'
import Header from '../components/header';
import Footer from '../components/footer';
import './PostDetail.css'; 

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

const PostDetail = () => {
    // The 'useParams' hook gets the 'id' from the URL (e.g., /post/:id)
    const { id } = useParams(); 
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                // Fetch a single post by its ID
                const response = await fetch(`https://aiden-portfolio-backend.onrender.com/api/posts/${id}`);
                if (!response.ok) {
                    throw new Error('Post not found. Contact us if the issue persists.');
                }
                const data = await response.json();
                setPost(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="page-wrapper">
                <Header />
                <main className="container"><p className="status-message">Loading post...</p></main>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-wrapper">
                <Header />
                <main className="container"><p className="status-message error">{error}</p></main>
                <Footer />
            </div>
        );
    }
    
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="page-wrapper">
            <Header />
            <main className="container">
                <article className="post-article">
                    <h1 className="post-detail-title">{post.title}</h1>
                    <p className="post-detail-date">Published on {new Date(post.date).toLocaleDateString()}</p>
                    <div className="post-detail-content">
                       
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code({inline, className, children, ...props}) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={coldarkDark}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                }
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default PostDetail;
