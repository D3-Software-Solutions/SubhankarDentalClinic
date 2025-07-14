import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-800 text-white pt-16 pb-8" aria-label="Site footer">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold text-accent mb-3">Dentique Specialist Dental Clinic</h3>
          <p className="text-gray-300 mb-2">Your trusted dental care partner in Agartala. Led by Dr. Subhankar Paul BDS MDS Maxillofacial Surgeon, we provide comprehensive dental treatments with a focus on patient comfort and satisfaction.</p>
          <p className="font-semibold text-accent">Emergency Dental Care Available 24/7</p>
        </div>
        {/* Quick Links */}
        <nav aria-label="Footer quick links">
          <h3 className="text-lg font-bold text-accent mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="text-gray-300 hover:text-accent transition">Home</Link></li>
            <li><a href="#about" className="text-gray-300 hover:text-accent transition">About Us</a></li>
            <li><Link href="/services" className="text-gray-300 hover:text-accent transition">Services</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-accent transition">Blog</Link></li>
            <li><Link href="/testimonials" className="text-gray-300 hover:text-accent transition">Testimonials</Link></li>
            <li><Link href="/awards" className="text-gray-300 hover:text-accent transition">Awards</Link></li>
            <li><Link href="/" as="/#contact" scroll={false} className="text-gray-300 hover:text-accent transition">Contact</Link></li>
          </ul>
        </nav>
        {/* Our Services */}
        <nav aria-label="Footer services">
          <h3 className="text-lg font-bold text-accent mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li><Link href="/services/root-canal-treatment" className="text-gray-300 hover:text-accent transition">Root Canal Treatment</Link></li>
            <li><Link href="/services/implant-dentistry" className="text-gray-300 hover:text-accent transition">Implant Dentistry</Link></li>
            <li><Link href="/services/denture-for-missing-teeth" className="text-gray-300 hover:text-accent transition">Denture for Missing Teeth</Link></li>
            <li><Link href="/services/teeth-whitening" className="text-gray-300 hover:text-accent transition">Teeth Whitening</Link></li>
            <li><Link href="/services/dental-implants" className="text-gray-300 hover:text-accent transition">Dental Implants</Link></li>
            <li><Link href="/services/dental-braces" className="text-gray-300 hover:text-accent transition">Dental Braces</Link></li>
            <li><Link href="/services/routine-checkup" className="text-gray-300 hover:text-accent transition">Routine Checkup</Link></li>
          </ul>
        </nav>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-accent mb-3">Contact Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📍 Ganaraj Chawmani Laxmi, Lakshmi Narayan Bari Rd, opposite shri krishna mandir, Banamalipur, Indranagar, Agartala, Tripura 799001</li>
            <li>📞 +91-8259000114</li>
            <li>📧 info@dentique-agartala.com</li>
            <li>🕒 Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</li>
          </ul>
        </div>
      </div>
      {/* Awards */}
      <div className="text-center mt-6">
        <div className="inline-block bg-accent text-white px-4 py-2 rounded font-semibold mr-2">Paper Presentation Award</div>
        <div className="inline-block bg-accent text-white px-4 py-2 rounded font-semibold">Highest Mark Gold Medal</div>
      </div>
      <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; 2024 Dentique Specialist Dental Clinic. All rights reserved. | Best Dentist in Agartala | Dr. Subhankar Paul BDS MDS
      </div>
    </div>
  </footer>
);

export default Footer; 