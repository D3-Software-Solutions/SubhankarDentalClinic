import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import About from '../components/About';
import Awards from '../components/Awards';
import Emergency from '../components/Emergency';
import BlogPreview from '../components/BlogPreview';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhyUs from '@components/WhyUs';
import SEO from '../components/SEO';
import Carousel from '../components/Carousel';
// import Testimonials from '../components/Testimonials'; // Placeholder for future

const Home = () => (
  <>
    <Header />
    <SEO canonicalUrl="https://dentique-agartala.com/" />
    <main>
      <section id="home"><Hero /></section>
      <section id="whyus"><WhyUs /></section>
      <section id="features"><Features /></section>
      <section id="services"><Services /></section>
      <section id="carousel"><Carousel /></section>
      <section id="about"><About /></section>
      {/* <Awards /> */}
      <section id="emergency"><Emergency /></section>
      <section id="blog"><BlogPreview /></section>
      {/* <Testimonials /> */}
      <FAQ />
      <section id="contact"><ContactForm /></section>
    </main>
    <Footer />
  </>
);

export default Home; 