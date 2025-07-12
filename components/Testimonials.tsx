const testimonials = [
  {
    name: 'Rohit Thakur',
    quote: "The best dental care in Agartala! Dr. Paul's professionalism and expertise are unmatched. The clinic's commitment to patient well-being and satisfaction sets it apart.",
    rating: 5
  },
  {
    name: 'Akash Ghosh',
    quote: 'My experience at Dentique has been exceptional. The friendly staff and best facilities make it stand out among the rest.',
    rating: 5
  },
  {
    name: 'Sahil Ghosh',
    quote: 'Invisible dental braces for a perfect smile! Dr. Paul recommended a personalized treatment plan. The results are amazing, and I am grateful for the expertise and care provided.',
    rating: 5
  },
  {
    name: 'Priya Das',
    quote: 'Highly recommended for anyone looking for quality dental care in Agartala. The emergency care was prompt and effective.',
    rating: 5
  },
];

const Testimonials = () => (
  <section className="py-16 bg-gray-50" aria-label="Patient Testimonials">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">What Our Patients Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <div className="mb-3 text-yellow-400 flex gap-1" aria-label={`Rating: ${t.rating} out of 5`}>
              {Array.from({ length: t.rating }).map((_, idx) => <span key={idx}>★</span>)}
            </div>
            <blockquote className="italic text-gray-700 mb-3">“{t.quote}”</blockquote>
            <div className="font-bold text-primary">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 