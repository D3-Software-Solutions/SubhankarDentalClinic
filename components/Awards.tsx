const awards = [
  {
    icon: '🏆',
    title: 'National Pride Healthcare Award',
    year: '2022',
    desc: 'Recognized for excellence in dental care and patient satisfaction.'
  },
  {
    icon: '🌍',
    title: 'Prime Time Global Icon Award',
    year: '2023',
    desc: 'Awarded for being a leading dental clinic in the region.'
  },
  {
    icon: '⭐',
    title: 'Top Rated Clinic',
    year: '2024',
    desc: 'Consistently rated 5 stars by patients on Google and healthcare platforms.'
  },
  {
    icon: '👨‍⚕️',
    title: 'Best Maxillofacial Surgeon',
    year: '2023',
    desc: 'Awarded to Dr. Subhankar Paul for surgical excellence.'
  },
];

const Awards = () => (
  <section className="py-12 bg-white" aria-label="Awards and Recognitions">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">Awards & Recognitions</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {awards.map((award, i) => (
          <div key={i} className="flex flex-col items-center bg-gray-50 rounded-xl shadow p-6 w-64 min-w-[220px] text-center">
            <div className="text-4xl mb-2">{award.icon}</div>
            <div className="font-bold text-lg text-primary mb-1">{award.title}</div>
            <div className="text-accent font-semibold mb-1">{award.year}</div>
            <div className="text-gray-600 text-sm">{award.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Awards; 