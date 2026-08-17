# Rudra Electronics — React Version

A component-based React (Vite) port of the original static HTML/CSS/JS site.
Visual design and all interactive behavior are preserved exactly — this is a
1:1 rebuild in React, not a redesign.

## Run it locally

```bash
npm install
npm run dev       # starts a dev server, usually at http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # serve the built dist/ locally to sanity-check it
```

`dist/` is a static bundle — deploy it anywhere that serves static files
(Netlify, Vercel, GitHub Pages, cPanel, S3, etc.), same as the original site.

## Project structure

```
src/
  components/     One component per section (Hero, Services, BookingForm, …)
  data/           siteData.js — all text content, contact info, and the
                   Web3Forms access key live here. Edit content without
                   touching component code.
  hooks/          useReveal.js — scroll-reveal-on-view hook
  utils/          web3forms.js — shared form-submission helper
  styles.css      Unchanged from the original site
  App.jsx         Page composition + LocalBusiness JSON-LD schema
public/
  assets/         Logos, favicons, og-cover (all WebP)
  site.webmanifest, robots.txt, sitemap.xml
```

## Things to update before going live

- `src/data/siteData.js` → `WEB3FORMS_ACCESS_KEY` — already carried over from
  the original site, but double check it's still valid on web3forms.com.
- `sitemap.xml` / `robots.txt` — carried over unchanged; update the domain if
  it differs from `rudraelectronics.in`.
- The Google Maps embed URL and JSON-LD `geo` coordinates in
  `Contact.jsx` / `App.jsx` — update if the business address changes again.

## What changed vs. the static version

- Vanilla DOM manipulation (`document.getElementById`, manual class toggling)
  replaced with React state (`useState`, `useEffect`) and conditional
  rendering/classNames.
- The quotation tool's line items, discount/GST calc, and localStorage draft
  are now driven by React state instead of manual DOM reads on every input.
- FAQ accordion state and the FAQ JSON-LD schema are generated from the same
  `FAQS` data array, instead of the schema being patched via a `<script>` tag
  after the fact.
- No other functional changes — same forms, same Web3Forms integration, same
  theme toggle, same filters, same testimonial slider.
