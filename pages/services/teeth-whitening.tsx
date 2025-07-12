import SEO from '../../components/SEO';
import Link from 'next/link';

const TeethWhitening = () => (
  <>
    <SEO
      title="Teeth Whitening in Agartala | Dentique Specialist Dental Clinic"
      description="Professional teeth whitening in Agartala by Dr. Subhankar Paul. Safe, effective, and long-lasting results. Book your appointment today!"
      keywords="teeth whitening Agartala, best dentist in Agartala, dental clinic, cosmetic dentistry"
      url="https://dentique-agartala.com/services/teeth-whitening"
    />
    <section className="bg-gradient-to-br from-primary/90 to-primary-light/90 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Professional Teeth Whitening</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Brighten your smile with safe, effective, and long-lasting teeth whitening at Dentique Specialist Dental Clinic, Agartala.</p>
        <div className="flex justify-center mb-8">
          <div className="w-64 h-40 bg-gray-200 rounded-xl flex items-center justify-center text-5xl">🦷</div>
        </div>
        <Link href="/contact" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full shadow transition">Book Appointment</Link>
      </div>
    </section>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-primary">Why Choose Professional Whitening?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Safe and supervised by dental professionals</li>
          <li>More effective and longer-lasting than home remedies</li>
          <li>Removes deep stains and discoloration</li>
          <li>Boosts confidence with a brighter smile</li>
          <li>Minimal sensitivity and quick results</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-primary">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <div className="font-bold">Is teeth whitening safe?</div>
            <div className="text-gray-700">Yes, when performed by a dental professional, it is safe and effective with minimal side effects.</div>
          </div>
          <div>
            <div className="font-bold">How long do results last?</div>
            <div className="text-gray-700">Results can last 1-3 years with proper care and regular dental checkups.</div>
          </div>
          <div>
            <div className="font-bold">Can I whiten my teeth at home?</div>
            <div className="text-gray-700">Home kits are less effective and may cause sensitivity. Professional whitening is recommended for best results.</div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/services/dental-implants" className="text-accent underline">Dental Implants</Link>
          <Link href="/services/dental-braces" className="text-accent underline">Dental Braces</Link>
          <Link href="/services/routine-checkup" className="text-accent underline">Routine Checkup</Link>
          <Link href="/contact" className="text-accent underline">Contact Us</Link>
        </div>
      </div>
    </section>
  </>
);

export default TeethWhitening; 