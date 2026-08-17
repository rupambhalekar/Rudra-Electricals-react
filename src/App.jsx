import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import QuotationTool from './components/QuotationTool';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import './styles.css';

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  name: 'Rudra Electronics',
  image: 'https://www.rudraelectronics.in/assets/og-cover.webp',
  logo: 'https://www.rudraelectronics.in/assets/logo-icon-accent.webp',
  '@id': 'https://www.rudraelectronics.in/',
  url: 'https://www.rudraelectronics.in/',
  telephone: '+91-97545-50107',
  email: 'vikasbhalekar01@gmail.com',
  founder: { '@type': 'Person', name: 'Vikas Bhalekar' },
  foundingDate: '2003',
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 2768, Near Gopur Square, Sector-E, Sudama Nagar',
    addressLocality: 'Indore',
    addressRegion: 'Madhya Pradesh',
    postalCode: '452009',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 22.6879, longitude: 75.85 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '22:00',
  },
  areaServed: { '@type': 'City', name: 'Indore' },
  sameAs: [],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CCTV Camera Installation' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Electrical Wiring' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lighting Installation' } },
  ],
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 40);
      setShowBackToTop(y > 500);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (y / docHeight) * 100 : 0);
    }
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />

      <Loader />
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar scrolled={scrolled} scrollProgress={scrollProgress} />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Reviews />
        <BookingForm />
        <QuotationTool />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <FloatingActions showBackToTop={showBackToTop} />
    </>
  );
}
