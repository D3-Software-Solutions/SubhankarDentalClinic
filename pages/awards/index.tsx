import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';

const awards = [
  {
    icon: '🏆',
    title: 'Paper Presentation Award',
    desc: 'Recognized for excellence in academic paper presentation.',
    year: '2022',
  },
  {
    icon: '🥇',
    title: 'Highest Mark Gold Medal',
    desc: 'Awarded for achieving the highest marks in the university.',
    year: '2023',
  },
];

const AwardsPage = () => (
  <>
    <Header />
    <SEO
      title="Awards & Recognitions | Dentique Specialist Dental Clinic, Agartala"
      description="Explore the awards and recognitions received by Dentique Specialist Dental Clinic and Dr. Subhankar Paul in Agartala. Discover our commitment to excellence in dental care, patient satisfaction, and academic achievement."
      keywords="dentist awards Agartala, dental clinic awards, Dr Subhankar Paul, best dentist in Agartala, dental recognitions, healthcare excellence"
      url="https://dentique-agartala.com/awards"
      canonicalUrl="https://dentique-agartala.com/awards"
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'itemListElement': awards.map((a, idx) => ({
          '@type': 'Award',
          'name': a.title,
          'description': a.desc,
          'position': idx + 1,
          'award': a.title,
          'dateReceived': a.year,
        })),
      }}
    />
    <main className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Awards & Recognitions</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col items-center bg-gray-50 rounded-xl shadow p-6 w-64 min-w-[220px] text-center">
              <div className="text-4xl mb-2">{award.icon}</div>
              <div className="font-bold text-lg text-primary mb-1">{award.title}</div>
              <div className="text-gray-600 text-sm">{award.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default AwardsPage; 