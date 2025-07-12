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
            <li><a href="#home" className="text-gray-300 hover:text-accent transition">Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-accent transition">About Us</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-accent transition">Services</a></li>
            <li><a href="#blog" className="text-gray-300 hover:text-accent transition">Blog</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-accent transition">Contact</a></li>
          </ul>
        </nav>
        {/* Our Services */}
        <nav aria-label="Footer services">
          <h3 className="text-lg font-bold text-accent mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="text-gray-300 hover:text-accent transition">General Dentistry</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-accent transition">Teeth Whitening</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-accent transition">Emergency Care</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-accent transition">Maxillofacial Surgery</a></li>
            <li><a href="#services" className="text-gray-300 hover:text-accent transition">Routine Checkups</a></li>
          </ul>
        </nav>
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-accent mb-3">Contact Info</h3>
          <ul className="space-y-2 text-gray-300">
            <li>📍 [Address], Agartala, Tripura</li>
            <li>📞 +91-XXXXXXXXXX</li>
            <li>📧 info@dentique-agartala.com</li>
            <li>🕒 Mon-Sat: 9AM-8PM, Sun: 10AM-6PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; 2024 Dentique Specialist Dental Clinic. All rights reserved. | Best Dentist in Agartala | Dr. Subhankar Paul BDS MDS
      </div>
    </div>
  </footer>
);

export default Footer; 