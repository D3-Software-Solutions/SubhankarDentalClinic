import SEO from '../../components/SEO';
import Link from 'next/link';

const RoutineCheckup = () => (
  <>
    <SEO
      title="Routine Dental Checkup in Agartala | Dentique Specialist Dental Clinic"
      description="Prevent dental problems with regular checkups at Dentique, Agartala. Early detection, professional cleaning, and personalized care. Book your appointment today!"
      keywords="dental checkup Agartala, preventive dentistry, best dentist in Agartala, oral health"
      url="https://dentique-agartala.com/services/routine-checkup"
    />
    <section className="bg-gradient-to-br from-primary/90 to-primary-light/90 text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Routine Dental Checkup</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Prevent dental problems and maintain a healthy smile with regular checkups at Dentique Specialist Dental Clinic, Agartala.</p>
        <div className="flex justify-center mb-8">
          <div className="w-64 h-40 bg-gray-200 rounded-xl flex items-center justify-center text-5xl">🦷</div>
        </div>
        <Link href="/contact" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full shadow transition">Book Appointment</Link>
      </div>
    </section>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4 text-primary">Why Get Regular Dental Checkups?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Early detection of dental issues</li>
          <li>Professional cleaning removes plaque and tartar</li>
          <li>Prevents cavities, gum disease, and tooth loss</li>
          <li>Personalized oral health advice</li>
          <li>Peace of mind and long-term savings</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-primary">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <div className="font-bold">How often should I get a dental checkup?</div>
            <div className="text-gray-700">We recommend every 6 months, or as advised by your dentist based on your oral health needs.</div>
          </div>
          <div>
            <div className="font-bold">What happens during a checkup?</div>
            <div className="text-gray-700">A checkup includes a thorough exam, professional cleaning, and personalized advice for your oral health.</div>
          </div>
          <div>
            <div className="font-bold">Is a checkup painful?</div>
            <div className="text-gray-700">No, checkups are gentle and comfortable. Our team ensures a pain-free experience.</div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/services/teeth-whitening" className="text-accent underline">Teeth Whitening</Link>
          <Link href="/services/dental-implants" className="text-accent underline">Dental Implants</Link>
          <Link href="/services/dental-braces" className="text-accent underline">Dental Braces</Link>
          <Link href="/contact" className="text-accent underline">Contact Us</Link>
        </div>
      </div>
    </section>
  </>
);

export default RoutineCheckup; 