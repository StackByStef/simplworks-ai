'use client';

/**
 * The real Reach Me CTA. Replaces the mailto: link with a 3-field form
 * (URL, email, name-optional) that POSTs to /api/friction-audit.
 *
 * Submission flow:
 *   idle → submitting → success  (or → error, keep form open, let user retry)
 *
 * The success state replaces the form with a confirmation card so the
 * visitor knows the request landed.
 */

import { useState } from 'react';

export default function FrictionAuditForm() {
  const [fields, setFields] = useState({ url: '', email: '', name: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMsg('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/friction-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Could not send. Try again.');
      }

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="friction-success" role="status" aria-live="polite">
        <p className="friction-success-title">Got it.</p>
        <p className="friction-success-body">
          Your audit will land in your inbox within 48 hours. Watch for a
          message from{' '}
          <span style={{ color: 'var(--gold)' }}>stephanie@simplworks.ai</span>.
        </p>
      </div>
    );
  }

  return (
    <form className="friction-form" onSubmit={handleSubmit} noValidate>
      <div className="friction-field">
        <label htmlFor="friction-url" className="friction-label">
          Your website URL
        </label>
        <input
          id="friction-url"
          name="url"
          type="url"
          placeholder="yourwebsite.com"
          value={fields.url}
          onChange={handleChange}
          required
          autoComplete="url"
          className="friction-input"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="friction-field">
        <label htmlFor="friction-email" className="friction-label">
          Your email
        </label>
        <input
          id="friction-email"
          name="email"
          type="email"
          placeholder="you@business.com"
          value={fields.email}
          onChange={handleChange}
          required
          autoComplete="email"
          className="friction-input"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="friction-field">
        <label htmlFor="friction-name" className="friction-label">
          Your name <span className="friction-optional">(optional)</span>
        </label>
        <input
          id="friction-name"
          name="name"
          type="text"
          value={fields.name}
          onChange={handleChange}
          autoComplete="name"
          className="friction-input"
          disabled={status === 'submitting'}
        />
      </div>

      {errorMsg && (
        <p className="friction-error" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        className="friction-submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Request My Audit →'}
      </button>
    </form>
  );
}
