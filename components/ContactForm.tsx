import { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14 relative inline-block after:block after:mx-auto after:mt-2 after:w-20 after:h-1 after:bg-accent after:rounded">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full text-xl">📍</span>
                <div>
                  <h4 className="font-semibold text-gray-700">Address</h4>
                  <address className="not-italic text-gray-600">Dentique Specialist Dental Clinic<br/>[Address], Agartala, Tripura<br/>India</address>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full text-xl">📞</span>
                <div>
                  <h4 className="font-semibold text-gray-700">Phone</h4>
                  <a href="tel:+91XXXXXXXXXX" className="text-accent hover:underline block">+91-XXXXXXXXXX</a>
                  <span className="text-gray-500 text-sm">Emergency: +91-XXXXXXXXXX</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full text-xl">📧</span>
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <a href="mailto:info@dentique-agartala.com" className="text-accent hover:underline block">info@dentique-agartala.com</a>
                  <span className="text-gray-500 text-sm">emergency@dentique-agartala.com</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-accent text-white rounded-full text-xl">🕒</span>
                <div>
                  <h4 className="font-semibold text-gray-700">Working Hours</h4>
                  <span className="text-gray-600 block">Mon-Sat: 9:00 AM - 8:00 PM</span>
                  <span className="text-gray-600 block">Sun: 10:00 AM - 6:00 PM</span>
                  <span className="text-gray-500 text-sm">Emergency: 24/7 Available</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Appointment Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Book an Appointment</h3>
            {submitted ? (
              <div className="text-green-600 font-semibold text-lg">Thank you for your appointment request! We will contact you soon to confirm your appointment.</div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={e => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                aria-label="Appointment booking form"
              >
                <div>
                  <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input id="name" name="name" type="text" required className="w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none focus:border-accent" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required className="w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none focus:border-accent" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Email Address</label>
                  <input id="email" name="email" type="email" className="w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none focus:border-accent" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="service" className="block font-semibold text-gray-700 mb-1">Service Required</label>
                  <select id="service" name="service" className="w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none focus:border-accent">
                    <option value="">Select Service</option>
                    <option value="general">General Checkup</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="surgery">Maxillofacial Surgery</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-semibold text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" className="w-full border-2 border-gray-200 rounded px-4 py-2 focus:outline-none focus:border-accent" rows={4} placeholder="Describe your dental concern or preferred appointment time..."></textarea>
                </div>
                <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-full transition">Book Appointment</button>
              </form>
            )}
          </div>
        </div>
        {/* Google Map */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Find Us on Google Maps</h3>
          <div className="w-full h-96 max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Dentique Specialist Dental Clinic Location"
              src="https://www.google.com/maps?q=Agartala,+Tripura,+India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 