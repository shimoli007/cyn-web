import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BlogCard from '../../ui/BlogCard';
import { blogPosts } from '../../../data/blog';

const Blog = () => {
  // Get the latest 3 blog posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Latest Insights</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">Stay updated with the latest trends and insights in enterprise technology.</p>
          </div>
          <Link href="/blog" className="text-orange-500 hover:text-red-500 transition-colors flex items-center">
            View all articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
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
      </div>
    </section>
  );
};

export default Blog;