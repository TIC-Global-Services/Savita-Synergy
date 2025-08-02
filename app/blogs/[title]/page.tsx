import { notFound } from 'next/navigation';
import BlogsHero from '@/components/Blogs/BlogsHero';
import BlogContent from '@/components/Blogs/BlogContent';
import blogData from '@/data/BlogData';

// Generate static parameters for all blog posts
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    title: blog.slug, // Use slug as the dynamic parameter
  }));
}

type Params = Promise<{ title: string }>;

export default async function BlogPost({ params }: { params: Params }) {
  const { title } = await params;

  const decodedTitle = title
    ? decodeURIComponent(title).replace(/ /g, '-').toLowerCase()
    : '';

  const blog = blogData.find((blog) => blog.slug === decodedTitle);

  if (!blog) {
    notFound(); // Use Next.js notFound() for 404 handling
  }

  return (
    <div>
      <BlogsHero
        title={blog.title}
        smallDesc={blog.smallDesc}
        blogImage={blog.blogImage}
      />
      <BlogContent content={blog.content} />
    </div>
  );
}