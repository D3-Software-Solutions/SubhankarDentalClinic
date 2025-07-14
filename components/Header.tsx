import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-primary to-primary-light shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold text-white">Dentique</Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Home</Link>
          <Link href="#about" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">About</Link>
          <Link href="/services" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Services</Link>
          <Link href="/blog" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Blog</Link>
          <Link href="/testimonials" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Testimonials</Link>
          <Link href="/awards" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Awards</Link>
          {/* Change Contact link to always go to /#contact for cross-page navigation */}
          <Link href="/" as="/#contact" scroll={false} className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Contact</Link>
        </nav>
        <Link href="/" as="/#contact" scroll={false} className="hidden md:inline-block bg-accent text-white px-6 py-2 rounded-full font-bold shadow hover:bg-accent-dark transition">Book Appointment</Link>
        {/* Mobile menu icon */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer z-50"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={`w-7 h-1 bg-white rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-1 bg-white rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-1 bg-white rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={closeMenu} aria-hidden="true"></div>
          <nav className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-lg z-50 flex flex-col gap-6 p-8 animate-slideIn">
            <Link href="/" className="text-primary font-semibold text-lg" onClick={closeMenu}>Home</Link>
            <Link href="#about" className="text-primary font-semibold text-lg" onClick={closeMenu}>About</Link>
            <Link href="/services" className="text-primary font-semibold text-lg" onClick={closeMenu}>Services</Link>
            <Link href="/blog" className="text-primary font-semibold text-lg" onClick={closeMenu}>Blog</Link>
            <Link href="/testimonials" className="text-primary font-semibold text-lg" onClick={closeMenu}>Testimonials</Link>
            <Link href="/awards" className="text-primary font-semibold text-lg" onClick={closeMenu}>Awards</Link>
            <Link href="/" as="/#contact" scroll={false} className="text-primary font-semibold text-lg" onClick={closeMenu}>Contact</Link>
            <Link href="/" as="/#contact" scroll={false} className="bg-accent text-white px-6 py-2 rounded-full font-bold shadow hover:bg-accent-dark transition mt-4 text-center" onClick={closeMenu}>Book Appointment</Link>
          </nav>
        </>
      )}
      <style jsx global>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
};

export default Header; 