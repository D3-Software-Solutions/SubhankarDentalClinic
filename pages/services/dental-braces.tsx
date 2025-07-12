import SEO from '../../components/SEO';
import Link from 'next/link';

const DentalBraces = () => (
  <>
    <SEO
      title="Dental Braces in Agartala | Dentique Specialist Dental Clinic"
      description="Straighten your teeth with metal, ceramic, or invisible dental braces in Agartala. Expert orthodontic care by Dr. Subhankar Paul. Book your consultation today!"
      keywords="dental braces Agartala, orthodontics, invisible braces, best dentist in Agartala"
      url="https://dentique-agartala.com/services/dental-braces"
    />
    <section className="bg-gradient-to-br from-primary/90 to-primary-light/90 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Dental Braces</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Straighten your teeth and improve your smile with metal, ceramic, or invisible braces at Dentique Specialist Dental Clinic, Agartala.</p>
        <div className="flex justify-center mb-8">
          <div className="w-64 h-40 bg-gray-200 rounded-xl flex items-center justify-center text-5xl">🦷</div>
        </div>
        <Link href="/contact" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full shadow transition">Book Consultation</Link>
      </div>
    </section>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-primary">Why Choose Dental Braces?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Corrects misaligned teeth and bite issues</li>
          <li>Options: metal, ceramic, and invisible braces</li>
          <li>Improves oral health and confidence</li>
          <li>Customized treatment plans for all ages</li>
          <li>Expert orthodontic care</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-primary">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <div className="font-bold">What types of braces do you offer?</div>
            <div className="text-gray-700">We offer metal, ceramic, and invisible (clear aligner) braces to suit your needs and preferences.</div>
          </div>
          <div>
            <div className="font-bold">How long does treatment take?</div>
            <div className="text-gray-700">Treatment duration varies, but most cases take 12-24 months. We'll provide a personalized plan at your consultation.</div>
          </div>
          <div>
            <div className="font-bold">Are braces painful?</div>
            <div className="text-gray-700">Some discomfort is normal at first, but it subsides quickly. Modern braces are more comfortable than ever.</div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/services/teeth-whitening" className="text-accent underline">Teeth Whitening</Link>
          <Link href="/services/dental-implants" className="text-accent underline">Dental Implants</Link>
          <Link href="/services/routine-checkup" className="text-accent underline">Routine Checkup</Link>
          <Link href="/contact" className="text-accent underline">Contact Us</Link>
        </div>
      </div>
    </section>
  </>
);

export default DentalBraces; 