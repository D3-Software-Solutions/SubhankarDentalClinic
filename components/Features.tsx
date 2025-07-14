const features = [
  {
    icon: '🦷',
    title: 'Expert Care',
    desc: 'Led by Dr. Subhankar Paul BDS MDS Maxillofacial Surgeon from Chennai, ensuring the highest quality dental treatments with years of expertise focusing on providing standardized Dental Treatment in Agartala.',
  },
  {
    icon: '⚡',
    title: 'Emergency Relief',
    desc: `Don't panic with dental pain! Our advanced treatment protocols can relieve almost all dental pain within an hour with right treatment and medication.`,
  },
  {
    icon: '🏆',
    title: 'Highly Rated',
    desc: 'Multiple times rated as among the best dental doctors in Agartala on Google reviews and similar platforms by our satisfied patients.',
  },
  {
    icon: '👥',
    title: 'Friendly Staff',
    desc: 'Our educated and friendly staff members ensure a comfortable and welcoming environment for all patients during their dental treatment journey.',
  },
  {
    icon: '🛡️',
    title: 'Preventive Care',
    desc: 'We emphasize routine dental checkups to prevent dental diseases and emergencies, saving you from future dental complications.',
  },
  {
    icon: '📍',
    title: 'Convenient Location',
    desc: `Strategically located in Agartala for easy access. No more searching for "dental clinic near me" - we're right here for you!`,
  },
];

const Features = () => (
  <section className="py-20 bg-white" id="features">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14 relative inline-block after:block after:mx-auto after:mt-2 after:w-20 after:h-1 after:bg-accent after:rounded"></h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {features.map((f, i) => (
          <div key={f.title} className="bg-white rounded-2xl text-center p-10 border border-gray-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 animate-fadeInUp">
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-dark text-3xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{f.title}</h3>
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features; 