import { useRef, useState } from 'react';
import Reveal from './Reveal';
import { FAQS } from '../data/siteData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1);
  const panelRefs = useRef([]);

  function toggle(i) {
    setOpenIndex((cur) => (cur === i ? -1 : i));
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="section" id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container faq-grid">
        <Reveal className="faq-intro">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Common questions, answered</h2>
          <p className="section-lead">
            Can't find what you're looking for? <a href="#contact">Contact us</a> directly.
          </p>
        </Reveal>

        <Reveal className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="faq-item" key={f.q}>
                <button className="faq-q" aria-expanded={isOpen} onClick={() => toggle(i)}>
                  {f.q}
                  <span className="faq-icon">+</span>
                </button>
                <div
                  className="faq-a"
                  ref={(el) => (panelRefs.current[i] = el)}
                  style={{ maxHeight: isOpen ? (panelRefs.current[i]?.scrollHeight || 500) + 'px' : undefined }}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
