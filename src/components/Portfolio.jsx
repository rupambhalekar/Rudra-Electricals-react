import { useState } from 'react';
import Reveal from './Reveal';
import { PORTFOLIO_ITEMS, PORTFOLIO_FILTERS } from '../data/siteData';
import { CATEGORY_ICONS } from './Icons';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Our work</p>
          <h2 className="section-title">A sample of recent installations</h2>
          <p className="section-lead">
            Gallery placeholders below — swap in real project photos any time. <span className="hint">(Category tiles shown; replace with site photography.)</span>
          </p>
        </Reveal>

        <Reveal className="portfolio-filters">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-chip${filter === f.key ? ' is-active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="portfolio-grid">
          {PORTFOLIO_ITEMS.map((item, i) => {
            const Icon = CATEGORY_ICONS[item.icon];
            const hidden = filter !== 'all' && !item.cats.includes(filter);
            return (
              <Reveal
                as="figure"
                key={i}
                className={`portfolio-item${hidden ? ' is-hidden' : ''}`}
                tabIndex={0}
              >
                <div className={`portfolio-media ph-${item.icon}`}>
                  {item.icon === 'cctv' && (
                    <>
                      <span className="vf-corner vf-tl"></span>
                      <span className="vf-corner vf-br"></span>
                    </>
                  )}
                  <Icon size={34} />
                </div>
                <figcaption>
                  <span>{item.tag}</span>
                  {item.title}
                </figcaption>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
