import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from './Icons';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#portfolio', label: 'Work' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const THEME_KEY = 'rudra-theme';

export default function Navbar({ scrolled, scrollProgress }) {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (e) {}
    if (!saved) {
      saved = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    setTheme(saved);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {}
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="scroll-progress" style={{ width: scrollProgress + '%' }} aria-hidden="true" />
      <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="brand" aria-label="Rudra Electronics home">
            <img src="/assets/logo-icon-accent.webp" alt="Rudra Electronics logo" className="brand-mark" width="40" height="44" />
            <span className="brand-text">
              <span className="brand-name">Rudra Electronics</span>
              <span className="brand-tag">CCTV &amp; Electrical Solutions</span>
            </span>
          </a>

          <nav className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <button
              className="theme-toggle"
              type="button"
              aria-label="Toggle dark mode"
              aria-pressed={theme === 'dark'}
              onClick={toggleTheme}
            >
              <SunIcon />
              <MoonIcon />
            </button>
            <a href="#booking" className="btn btn-primary btn-sm">
              Book Service
            </a>
            <button
              className={`nav-toggle${menuOpen ? ' is-active' : ''}`}
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
