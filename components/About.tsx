const About = () => (
  <section className="py-20 bg-white" id="about">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Dentique Specialist Dental Clinic</h2>
          <p className="mb-4 text-gray-700">Are you having dental pain or want to have your teeth whitening done? Searching for the "Best dentist in Agartala" or a "Dental clinic near me"? Then Dentique Specialist Dental Clinic is the right destination for all your dental care treatments.</p>
          <p className="mb-4 text-gray-700">We understand that routine dental checkups are something most of us don't do regularly, and we often develop dental pain from cavities that can cause moderate to severe discomfort. But don't panic - with today's advanced treatment protocols, almost all dental pain can be relieved within an hour with the right dental treatment and medication.</p>
          <p className="mb-4 text-gray-700">However, we emphasize and encourage our patients to focus on preventing such dental emergencies by visiting our conveniently located dental clinic for routine checkups. This approach helps prevent dental diseases and saves you from future emergencies.</p>
          <div className="bg-gray-50 rounded-lg p-6 mt-6 shadow">
            <h3 className="text-xl font-bold text-primary mb-1">Dr. Subhankar Paul</h3>
            <p className="font-semibold text-gray-700 mb-1">Chief Dentist & Maxillofacial Surgeon</p>
            <p className="text-gray-600 mb-2">Graduated from Chennai, Dr. Subhankar Paul brings extensive expertise in dental care and maxillofacial surgery to serve the people of Agartala.</p>
            <div className="inline-block bg-accent text-white px-4 py-2 rounded font-semibold">BDS, MDS - Maxillofacial Surgeon</div>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <svg width="320" height="320" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-2xl shadow-xl w-full max-w-xs">
            <rect width="400" height="400" fill="#f0f9ff" />
            <circle cx="200" cy="150" r="50" fill="#2c5282" />
            <rect x="150" y="200" width="100" height="120" rx="10" fill="#2c5282" />
            <rect x="120" y="250" width="40" height="80" rx="20" fill="#2c5282" />
            <rect x="240" y="250" width="40" height="80" rx="20" fill="#2c5282" />
            <text x="200" y="360" textAnchor="middle" fontSize="16" fill="#4a5568">Dr. Subhankar Paul</text>
          </svg>
        </div>
      </div>
    </div>
  </section>
);

export default About; 