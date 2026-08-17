import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { TESTIMONIALS } from '../data/siteData';

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const count = TESTIMONIALS.length;

  function goTo(i) {
    setIndex((i + count) % count);
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [count]);

  function stopAuto() {
    clearInterval(intervalRef.current);
  }

  return (
    <section className="section section-alt" id="reviews">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Customer reviews</p>
          <h2 className="section-title">What Indore says about us</h2>
        </Reveal>

        <Reveal className="testimonial-slider" onMouseEnter={stopAuto}>
          <div className="testimonial-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {TESTIMONIALS.map((t, i) => (
              <blockquote className="testimonial-card" key={i}>
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>{t.text}</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="testimonial-controls">
            <button aria-label="Previous review" onClick={() => goTo(index - 1)}>
              ‹
            </button>
            <div className="testimonial-dots">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? 'is-active' : ''}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button aria-label="Next review" onClick={() => goTo(index + 1)}>
              ›
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
