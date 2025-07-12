const StickyCTA = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
    <a
      href="https://api.whatsapp.com/send?phone=919940228415"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition focus:outline-none focus:ring"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-xl">🟢</span> WhatsApp
    </a>
    <a
      href="tel:+919940228415"
      className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-full shadow-lg transition focus:outline-none focus:ring"
      aria-label="Call Dentique"
    >
      <span className="text-xl">📞</span> Call Now
    </a>
  </div>
);

export default StickyCTA; 