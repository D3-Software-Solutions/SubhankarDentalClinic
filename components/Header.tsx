import Link from 'next/link';

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-primary to-primary-light shadow-lg">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link href="#home" className="text-2xl font-bold text-white">Dentique</Link>
      <nav className="hidden md:flex gap-8">
        <Link href="#home" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Home</Link>
        <Link href="#about" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">About</Link>
        <Link href="#services" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Services</Link>
        <Link href="#blog" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Blog</Link>
        <Link href="#contact" className="text-white font-medium hover:text-blue-200 transition relative after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-200 after:transition-all">Contact</Link>
      </nav>
      <Link href="#contact" className="hidden md:inline-block bg-accent text-white px-6 py-2 rounded-full font-bold shadow hover:bg-accent-dark transition">Book Appointment</Link>
      {/* Mobile menu icon */}
      <div className="md:hidden flex flex-col gap-1 cursor-pointer">
        <span className="w-7 h-1 bg-white rounded"></span>
        <span className="w-7 h-1 bg-white rounded"></span>
        <span className="w-7 h-1 bg-white rounded"></span>
      </div>
    </div>
  </header>
);

export default Header; 