import React from 'react';

// The toolbar receives several props from its parent (the Blog page):
// - searchTerm: The current value of the search input.
// - onSearchChange: A function to call when the search input changes.
// - categories: An array of all available categories for the dropdown.
// - selectedCategory: The currently selected category.
// - onCategoryChange: A function to call when the dropdown selection changes.


const BlogToolbar = ({ searchTerm, onSearchChange, categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className="blog-toolbar">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search posts..."
                    className="search-input"
                    value={searchTerm}
                    onChange={onSearchChange}
                />
            </div>
            <div className="filter-container">
                <select 
                    className="category-select"
                    value={selectedCategory}
                    onChange={onCategoryChange}
                >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default BlogToolbar;
