import Counter from './Counter';
import { ShieldIcon, ClockSmallIcon, HeartIcon, CameraGlyph } from './Icons';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <svg className="wire-trace" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path className="trace-path" d="M-50,700 C 250,650 300,450 550,430 C 800,410 780,180 1050,150 C 1250,128 1300,220 1500,180" />
          <path className="trace-path trace-path-2" d="M-50,120 C 200,160 260,340 480,360 C 720,382 760,600 1000,640 C 1200,672 1300,560 1500,600" />
        </svg>
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="rec-dot" aria-hidden="true"></span>Serving Indore since 2003
          </p>
          <h1 className="hero-title">Professional CCTV, Electrical &amp; Lighting Solutions for Homes &amp; Businesses</h1>
          <p className="hero-sub">
            Reliable installation, maintenance and support for CCTV security systems, professional lighting and complete
            electrical wiring — backed by 23 years of hands-on experience in Indore.
          </p>

          <div className="hero-cta">
            <a href="#booking" className="btn btn-primary btn-lg">
              Book Service
            </a>
            <a href="#quotation" className="btn btn-ghost btn-lg">
              Request Quotation
            </a>
          </div>

          <div className="trust-badges">
            <div className="badge-chip">
              <ShieldIcon />
              Licensed &amp; Insured
            </div>
            <div className="badge-chip">
              <ClockSmallIcon />
              Same-Day Response
            </div>
            <div className="badge-chip">
              <HeartIcon />
              500+ Happy Clients
            </div>
          </div>
        </div>

        <div className="hero-visual" role="img" aria-label="Illustration of a CCTV monitoring viewfinder over a live camera feed panel">
          <div className="viewfinder">
            <span className="vf-corner vf-tl"></span>
            <span className="vf-corner vf-tr"></span>
            <span className="vf-corner vf-bl"></span>
            <span className="vf-corner vf-br"></span>
            <span className="vf-live">
              <span className="rec-dot" aria-hidden="true"></span>LIVE
            </span>
            <span className="vf-timestamp">INDORE · CAM 01</span>
            <div className="vf-panel">
              <CameraGlyph />
            </div>
          </div>

          <div className="glass-card stat-card">
            <Counter target={23} />
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="glass-card stat-card stat-card-2">
            <Counter target={4500} />
            <span className="stat-label">Installations Done</span>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container hero-stats-grid">
          <div className="hstat">
            <Counter target={23} />
            <span>Years in Business</span>
          </div>
          <div className="hstat">
            <Counter target={4500} suffix="+" />
            <span>Installations</span>
          </div>
          <div className="hstat">
            <Counter target={500} suffix="+" />
            <span>Happy Clients</span>
          </div>
          <div className="hstat">
            <Counter target={24} suffix="/7" />
            <span>Emergency Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
