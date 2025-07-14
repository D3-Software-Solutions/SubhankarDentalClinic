import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Blog {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  images?: string[];
}

const BlogPreview = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(Array.isArray(data) ? data.slice(0, 3) : []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load blogs');
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14 relative inline-block after:block after:mx-auto after:mt-2 after:w-20 after:h-1 after:bg-accent after:rounded">Latest Dental Health Tips</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {loading && <div className="col-span-full text-center text-accent font-semibold">Loading blogs...</div>}
          {error && <div className="col-span-full text-center text-red-600 font-semibold">{error}</div>}
          {!loading && !error && blogs.length === 0 && (
            <div className="col-span-full text-center text-gray-600">No blog posts yet. Be the first to add one!</div>
          )}
          {blogs.map((b, i) => (
            <article key={b.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fadeInUp">
              {b.images && b.images.length > 0 && (
                <div className="flex items-center justify-center h-40 bg-gradient-to-br from-accent to-accent-dark">
                  <img src={b.images[0]} alt={b.title} className="h-40 object-cover w-full" />
                </div>
              )}
              <div className="p-8">
                <div className="text-accent font-semibold text-sm mb-2">{new Date(b.date).toLocaleDateString()}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{b.title}</h3>
                <p className="text-gray-600 mb-4">{b.excerpt}</p>
                <Link href={`/blog/${b.slug}`} className="text-accent font-semibold hover:text-accent-dark transition">Read More &rarr;</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview; 