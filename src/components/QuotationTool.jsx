import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { CONTACT } from '../data/siteData';
import { submitToWeb3Forms } from '../utils/web3forms';

const QUOTE_KEY = 'rudra-quote-draft';
const DEFAULT_ROWS = [
  { item: 'HD IP Camera (2MP)', type: 'product', qty: 4, rate: 2200 },
  { item: 'Installation Labour', type: 'labour', qty: 1, rate: 3000 },
];

function formatINR(n) {
  return '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

let idSeed = 0;
function withId(row) {
  return { id: 'row-' + idSeed++, item: row.item ?? '', type: row.type ?? 'product', qty: row.qty ?? 1, rate: row.rate ?? 0 };
}

export default function QuotationTool() {
  const [rows, setRows] = useState(null); // null until loaded from storage
  const [discount, setDiscount] = useState(0);
  const [gst, setGst] = useState(18);
  const [qName, setQName] = useState('');
  const [qMobile, setQMobile] = useState('');
  const [qErrors, setQErrors] = useState({});
  const [emailStatus, setEmailStatus] = useState('idle');
  const loadedRef = useRef(false);

  // Load saved draft (or defaults) once on mount.
  useEffect(() => {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(QUOTE_KEY));
    } catch (e) {}
    if (saved && saved.rows && saved.rows.length) {
      setRows(saved.rows.map(withId));
      if (saved.discount !== undefined) setDiscount(saved.discount);
      if (saved.gst !== undefined) setGst(saved.gst);
    } else {
      setRows(DEFAULT_ROWS.map(withId));
    }
    loadedRef.current = true;
  }, []);

  // Persist to localStorage whenever the quote changes (after initial load).
  useEffect(() => {
    if (!loadedRef.current || rows === null) return;
    try {
      localStorage.setItem(
        QUOTE_KEY,
        JSON.stringify({
          rows: rows.map((r) => ({ item: r.item, type: r.type, qty: r.qty, rate: r.rate })),
          discount,
          gst,
        })
      );
    } catch (e) {}
  }, [rows, discount, gst]);

  if (rows === null) return null; // avoid a flash of empty/default rows before load

  function updateRow(id, field, value) {
    setRows((rs) => rs.map((r) => (r.id === id ? { ...r, [field]: value } : r)));
  }

  function removeRow(id) {
    setRows((rs) => rs.filter((r) => r.id !== id));
  }

  function addRow() {
    setRows((rs) => [...rs, withId({})]);
  }

  const computed = rows.map((r) => {
    const qty = parseFloat(r.qty) || 0;
    const rate = parseFloat(r.rate) || 0;
    return { ...r, amount: qty * rate };
  });
  const subtotal = computed.reduce((sum, r) => sum + r.amount, 0);
  const discountPct = parseFloat(discount) || 0;
  const gstPct = parseFloat(gst) || 0;
  const discountAmt = subtotal * (discountPct / 100);
  const afterDiscount = subtotal - discountAmt;
  const gstAmt = afterDiscount * (gstPct / 100);
  const grandTotal = afterDiscount + gstAmt;

  function handlePrint() {
    window.print();
  }

  function handleDownload() {
    const lines = [
      'RUDRA ELECTRONICS — QUOTATION',
      CONTACT.addressShort,
      `Phone: ${CONTACT.phone} / ${CONTACT.altPhone}`,
      '',
      'Item | Type | Qty | Rate | Amount',
      '---------------------------------------',
    ];
    computed.forEach((r) => {
      lines.push(`${r.item || '-'} | ${r.type} | ${r.qty} | ₹${r.rate} | ${formatINR(r.amount)}`);
    });
    lines.push('---------------------------------------');
    lines.push('Subtotal: ' + formatINR(subtotal));
    lines.push('Discount: − ' + formatINR(discountAmt));
    lines.push('GST: + ' + formatINR(gstAmt));
    lines.push('TOTAL: ' + formatINR(grandTotal));
    lines.push('', 'This is an instant estimate. Final pricing confirmed after a free site visit.');

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Rudra-Electronics-Quotation.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function buildQuoteSummary() {
    const lines = computed.map((r) => `${r.item || 'Item'} (${r.type}) x${r.qty} @ ₹${r.rate} = ${formatINR(r.amount)}`);
    lines.push('Subtotal: ' + formatINR(subtotal));
    lines.push('Discount: − ' + formatINR(discountAmt));
    lines.push('GST: + ' + formatINR(gstAmt));
    lines.push('TOTAL: ' + formatINR(grandTotal));
    return lines.join('\n');
  }

  async function handleEmailSubmit(e) {
    e.preventDefault();
    const nameOk = qName.trim().length >= 2;
    const mobileOk = /^[6-9]\d{9}$/.test(qMobile.trim());
    setQErrors({ name: !nameOk, mobile: !mobileOk });
    setEmailStatus('idle');
    if (!nameOk || !mobileOk) return;

    setEmailStatus('sending');
    try {
      const result = await submitToWeb3Forms({
        subject: 'New Quotation Request — Rudra Electronics',
        from_name: 'Rudra Electronics Website',
        name: qName,
        mobile: qMobile,
        quote_details: buildQuoteSummary(),
      });
      if (result.success) {
        setEmailStatus('success');
        setQName('');
        setQMobile('');
      } else {
        setEmailStatus('error');
      }
    } catch (err) {
      setEmailStatus('error');
    }
  }

  return (
    <section className="section section-alt" id="quotation">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Instant estimate</p>
          <h2 className="section-title">Build your own quotation</h2>
          <p className="section-lead">Add products and labour to get an instant estimate. This is a planning tool — your final quote is confirmed after a free site visit.</p>
        </Reveal>

        <Reveal className="quote-tool">
          <div className="quote-table-wrap">
            <table className="quote-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Type</th>
                  <th>Qty</th>
                  <th>Rate (₹)</th>
                  <th>Amount (₹)</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {computed.map((r) => (
                  <tr key={r.id}>
                    <td>
                      <input type="text" className="q-item" placeholder="e.g. CCTV Camera" value={r.item} onChange={(e) => updateRow(r.id, 'item', e.target.value)} />
                    </td>
                    <td>
                      <select className="q-type" value={r.type} onChange={(e) => updateRow(r.id, 'type', e.target.value)}>
                        <option value="product">Product</option>
                        <option value="labour">Labour</option>
                      </select>
                    </td>
                    <td>
                      <input type="number" className="q-qty" min="0" step="1" value={r.qty} onChange={(e) => updateRow(r.id, 'qty', e.target.value)} />
                    </td>
                    <td>
                      <input type="number" className="q-rate" min="0" step="1" value={r.rate} onChange={(e) => updateRow(r.id, 'rate', e.target.value)} />
                    </td>
                    <td className="q-amount">{formatINR(r.amount)}</td>
                    <td>
                      <button type="button" className="quote-remove" aria-label="Remove line item" onClick={() => removeRow(r.id)}>
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-outline btn-sm" type="button" onClick={addRow}>
              + Add Line Item
            </button>
          </div>

          <div className="quote-summary">
            <div className="field">
              <label htmlFor="qDiscount">Discount (%)</label>
              <input type="number" id="qDiscount" min="0" max="100" value={discount} onChange={(e) => setDiscount(e.target.value)} />
            </div>
            <div className="field">
              <label htmlFor="qGst">GST (%)</label>
              <input type="number" id="qGst" min="0" max="28" value={gst} onChange={(e) => setGst(e.target.value)} />
            </div>
            <dl className="quote-totals">
              <div>
                <dt>Subtotal</dt>
                <dd>{formatINR(subtotal)}</dd>
              </div>
              <div>
                <dt>Discount</dt>
                <dd>− {formatINR(discountAmt)}</dd>
              </div>
              <div>
                <dt>GST</dt>
                <dd>+ {formatINR(gstAmt)}</dd>
              </div>
              <div className="quote-grand">
                <dt>Total</dt>
                <dd>{formatINR(grandTotal)}</dd>
              </div>
            </dl>
            <div className="quote-actions">
              <button className="btn btn-primary" type="button" onClick={handlePrint}>
                🖨️ Print Quotation
              </button>
              <button className="btn btn-outline" type="button" onClick={handleDownload}>
                ⬇ Download Quote (.txt)
              </button>
            </div>
            <p className="hint">Quotes are saved to this device automatically so you can pick up where you left off.</p>

            <form className="quote-email-form" onSubmit={handleEmailSubmit} noValidate>
              <p className="hint" style={{ margin: '18px 0 10px', fontWeight: 600, color: 'var(--text)' }}>
                Send this quote request to us
              </p>
              <div className={`field${qErrors.name ? ' has-error' : ''}`}>
                <label htmlFor="qName">Your Name *</label>
                <input type="text" id="qName" value={qName} onChange={(e) => setQName(e.target.value)} />
              </div>
              <div className={`field${qErrors.mobile ? ' has-error' : ''}`}>
                <label htmlFor="qMobile">Mobile Number *</label>
                <input type="tel" id="qMobile" placeholder="98765 43210" value={qMobile} onChange={(e) => setQMobile(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={emailStatus === 'sending'}>
                {emailStatus === 'sending' ? 'Sending…' : '📩 Send Quote Request to Us'}
              </button>
              {emailStatus === 'success' && (
                <p className="form-success" role="status">
                  ✅ Sent! We'll call you shortly to confirm this quote.
                </p>
              )}
              {emailStatus === 'error' && (
                <p className="form-error-banner" role="alert">
                  ⚠️ Couldn't send automatically — please WhatsApp us this quote at <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
