import { useState } from 'react';

const faqs = [
  {
    q: 'How do I choose the best dentist in Agartala?',
    a: 'Look for clinics with experienced doctors, great patient reviews, modern technology, and recognized awards. Dentique is led by Dr. Subhankar Paul, an award-winning maxillofacial surgeon.'
  },
  {
    q: 'What should I do in a dental emergency?',
    a: 'Call us immediately for emergency care. We provide pain relief within 1 hour and prioritize urgent cases. Our clinic is open for emergencies 24/7.'
  },
  {
    q: 'How often should I get a dental checkup?',
    a: 'We recommend a checkup every 6 months to prevent dental issues and maintain optimal oral health.'
  },
  {
    q: 'Is professional teeth whitening better than home remedies?',
    a: 'Yes. Professional whitening is safer, more effective, and longer-lasting. Our clinic uses advanced whitening systems for the best results.'
  },
  {
    q: 'Do you offer dental implants and braces?',
    a: 'Yes, we offer dental implants, invisible braces, and a full range of restorative and cosmetic dental treatments.'
  },
  {
    q: 'Where is Dentique located?',
    a: 'We are conveniently located in Agartala, Tripura. See our Contact page for the exact address and map.'
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 bg-white" aria-label="Frequently Asked Questions">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-primary focus:outline-none focus:ring flex justify-between items-center"
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <span className="ml-2 text-xl">{open === i ? '-' : '+'}</span>
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`px-6 pb-4 text-gray-700 transition-all duration-300 ${open === i ? 'block' : 'hidden'}`}
                role="region"
                aria-hidden={open !== i}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 