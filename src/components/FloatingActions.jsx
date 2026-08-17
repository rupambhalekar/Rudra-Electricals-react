import { CONTACT } from '../data/siteData';
import { WhatsappIcon } from './Icons';

export default function FloatingActions({ showBackToTop }) {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="floating-actions">
      <a href={CONTACT.whatsapp} className="fab fab-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsappIcon />
      </a>
      <a href={`tel:${CONTACT.phoneHref}`} className="fab fab-call" aria-label="Call now">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .6 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .6a2 2 0 0 1 1.7 2Z" />
        </svg>
      </a>
      <button className={`fab fab-top${showBackToTop ? ' is-visible' : ''}`} type="button" aria-label="Back to top" onClick={scrollTop}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
