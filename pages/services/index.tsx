import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const services = [
  {
    name: 'Root Canal Treatment',
    href: '/services/root-canal-treatment',
    desc: 'Save infected teeth with painless root canal therapy.'
  },
  {
    name: 'Implant Dentistry',
    href: '/services/implant-dentistry',
    desc: 'Permanent, natural-looking tooth replacement with dental implants.'
  },
  {
    name: 'Denture for Missing Teeth',
    href: '/services/denture-for-missing-teeth',
    desc: 'Custom-fit dentures for comfort and function.'
  },
  {
    name: 'Teeth Whitening',
    href: '/services/teeth-whitening',
    desc: 'Brighten your smile with safe, professional whitening.'
  },
  {
    name: 'Dental Implants',
    href: '/services/dental-implants',
    desc: 'Restore missing teeth with advanced dental implants.'
  },
  {
    name: 'Dental Braces',
    href: '/services/dental-braces',
    desc: 'Straighten teeth and improve bite with modern braces.'
  },
  {
    name: 'Routine Checkup',
    href: '/services/routine-checkup',
    desc: 'Preventive care for lifelong oral health.'
  },
];

const ServicesPage = () => (
  <>
    <Header />
    <main className="pt-24 pb-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">Our Dental Services</h1>
        <div className="grid gap-6">
          {services.map(service => (
            <Link key={service.href} href={service.href} className="block bg-gray-50 rounded-xl shadow p-6 hover:bg-accent/10 transition">
              <div className="text-xl font-bold text-primary mb-1">{service.name}</div>
              <div className="text-gray-700">{service.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ServicesPage; 