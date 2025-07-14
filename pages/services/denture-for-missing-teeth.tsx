import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DentureForMissingTeethPage = () => (
  <>
    <Header />
    <main className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Denture for Missing Teeth</h1>
        <div className="bg-gray-50 rounded-xl shadow p-8 text-gray-700">
          <p className="mb-4">Dentures are a reliable and affordable solution for replacing multiple missing teeth. We offer custom-fit dentures for comfort and function.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Partial and complete dentures available</li>
            <li>Natural appearance and comfortable fit</li>
            <li>Improves chewing, speaking, and facial aesthetics</li>
          </ul>
          <p>Contact us to discuss your options for restoring your smile with high-quality dentures.</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default DentureForMissingTeethPage; 