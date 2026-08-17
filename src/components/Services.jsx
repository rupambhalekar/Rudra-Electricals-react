import { useState } from 'react';
import Reveal from './Reveal';
import { SERVICES, SERVICE_FILTERS } from '../data/siteData';
import { CATEGORY_ICONS } from './Icons';

export default function Services() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">What we do</p>
          <h2 className="section-title">Four core services, one accountable team</h2>
          <p className="section-lead">From a single camera to a full commercial rewiring job — every service below is delivered by our own technicians, never subcontracted.</p>
        </Reveal>

        <Reveal className="service-filters" role="tablist" aria-label="Filter services">
          {SERVICE_FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-chip${filter === f.key ? ' is-active' : ''}`}
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="service-grid">
          {SERVICES.map((svc) => {
            const Icon = CATEGORY_ICONS[svc.icon];
            const hidden = filter !== 'all' && svc.cat !== filter;
            return (
              <Reveal key={svc.id} as="article" className={`service-card${hidden ? ' is-hidden' : ''}`}>
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <ul className="service-features">
                  {svc.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#booking" className="service-cta">
                  Book this service →
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
