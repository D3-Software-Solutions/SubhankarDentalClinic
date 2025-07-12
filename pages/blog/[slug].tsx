import { GetServerSideProps } from 'next';
import Link from 'next/link';
import SEO from '../../components/SEO';

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
}

interface BlogDetailProps {
  blog: Blog;
}

const BlogDetail = ({ blog }: BlogDetailProps) => (
  <>
    <SEO
      title={blog.seoTitle || blog.title}
      description={blog.seoDescription || blog.content.slice(0, 150)}
      keywords={blog.seoKeywords || 'dental blog, best dentist in Agartala, oral health'}
      url={`https://dentique-agartala.com/blog/${blog.slug}`}
    />
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{blog.emoji}</span>
          <div className="text-accent font-semibold text-sm">{new Date(blog.date).toLocaleDateString()}</div>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-6">{blog.title}</h1>
        <article className="prose prose-lg max-w-none text-gray-800 mb-8 whitespace-pre-line">{blog.content}</article>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/blog" className="text-accent underline">← Back to Blog</Link>
          <Link href="/services/teeth-whitening" className="text-accent underline">Teeth Whitening</Link>
          <Link href="/services/dental-implants" className="text-accent underline">Dental Implants</Link>
          <Link href="/services/dental-braces" className="text-accent underline">Dental Braces</Link>
        </div>
      </div>
    </section>
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blogs?slug=${encodeURIComponent(slug)}`);
  const blog = await res.json();
  if (!blog || blog.error) {
    return { notFound: true };
  }
  return { props: { blog } };
};

export default BlogDetail; 