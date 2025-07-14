import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ImplantDentistryPage = () => (
  <>
    <Header />
    <main className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Implant Dentistry</h1>
        <div className="bg-gray-50 rounded-xl shadow p-8 text-gray-700">
          <p className="mb-4">Dental implants are the gold standard for replacing missing teeth. Our clinic offers advanced implant solutions for a natural look and feel.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Permanent, stable tooth replacement</li>
            <li>Restores chewing and speaking ability</li>
            <li>Preserves jawbone and facial structure</li>
          </ul>
          <p>Book a consultation to find out if dental implants are right for you and restore your confident smile.</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ImplantDentistryPage; 