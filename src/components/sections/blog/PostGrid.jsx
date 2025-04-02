import React from 'react';
import BlogCard from '../../ui/BlogCard';
import Button from '../../ui/Button';

const PostGrid = ({ posts, activeCategory, loadMore }) => {
  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            category={post.category}
            date={post.date}
            author={post.author}
            image={post.image}
          />
        ))}
      </div>
      
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No articles found in this category.</p>
          <Button 
            variant="secondary"
            className="mt-4"
            onClick={() => setActiveCategory('all')}
          >
            Show all articles
          </Button>
        </div>
      )}
      
      {filteredPosts.length > 0 && (
        <div className="mt-12 text-center">
          <Button variant="secondary" onClick={loadMore}>
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostGrid;