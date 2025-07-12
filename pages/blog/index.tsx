import { GetServerSideProps } from 'next';
import Link from 'next/link';
import SEO from '../../components/SEO';

interface Blog {
  id: number;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  emoji: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProps) => (
  <>
    <SEO
      title="Dental Blog | Dentique Specialist Dental Clinic, Agartala"
      description="Read the latest dental health tips, news, and updates from Dentique Specialist Dental Clinic. Expert advice from Dr. Subhankar Paul."
      keywords="dental blog, dental tips, best dentist in Agartala, oral health, teeth whitening, dental implants"
      url="https://dentique-agartala.com/blog"
    />
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-primary mb-10">Dental Blog & Health Tips</h1>
        <div className="grid gap-8">
          {blogs.map(blog => (
            <article key={blog.id} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="text-5xl md:w-32 md:text-center">{blog.emoji}</div>
              <div className="flex-1">
                <div className="text-accent font-semibold text-sm mb-1">{new Date(blog.date).toLocaleDateString()}</div>
                <h2 className="text-xl font-bold mb-2 text-primary">{blog.title}</h2>
                <p className="text-gray-700 mb-2">{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`} className="text-accent underline font-semibold">Read More &rarr;</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs`);
  const blogs = await res.json();
  return { props: { blogs } };
};

export default BlogList; 