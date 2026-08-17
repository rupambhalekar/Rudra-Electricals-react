import Reveal from './Reveal';
import { PROCESS_STEPS } from '../data/siteData';

export default function Process() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">From first call to final testing, six steps, one wire</h2>
        </Reveal>

        <Reveal className="process-line">
          <svg className="process-trace" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,20 L1200,20" strokeDasharray="2 14" />
          </svg>
          {PROCESS_STEPS.map((step) => (
            <div className="process-step" key={step.num}>
              <span className="process-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
