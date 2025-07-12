const services = [
  {
    icon: '🦷',
    title: 'General Dentistry',
    desc: 'Comprehensive dental care including routine checkups, cleanings, and preventive treatments to maintain optimal oral health.',
  },
  {
    icon: '✨',
    title: 'Teeth Whitening',
    desc: 'Professional teeth whitening treatments to brighten your smile and boost your confidence with safe and effective procedures.',
  },
  {
    icon: '🚑',
    title: 'Emergency Dental Care',
    desc: 'Immediate relief for dental pain and emergencies. Our advanced protocols can provide relief within an hour of treatment.',
  },
  {
    icon: '🔧',
    title: 'Maxillofacial Surgery',
    desc: 'Specialized surgical procedures for complex dental and facial conditions, performed by our expert maxillofacial surgeon.',
  },
  {
    icon: '🔍',
    title: 'Routine Checkups',
    desc: 'Regular dental examinations to detect and prevent dental diseases before they become serious problems.',
  },
  {
    icon: '🦷',
    title: 'Restorative Dentistry',
    desc: 'Comprehensive restoration services including fillings, crowns, and bridges to restore function and aesthetics.',
  },
];

const Services = () => (
  <section className="py-20 bg-gray-50" id="services">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14 relative inline-block after:block after:mx-auto after:mt-2 after:w-20 after:h-1 after:bg-accent after:rounded">Our Dental Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {services.map((s, i) => (
          <div key={s.title} className="bg-white rounded-xl p-8 border-l-4 border-accent shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fadeInUp">
            <div className="text-3xl mb-4">{s.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{s.title}</h3>
            <p className="text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services; 