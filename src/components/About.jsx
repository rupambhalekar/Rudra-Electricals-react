import Reveal from './Reveal';
import Counter from './Counter';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="about-frame">
            <span className="vf-corner vf-tl"></span>
            <span className="vf-corner vf-tr"></span>
            <span className="vf-corner vf-bl"></span>
            <span className="vf-corner vf-br"></span>
            <div className="owner-card">
              <div className="owner-avatar" aria-hidden="true">VB</div>
              <p className="owner-name">Vikas Bhalekar</p>
              <p className="owner-role">Founder &amp; Chief Technician</p>
            </div>
          </div>
          <div className="glass-card since-card">
            Established <strong>2003</strong>
          </div>
        </Reveal>

        <Reveal className="about-content">
          <p className="eyebrow">About Rudra Electronics</p>
          <h2 className="section-title">Two decades of keeping Indore's homes and businesses safe, powered and well-lit</h2>
          <p className="section-lead">
            Founded in 2003 by <strong>Vikas Bhalekar</strong>, Rudra Electronics began as a two-man electrical repair
            outfit in Sudama Nagar and has grown into one of the area's most trusted names in CCTV security, electrical
            wiring and lighting installation — without ever losing the habit of showing up on time and cleaning up after
            the job.
          </p>

          <div className="about-points">
            <div className="about-point">
              <h3>Why customers trust us</h3>
              <p>
                Every technician is trained in-house, every job is quoted in writing before work begins, and every
                installation carries a written warranty — no surprises on the final bill.
              </p>
            </div>
            <div className="about-point">
              <h3>Our mission</h3>
              <p>Make professional-grade security and electrical work accessible and affordable for every home, shop and factory in and around Indore.</p>
            </div>
            <div className="about-point">
              <h3>Our vision</h3>
              <p>To be Madhya Pradesh's most recommended electrical and security solutions company — one referral at a time.</p>
            </div>
          </div>

          <div className="about-stats">
            <div>
              <Counter target={23} />
              <span>Years Experience</span>
            </div>
            <div>
              <Counter target={4500} suffix="+" />
              <span>Projects Completed</span>
            </div>
            <div>
              <Counter target={12} suffix="+" />
              <span>Expert Technicians</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
