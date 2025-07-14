import { useEffect, useState } from 'react';

const staticTestimonials = [
  {
    name: 'Rohit Thakur',
    quote: "The best dental care in Agartala! Dr. Paul's professionalism and expertise are unmatched. The clinic's commitment to patient well-being and satisfaction sets it apart.",
    rating: 5,
    images: [],
  },
  {
    name: 'Akash Ghosh',
    quote: 'My experience at Dentique has been exceptional. The friendly staff and best facilities make it stand out among the rest.',
    rating: 5,
    images: [],
  },
  {
    name: 'Sahil Ghosh',
    quote: 'Invisible dental braces for a perfect smile! Dr. Paul recommended a personalized treatment plan. The results are amazing, and I am grateful for the expertise and care provided.',
    rating: 5,
    images: [],
  },
  {
    name: 'Priya Das',
    quote: 'Highly recommended for anyone looking for quality dental care in Agartala. The emergency care was prompt and effective.',
    rating: 5,
    images: [],
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(staticTestimonials);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Only fetch from API if running on server/dev
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname.includes('127.0.0.1'))) {
      setLoading(true);
      fetch('/api/testimonials')
        .then(res => res.json())
        .then(data => setTestimonials(data))
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <section className="py-16 bg-gray-50" aria-label="Patient Testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">What Our Patients Say</h2>
        {loading && <div className="text-center text-accent font-semibold mb-6">Loading testimonials...</div>}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="mb-3 text-yellow-400 flex gap-1" aria-label={`Rating: ${t.rating} out of 5`}>
                {Array.from({ length: t.rating }).map((_, idx) => <span key={idx}>★</span>)}
              </div>
              <blockquote className="italic text-gray-700 mb-3">“{t.quote}”</blockquote>
              <div className="font-bold text-primary mb-2">{t.name}</div>
              {t.images && t.images.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {t.images.map((img: string, idx: number) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Testimonial image ${idx + 1}`}
                      className="w-16 h-16 object-cover rounded shadow border"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 