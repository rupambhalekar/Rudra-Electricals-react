import { CONTACT } from '../data/siteData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand">
            <img src="/assets/logo-icon-white.webp" alt="Rudra Electronics logo" width="36" height="40" />
            <span className="brand-text">
              <span className="brand-name">Rudra Electronics</span>
              <span className="brand-tag">CCTV &amp; Electrical Solutions</span>
            </span>
          </a>
          <p>Professional CCTV, electrical wiring and lighting solutions in Indore since 2003. Owned &amp; operated by Vikas Bhalekar.</p>
        </div>

        <nav className="footer-col" aria-label="Quick links">
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Our Work</a>
          <a href="#booking">Book Service</a>
          <a href="#quotation">Get Quotation</a>
          <a href="#faq">FAQ</a>
        </nav>

        <nav className="footer-col" aria-label="Services">
          <h4>Services</h4>
          <a href="#services">CCTV Installation</a>
          <a href="#services">Electrical Wiring</a>
          <a href="#services">Lighting Solutions</a>
          <a href="#services">Electrical Maintenance</a>
        </nav>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
          <a href={`tel:${CONTACT.altPhoneHref}`}>{CONTACT.altPhone} (Alt)</a>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <span>{CONTACT.addressShort}</span>
          <span>{CONTACT.hours}</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© <span>{year}</span> Rudra Electronics. All rights reserved.</p>
        <p className="footer-credit">Designed for a premium, secure web presence.</p>
      </div>
    </footer>
  );
}
