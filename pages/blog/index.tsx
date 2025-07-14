import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import SEO from '../../components/SEO';

interface Blog {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  images?: string[];
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProps) => (
  <>
    <Header />
    <SEO
      title="Dental Blog | Dentique Specialist Dental Clinic, Agartala"
      description="Read the latest dental health tips, news, and updates from Dentique Specialist Dental Clinic. Expert advice from Dr. Subhankar Paul."
      keywords="dental blog, dental tips, best dentist in Agartala, oral health, teeth whitening, dental implants"
      url="https://dentique-agartala.com/blog"
    />
    <main className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Dental Blog & Health Tips</h1>
        <div className="mb-8 text-center">
          <Link href="/blog/add" className="inline-block bg-accent text-white px-6 py-2 rounded-full font-bold shadow hover:bg-accent-dark transition">Add Blog Post</Link>
        </div>
        <div className="grid gap-8">
          {blogs.length === 0 && (
            <div className="bg-gray-50 rounded-xl shadow p-8 text-center text-gray-600">No blog posts yet. Be the first to add one!</div>
          )}
          {blogs.map(blog => (
            <article key={blog.id} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="font-bold text-primary text-lg">{blog.title}</div>
                <div className="text-xs text-gray-400">{new Date(blog.date).toLocaleDateString()}</div>
              </div>
              <div className="text-gray-700 mb-2 whitespace-pre-line">{blog.excerpt}</div>
              {blog.images && blog.images.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-2 justify-center">
                  {blog.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Blog image ${idx + 1}`}
                      className="w-28 h-28 object-cover rounded shadow border"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
              <div className="mt-2">
                <Link href={`/blog/${blog.slug}`} className="text-accent underline font-semibold">Read More &rarr;</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export async function getStaticProps() {
  // Import directly from the database for static generation
  const db = (await import('../../utils/db')).default;
  const { initDb } = await import('../../utils/initDb');
  initDb();
  const blogs = db.prepare('SELECT * FROM blogs ORDER BY date DESC').all() as Blog[];
  for (const blog of blogs) {
    const images = db.prepare('SELECT image_url FROM blog_images WHERE blog_id = ?').all(blog.id) as { image_url: string }[];
    blog.images = images.map(img => img.image_url);
  }
  return {
    props: { blogs },
  };
}

export default BlogList; 