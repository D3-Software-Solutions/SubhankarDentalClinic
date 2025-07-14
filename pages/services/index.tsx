import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import SEO from '../../components/SEO';

const services = [
  {
    name: 'General Dentistry',
    href: null,
    desc: 'Our general dentistry services cover routine checkups, cleanings, fillings, and preventive care for the whole family. We focus on early detection and prevention of dental issues, ensuring your teeth and gums stay healthy for life. Our gentle approach and modern technology make every visit comfortable and stress-free.'
  },
  {
    name: 'Teeth Whitening',
    href: '/services/teeth-whitening',
    desc: 'Brighten your smile with our professional teeth whitening treatments. We use safe, effective, and long-lasting methods to remove stains and discoloration, giving you a radiant smile. Our dental team customizes each treatment for optimal results with minimal sensitivity.'
  },
  {
    name: 'Emergency Dental Care',
    href: null,
    desc: 'Dental emergencies can happen anytime. We offer immediate relief for dental pain, broken teeth, infections, and other urgent issues. Our clinic is equipped to handle emergencies quickly and compassionately, providing pain relief and expert care when you need it most.'
  },
  {
    name: 'Maxillofacial Surgery',
    href: null,
    desc: 'Our specialist, Dr. Subhankar Paul, is highly trained in maxillofacial surgery, offering advanced solutions for complex dental and facial conditions. From wisdom tooth removal to corrective jaw surgery, we ensure safe, precise, and effective treatment with a focus on patient comfort.'
  },
  {
    name: 'Routine Checkups',
    href: '/services/routine-checkup',
    desc: 'Regular dental checkups are essential for maintaining oral health. Our comprehensive exams include professional cleaning, cavity detection, gum health assessment, and personalized advice. Early detection helps prevent serious problems and keeps your smile healthy.'
  },
  {
    name: 'Restorative Dentistry',
    href: null,
    desc: 'Restore your smile and function with our restorative dentistry services, including fillings, crowns, bridges, and more. We use high-quality materials and advanced techniques to repair damaged teeth, ensuring natural appearance and long-lasting results.'
  },
  {
    name: 'Root Canal Treatment',
    href: '/services/root-canal-treatment',
    desc: 'Save infected or painful teeth with our painless root canal therapy. Using advanced technology, we remove infection, relieve pain, and preserve your natural tooth. Our gentle approach ensures a comfortable experience and a healthy, functional smile.'
  },
  {
    name: 'Implant Dentistry',
    href: '/services/implant-dentistry',
    desc: 'Replace missing teeth with permanent, natural-looking dental implants. Our implant dentistry restores your smile, chewing ability, and confidence. We use the latest techniques for safe, predictable, and long-lasting results.'
  },
  {
    name: 'Denture for Missing Teeth',
    href: '/services/denture-for-missing-teeth',
    desc: 'Custom-fit dentures restore comfort, function, and appearance for patients with missing teeth. We design dentures that look natural and fit securely, helping you eat, speak, and smile with confidence.'
  },
  {
    name: 'Dental Implants',
    href: '/services/dental-implants',
    desc: 'Dental implants are the gold standard for replacing missing teeth. They look, feel, and function like natural teeth, prevent bone loss, and last for many years. Our expert team provides comprehensive implant care from planning to placement.'
  },
  {
    name: 'Dental Braces',
    href: '/services/dental-braces',
    desc: 'Straighten your teeth and improve your bite with modern dental braces. We offer metal, ceramic, and invisible braces for children, teens, and adults. Our orthodontic care is personalized for the best results and a confident smile.'
  },
];

const ServicesPage = () => (
  <>
    <Header />
    <SEO
      title="Dental Services | Dentique Specialist Dental Clinic, Agartala"
      description="Explore the full range of dental services offered at Dentique Specialist Dental Clinic in Agartala. From general dentistry and preventive care to advanced treatments like implants, braces, and cosmetic dentistry, our expert team provides comprehensive, patient-centered care."
      keywords="dental services Agartala, dentist Agartala, teeth whitening, dental implants, root canal, braces, restorative dentistry, Dr Subhankar Paul"
      url="https://dentique-agartala.com/services"
    />
    <main className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Our Dental Services</h1>
        <div className="grid gap-6">
          {services.map(service => (
            service.href ? (
              <Link key={service.name} href={service.href} className="block bg-gray-50 rounded-xl shadow p-6 hover:bg-accent/10 transition">
                <div className="text-xl font-bold text-primary mb-1">{service.name}</div>
                <div className="text-gray-700 whitespace-pre-line">{service.desc}</div>
              </Link>
            ) : (
              <div key={service.name} className="block bg-gray-50 rounded-xl shadow p-6">
                <div className="text-xl font-bold text-primary mb-1">{service.name}</div>
                <div className="text-gray-700 whitespace-pre-line">{service.desc}</div>
              </div>
            )
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ServicesPage; 