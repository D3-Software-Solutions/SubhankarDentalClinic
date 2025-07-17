import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

interface Testimonial {
  id: number;
  name: string;
  testimonial: string;
  createdAt: string;
  images?: string[];
}

interface TestimonialsPageProps {
  testimonials: Testimonial[];
}

const TestimonialsPage = ({ testimonials: staticTestimonials }: TestimonialsPageProps) => {
  const [testimonials, setTestimonials] = useState(staticTestimonials);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If not static, try to fetch dynamically (for dev/server)
  useEffect(() => {
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname.includes('127.0.0.1'))) {
      setLoading(true);
      fetch('/api/testimonials')
        .then(res => res.json())
        .then(data => setTestimonials(data))
        .catch(() => setError('Failed to load testimonials'))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      <Header />
      <SEO
        title="Patient Testimonials | Dentique Specialist Dental Clinic, Agartala"
        description="Read real patient testimonials and reviews for Dentique Specialist Dental Clinic in Agartala. Discover why patients trust Dr. Subhankar Paul for expert dental care, comfort, and outstanding results."
        keywords="dentist reviews Agartala, dental testimonials, best dentist in Agartala, patient experiences, Dr Subhankar Paul, dental clinic feedback"
        url="https://dentique-agartala.com/testimonials"
        canonicalUrl="https://dentique-agartala.com/testimonials"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'itemListElement': testimonials.map((t, idx) => ({
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': t.name },
            'reviewBody': t.testimonial,
            'datePublished': t.createdAt,
            ...(t.images && t.images.length > 0 ? { 'image': t.images[0] } : {}),
            'position': idx + 1,
          })),
        }}
      />
      <main className="pt-24 pb-16 min-h-screen bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-primary mb-8 text-center">Patient Testimonials</h1>
          <div className="mb-8 text-center">
            <a href="/testimonials/add" className="inline-block bg-accent text-white px-6 py-2 rounded-full font-bold shadow hover:bg-accent-dark transition">Add Your Testimonial</a>
          </div>
          {loading && <div className="text-center text-accent font-semibold">Loading testimonials...</div>}
          {error && <div className="text-center text-red-600 font-semibold">{error}</div>}
          <div className="grid gap-8">
            {testimonials.length === 0 && !loading && (
              <div className="bg-gray-50 rounded-xl shadow p-8 text-center text-gray-600">No testimonials yet. Be the first to add one!</div>
            )}
            {testimonials.map((t) => (
              <article key={t.id} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="font-bold text-primary text-lg">{t.name}</div>
                  <div className="text-xs text-gray-400">{new Date(t.createdAt).toLocaleDateString()}</div>
                </div>
                <div className="text-gray-700 mb-2 whitespace-pre-line">{t.testimonial}</div>
                {t.images && t.images.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-2 justify-center">
                    {t.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Testimonial image ${idx + 1}`}
                        className="w-28 h-28 object-cover rounded shadow border"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

// Static export: fetch testimonials at build time
export async function getStaticProps() {
  // Import directly from the database for static generation
  const db = (await import('../../utils/db')).default;
  const { initDb } = await import('../../utils/initDb');
  initDb();
  const testimonials = db.prepare('SELECT * FROM testimonials ORDER BY createdAt DESC').all() as Testimonial[];
  for (const t of testimonials) {
    const images = db.prepare('SELECT image_url FROM testimonial_images WHERE testimonial_id = ?').all(t.id) as { image_url: string }[];
    t.images = images.map(img => img.image_url);
  }
  return {
    props: { testimonials },
  };
}

export default TestimonialsPage; 