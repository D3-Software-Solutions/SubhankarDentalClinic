const blogs = [
  {
    icon: '🦷',
    date: 'March 10, 2024',
    title: 'Emergency Dental Care: What You Need to Know',
    excerpt: 'Understanding when to seek emergency dental care and how modern treatment protocols can provide quick relief from dental pain.',
    link: '#',
  },
  {
    icon: '✨',
    date: 'March 5, 2024',
    title: 'Professional Teeth Whitening vs Home Remedies',
    excerpt: `Discover the benefits of professional teeth whitening treatments and why they're more effective than home remedies.`,
    link: '#',
  },
  {
    icon: '🏥',
    date: 'February 28, 2024',
    title: 'Maxillofacial Surgery: When Is It Needed?',
    excerpt: 'Learn about maxillofacial surgery procedures and when they might be necessary for your dental health.',
    link: '#',
  },
];

const BlogPreview = () => (
  <section className="py-20 bg-white" id="blog">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14 relative inline-block after:block after:mx-auto after:mt-2 after:w-20 after:h-1 after:bg-accent after:rounded">Latest Dental Health Tips</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {blogs.map((b, i) => (
          <article key={b.title} className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fadeInUp">
            <div className="flex items-center justify-center h-40 bg-gradient-to-br from-accent to-accent-dark text-4xl text-white">{b.icon}</div>
            <div className="p-8">
              <div className="text-accent font-semibold text-sm mb-2">{b.date}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{b.title}</h3>
              <p className="text-gray-600 mb-4">{b.excerpt}</p>
              <a href={b.link} className="text-accent font-semibold hover:text-accent-dark transition">Read More &rarr;</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview; 