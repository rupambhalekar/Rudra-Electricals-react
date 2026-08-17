import { useState } from 'react';
import Reveal from './Reveal';
import { CONTACT } from '../data/siteData';
import { submitToWeb3Forms } from '../utils/web3forms';

const PROPERTY_TYPES = ['Home', 'Shop', 'Office', 'Warehouse', 'Factory', 'School', 'Apartment', 'Hospital', 'Commercial Building', 'Event Venue'];
const SERVICE_TYPES = ['CCTV Installation', 'CCTV AMC / Maintenance', 'CCTV Repair', 'DVR/NVR Installation', 'Electrical Wiring', 'Lighting Installation', 'Electrical Repair & Maintenance', 'Other'];

const VALIDATORS = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your full name.'),
  mobile: (v) => (/^[6-9]\d{9}$/.test(v.trim()) ? '' : 'Enter a valid 10-digit mobile number.'),
  email: (v) => (v.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email address.'),
  city: (v) => (v.trim().length >= 2 ? '' : 'Please enter your city.'),
  address: (v) => (v.trim().length >= 5 ? '' : 'Please enter a complete address.'),
  propertyType: (v) => (v ? '' : 'Please select a property type.'),
  service: (v) => (v ? '' : 'Please select a service.'),
  date: (v) => (v ? '' : 'Please choose a preferred date.'),
};

const initialForm = {
  name: '', mobile: '', email: '', city: 'Indore', address: '',
  propertyType: '', service: '', date: '', description: '',
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const todayISO = new Date().toISOString().split('T')[0];

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validateField(field) {
    const msg = VALIDATORS[field] ? VALIDATORS[field](form[field] ?? '') : '';
    setErrors((e) => ({ ...e, [field]: msg }));
    return !msg;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    let valid = true;
    Object.keys(VALIDATORS).forEach((field) => {
      const msg = VALIDATORS[field](form[field] ?? '');
      nextErrors[field] = msg;
      if (msg) valid = false;
    });
    setErrors(nextErrors);
    setStatus('idle');
    if (!valid) return;

    // Local backup copy of the lead, same as the original vanilla version.
    try {
      const bookings = JSON.parse(localStorage.getItem('rudra-bookings') || '[]');
      bookings.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem('rudra-bookings', JSON.stringify(bookings));
    } catch (err) {}

    setStatus('sending');
    try {
      const result = await submitToWeb3Forms({
        subject: 'New Service Booking — Rudra Electronics',
        from_name: 'Rudra Electronics Website',
        ...form,
      });
      if (result.success) {
        setStatus('success');
        setForm(initialForm);
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section className="section" id="booking">
      <div className="container form-grid">
        <Reveal className="form-intro">
          <p className="eyebrow">Book a service</p>
          <h2 className="section-title">Schedule your free site visit</h2>
          <p className="section-lead">Tell us what you need and where — we'll confirm your slot by phone or WhatsApp within a few hours.</p>
          <ul className="form-points">
            <li>Free, no-obligation site visit</li>
            <li>Written quotation before any work begins</li>
            <li>Serving all of Indore &amp; surrounding areas</li>
          </ul>
          <div className="glass-card contact-mini">
            <p>Prefer to talk?</p>
            <a href={`tel:${CONTACT.phoneHref}`}>📞 {CONTACT.phone}</a>
            <a href={`tel:${CONTACT.altPhoneHref}`}>📞 {CONTACT.altPhone} (Alt)</a>
          </div>
        </Reveal>

        <Reveal as="form" className="card-form" onSubmit={handleSubmit} noValidate>
          <input type="checkbox" name="botcheck" className="hidden-field" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

          <div className="form-row">
            <div className={`field${errors.name ? ' has-error' : ''}`}>
              <label htmlFor="bName">Full Name *</label>
              <input type="text" id="bName" autoComplete="name" value={form.name} onChange={(e) => update('name', e.target.value)} onBlur={() => validateField('name')} />
              <span className="field-error">{errors.name}</span>
            </div>
            <div className={`field${errors.mobile ? ' has-error' : ''}`}>
              <label htmlFor="bMobile">Mobile Number *</label>
              <input type="tel" id="bMobile" placeholder="98765 43210" autoComplete="tel" value={form.mobile} onChange={(e) => update('mobile', e.target.value)} onBlur={() => validateField('mobile')} />
              <span className="field-error">{errors.mobile}</span>
            </div>
          </div>

          <div className="form-row">
            <div className={`field${errors.email ? ' has-error' : ''}`}>
              <label htmlFor="bEmail">Email</label>
              <input type="email" id="bEmail" autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} onBlur={() => validateField('email')} />
              <span className="field-error">{errors.email}</span>
            </div>
            <div className={`field${errors.city ? ' has-error' : ''}`}>
              <label htmlFor="bCity">City *</label>
              <input type="text" id="bCity" autoComplete="address-level2" value={form.city} onChange={(e) => update('city', e.target.value)} onBlur={() => validateField('city')} />
              <span className="field-error">{errors.city}</span>
            </div>
          </div>

          <div className={`field${errors.address ? ' has-error' : ''}`}>
            <label htmlFor="bAddress">Address *</label>
            <input type="text" id="bAddress" autoComplete="street-address" value={form.address} onChange={(e) => update('address', e.target.value)} onBlur={() => validateField('address')} />
            <span className="field-error">{errors.address}</span>
          </div>

          <div className="form-row">
            <div className={`field${errors.propertyType ? ' has-error' : ''}`}>
              <label htmlFor="bPropertyType">Property Type *</label>
              <select id="bPropertyType" value={form.propertyType} onChange={(e) => update('propertyType', e.target.value)} onBlur={() => validateField('propertyType')}>
                <option value="">Select type</option>
                {PROPERTY_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <span className="field-error">{errors.propertyType}</span>
            </div>
            <div className={`field${errors.service ? ' has-error' : ''}`}>
              <label htmlFor="bService">Required Service *</label>
              <select id="bService" value={form.service} onChange={(e) => update('service', e.target.value)} onBlur={() => validateField('service')}>
                <option value="">Select service</option>
                {SERVICE_TYPES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <span className="field-error">{errors.service}</span>
            </div>
          </div>

          <div className={`field${errors.date ? ' has-error' : ''}`}>
            <label htmlFor="bDate">Preferred Date *</label>
            <input type="date" id="bDate" min={todayISO} value={form.date} onChange={(e) => update('date', e.target.value)} onBlur={() => validateField('date')} />
            <span className="field-error">{errors.date}</span>
          </div>

          <div className="field">
            <label htmlFor="bDesc">Description</label>
            <textarea id="bDesc" rows="3" placeholder="Tell us a bit more — number of cameras, area in sq. ft., etc." value={form.description} onChange={(e) => update('description', e.target.value)} />
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Submit Booking Request'}
          </button>
          {status === 'success' && (
            <p className="form-success" role="status">
              ✅ Thanks! Your request has been sent. We'll call you shortly at the number provided.
            </p>
          )}
          {status === 'error' && (
            <p className="form-error-banner" role="alert">
              ⚠️ We couldn't send your request right now. Please call or WhatsApp us directly at <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
