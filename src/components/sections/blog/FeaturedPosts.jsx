import React from 'react';
import BlogCard from '../../ui/BlogCard';

const FeaturedPosts = ({ posts }) => {
  // Get featured posts
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Articles</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              author={post.author}
              image={post.image}
              featured={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;