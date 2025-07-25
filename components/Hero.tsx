const Hero = () => (
  <section className="relative pt-32 pb-20 text-center overflow-hidden bg-gradient-to-br from-primary/95 to-primary-light/95">
    {/* bg-gradient-to-br from-primary/95 to-primary-light/95 text-white  */}
    {/* SVG background shapes */}
    <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200"  fill="#f0f9ff" />
      {/* height="800" */}
      <circle cx="200" cy="200" r="100" fill="#e0f2fe" fillOpacity="0.3" />
      <circle cx="1000" cy="600" r="150" fill="#e0f2fe" fillOpacity="0.3" />
      <circle cx="600" cy="100" r="80" fill="#e0f2fe" fillOpacity="0.3" />
    </svg>
    <div className="relative z-10 max-w-3xl mx-auto px-4 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">Best Dentist in Agartala</h1>
      <p className="text-lg md:text-xl mb-8 opacity-90 animate-fadeInUp max-w-xl mx-auto">Experience state-of-the-art dental care at Dentique Specialist Dental clinic in Agartala. Led by Dr. Subhankar Paul BDS MDS Maxillofacial Surgeon, we provide comprehensive dental treatments with a focus on patient comfort and satisfaction.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fadeInUp">
        <a href="#contact" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow transition">Book Appointment</a>
        <a href="#services" className="border-2 border-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold text-lg transition">Our Services</a>
      </div>
    </div>
  </section>
);

export default Hero; 