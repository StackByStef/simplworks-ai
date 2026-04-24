'use client';

/**
 * Friction Audit request modal — lazy-loaded from AuditCta.jsx.
 * Visually mirrors THE INSIDER modal (same overlay / card / close pattern).
 * Contains the form + inline thank-you state (no page navigation).
 *
 * Close behavior: backdrop click, ESC key, X button all close.
 * Close resets form state so reopening yields a fresh form.
 */

import { useEffect, useState } from 'react';

export default function FrictionAuditModal({ onClose }) {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    website_url: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

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

    if (!fields.name.trim()) {
      setStatus('error');
      setErrorMsg('Your name is required.');
      return;
    }
    if (!fields.website_url.trim()) {
      setStatus('error');
      setErrorMsg('Your website is required.');
      return;
    }
    if (!fields.email.trim() && !fields.phone.trim()) {
      setStatus('error');
      setErrorMsg(
        "One way or the other. Email or phone. Can't reach you with nothing."
      );
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/friction-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, request_type: 'audit' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <div
      className="modal-overlay open"
      role="dialog"
      aria-modal="true"
      aria-label="Walk-Through request"
      onClick={handleOverlayClick}
    >
      <div className="modal modal-form">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {status === 'success' ? (
          <div className="form-thankyou">
            <p className="form-thankyou-headline">Got it.</p>
            <p className="form-thankyou-body">
              You&apos;ll hear back from me within 24 hours with your walk-through.
              It&apos;ll come from{' '}
              <span className="form-thankyou-email">
                stephanie@simplworks.ai
              </span>
              . Check your inbox and your spam folder just in case.
            </p>
            <p className="form-thankyou-signoff">&mdash; Stephanie</p>
            <p className="form-thankyou-phone">
              Or if you&apos;d rather talk: 678.617.4598
            </p>
          </div>
        ) : (
          <>
            <p className="modal-label">The Walk-Through</p>

            <form
              className="form-in-modal"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-field">
                <label htmlFor="audit-name" className="form-label">
                  Name
                </label>
                <input
                  id="audit-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={fields.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="form-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="form-field">
                <label htmlFor="audit-email" className="form-label">
                  Email
                </label>
                <input
                  id="audit-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={fields.email}
                  onChange={handleChange}
                  autoComplete="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  className="form-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="form-field">
                <label htmlFor="audit-phone" className="form-label">
                  Phone
                </label>
                <input
                  id="audit-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={fields.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="form-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <p className="form-caption">
                Give me email, phone, or both. Your choice. Just give me one.
              </p>

              <div className="form-field">
                <label htmlFor="audit-url" className="form-label">
                  Website
                </label>
                <input
                  id="audit-url"
                  name="website_url"
                  type="text"
                  placeholder="business.com"
                  value={fields.website_url}
                  onChange={handleChange}
                  required
                  autoComplete="url"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck="false"
                  className="form-input"
                  disabled={status === 'submitting'}
                />
              </div>

              {errorMsg && (
                <p className="form-error" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Send It →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
