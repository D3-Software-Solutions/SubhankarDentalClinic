import SEO from '../../components/SEO';
import Link from 'next/link';

const DentalImplants = () => (
  <>
    <SEO
      title="Dental Implants in Agartala | Dentique Specialist Dental Clinic"
      description="Restore your smile with advanced dental implants in Agartala by Dr. Subhankar Paul. Permanent, natural-looking tooth replacement. Book your consultation today!"
      keywords="dental implants Agartala, best dentist in Agartala, tooth replacement, implant dentistry"
      url="https://dentique-agartala.com/services/dental-implants"
    />
    <section className="bg-gradient-to-br from-primary/90 to-primary-light/90 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Dental Implants</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Permanent, natural-looking tooth replacement with advanced dental implants at Dentique Specialist Dental Clinic, Agartala.</p>
        <div className="flex justify-center mb-8">
          <div className="w-64 h-40 bg-gray-200 rounded-xl flex items-center justify-center text-5xl">🦷</div>
        </div>
        <Link href="/contact" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full shadow transition">Book Consultation</Link>
      </div>
    </section>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-primary">Why Choose Dental Implants?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Permanent solution for missing teeth</li>
          <li>Looks, feels, and functions like natural teeth</li>
          <li>Prevents bone loss and preserves facial structure</li>
          <li>Improves chewing and speech</li>
          <li>Long-lasting and durable</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-primary">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <div className="font-bold">Are dental implants safe?</div>
            <div className="text-gray-700">Yes, dental implants are a safe and proven solution for tooth replacement when performed by an experienced dentist.</div>
          </div>
          <div>
            <div className="font-bold">How long do dental implants last?</div>
            <div className="text-gray-700">With proper care, dental implants can last a lifetime.</div>
          </div>
          <div>
            <div className="font-bold">Is the procedure painful?</div>
            <div className="text-gray-700">The procedure is performed under local anesthesia and is generally well-tolerated. Most patients report minimal discomfort.</div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/services/teeth-whitening" className="text-accent underline">Teeth Whitening</Link>
          <Link href="/services/dental-braces" className="text-accent underline">Dental Braces</Link>
          <Link href="/services/routine-checkup" className="text-accent underline">Routine Checkup</Link>
          <Link href="/contact" className="text-accent underline">Contact Us</Link>
        </div>
      </div>
    </section>
  </>
);

export default DentalImplants; 