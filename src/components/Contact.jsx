import Reveal from './Reveal';
import { CONTACT } from '../data/siteData';
import { PhoneIcon, WhatsappIcon, MailIcon, PinIcon, ClockIcon } from './Icons';

export default function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Get in touch</p>
          <h2 className="section-title">We're one call away</h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-cards">
            <a className="contact-card" href={`tel:${CONTACT.phoneHref}`}>
              <div className="contact-icon">
                <PhoneIcon />
              </div>
              <h3>Phone</h3>
              <p>{CONTACT.phone}</p>
              <p>{CONTACT.altPhone} (Alt)</p>
            </a>
            <a className="contact-card" href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <WhatsappIcon />
              </div>
              <h3>WhatsApp</h3>
              <p>{CONTACT.phone}</p>
            </a>
            <a className="contact-card" href={`mailto:${CONTACT.email}`}>
              <div className="contact-icon">
                <MailIcon />
              </div>
              <h3>Email</h3>
              <p>{CONTACT.email}</p>
            </a>
            <div className="contact-card contact-card-static">
              <div className="contact-icon">
                <PinIcon />
              </div>
              <h3>Address</h3>
              <p>{CONTACT.address}</p>
            </div>
            <div className="contact-card contact-card-static">
              <div className="contact-icon">
                <ClockIcon />
              </div>
              <h3>Working Hours</h3>
              <p>{CONTACT.hours}</p>
            </div>
          </Reveal>

          <Reveal className="contact-map">
            <iframe
              title="Rudra Electronics location map"
              src="https://www.google.com/maps?q=Near+Gopur+Square+Sector-E+Sudama+Nagar+Indore+Madhya+Pradesh+452009&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
