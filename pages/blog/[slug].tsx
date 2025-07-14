import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import SEO from '../../components/SEO';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Blog {
  id: number;
  title: string;
  slug: string;
  date: string;
  content: string;
  emoji: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  images?: string[]; // Added images property
}

interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail = ({ blog }: BlogDetailProps) => (
  <>
    <Header />
    <SEO
      title={blog.seoTitle || blog.title}
      description={blog.seoDescription || blog.content.slice(0, 150)}
      keywords={blog.seoKeywords || 'dental blog, best dentist in Agartala, oral health'}
      url={`https://dentique-agartala.com/blog/${blog.slug}`}
    />
    <main className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-6">
          <Link href="/blog" className="text-accent underline font-semibold">← Back to Blog</Link>
        </div>
        {/* Images grid */}
        {blog.images && blog.images.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            {blog.images.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`Blog image ${idx + 1}`}
                className="w-48 h-48 object-cover rounded shadow border"
                loading="lazy"
              />
            ))}
          </div>
        )}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-accent font-semibold text-sm">{new Date(blog.date).toLocaleDateString()}</div>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-6">{blog.title}</h1>
        <article className="prose prose-lg max-w-none text-gray-800 mb-8 whitespace-pre-line">{blog.content}</article>
      </div>
    </main>
    <Footer />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  // Import directly from the database for static generation
  const db = (await import('../../utils/db')).default;
  const { initDb } = await import('../../utils/initDb');
  
  initDb();
  const blogs = db.prepare('SELECT slug FROM blogs').all() as { slug: string }[];
  
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));
  
  return {
    paths,
    fallback: false // Return 404 for any paths not returned by getStaticPaths
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Import directly from the database for static generation
  const db = (await import('../../utils/db')).default;
  const { initDb } = await import('../../utils/initDb');
  
  initDb();
  const { slug } = params as { slug: string };
  const blog = db.prepare('SELECT * FROM blogs WHERE slug = ?').get(slug) as Blog;
  if (!blog) {
    return { notFound: true };
  }
  const images = db.prepare('SELECT image_url FROM blog_images WHERE blog_id = ?').all(blog.id) as { image_url: string }[];
  blog.images = images.map(img => img.image_url);
  return { 
    props: { blog }
  };
};

export default BlogDetail; 