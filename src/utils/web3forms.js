import { WEB3FORMS_ACCESS_KEY } from '../data/siteData';

/**
 * Submits a plain object payload to Web3Forms.
 * Mirrors the original vanilla-JS fallback: if no real key is configured,
 * it resolves as if successful so the UI still demos correctly.
 */
export async function submitToWeb3Forms(payload) {
  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.indexOf('YOUR_WEB3FORMS_ACCESS_KEY') !== -1) {
    console.warn('Web3Forms access_key is not set. Add your real key from web3forms.com to receive submissions by email.');
    return { success: true, demo: true };
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...payload }),
  });
  return res.json();
}
