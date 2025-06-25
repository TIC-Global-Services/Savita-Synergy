'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import BlogsHero from '@/components/Blogs/BlogsHero';
import BlogContent from '@/components/Blogs/BlogContent';
import blogData from '@/data/BlogData';

const BlogPost = () => {
  const params = useParams<{ title: string }>();
  const decodedTitle = params?.title
    ? decodeURIComponent(params.title).replace(/ /g, '-').toLowerCase()
    : '';

  const blog = blogData.find((blog) => blog.slug === decodedTitle);

  if (!blog) {
    return <div className="text-center py-20 text-synergy-800">Blog not found</div>;
  }

  return (
    <div>
      <BlogsHero
        title={blog.title}
        smallDesc={blog.smallDesc}
        blogImage={blog.blogImage }
      />
      <BlogContent content={blog.content} />
    </div>
  );
};

export default BlogPost;