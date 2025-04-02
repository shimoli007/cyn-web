import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/blog/HeroSection';
import FeaturedPosts from '../components/sections/blog/FeaturedPosts';
import CategoryFilter from '../components/sections/blog/CategoryFilter';
import PostGrid from '../components/sections/blog/PostGrid';
import Newsletter from '../components/sections/blog/Newsletter';
import { blogPosts } from '../data/blog';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayPosts, setDisplayPosts] = useState([]);
  const [postsToShow, setPostsToShow] = useState(6);

  // Filter posts based on category and search query
  useEffect(() => {
    let filtered = [...blogPosts];
    
    // Filter by category if not 'all'
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    // Filter by search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query)
      );
    }
    
    setDisplayPosts(filtered);
  }, [activeCategory, searchQuery]);

  // Function to load more posts
  const loadMore = () => {
    setPostsToShow(prev => prev + 3);
  };

  // Get posts to display with pagination
  const paginatedPosts = displayPosts.slice(0, postsToShow);

  // Get featured posts for the FeaturedPosts component
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <Layout title="Blog - Cynea">
      <HeroSection setSearchQuery={setSearchQuery} />
      <FeaturedPosts posts={featuredPosts} />
      
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <CategoryFilter 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          
          <PostGrid 
            posts={paginatedPosts} 
            activeCategory={activeCategory}
            loadMore={loadMore}
          />
        </div>
      </section>
      
      <Newsletter />
    </Layout>
  );
}