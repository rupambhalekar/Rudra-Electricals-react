import Reveal from './Reveal';
import { WHY_US } from '../data/siteData';
import { CheckIcon } from './Icons';

export default function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Why choose us</p>
          <h2 className="section-title">Built on twenty-three years of showing up</h2>
        </Reveal>

        <div className="why-grid">
          {WHY_US.map((label) => (
            <Reveal as="div" className="why-card" key={label}>
              <CheckIcon />
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
