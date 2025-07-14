import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RootCanalTreatmentPage = () => (
  <>
    <Header />
    <main className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Root Canal Treatment</h1>
        <div className="bg-gray-50 rounded-xl shadow p-8 text-gray-700">
          <p className="mb-4">Root canal treatment is a procedure to save a tooth that is badly decayed or infected. Our clinic uses advanced techniques to ensure a comfortable and successful treatment experience.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Painless and precise procedure</li>
            <li>Preserves your natural tooth</li>
            <li>Quick recovery and long-lasting results</li>
          </ul>
          <p>Contact us to book your consultation and learn more about how root canal therapy can help you keep your smile healthy.</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default RootCanalTreatmentPage; 