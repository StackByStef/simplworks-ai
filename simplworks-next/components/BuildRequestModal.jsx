'use client';

/**
 * Build Request modal — lazy-loaded from BuildCta.jsx.
 * Same pattern as FrictionAuditModal (close/ESC/backdrop, thank-you state)
 * with different fields and different thank-you copy.
 */

import { useEffect, useState } from 'react';

export default function BuildRequestModal({ onClose }) {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    business_name: '',
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
    if (!fields.business_name.trim()) {
      setStatus('error');
      setErrorMsg('Your business name is required.');
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
        body: JSON.stringify({ ...fields, request_type: 'build' }),
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
      aria-label="Build request"
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
            <p className="form-thankyou-headline">Let&apos;s build.</p>
            <p className="form-thankyou-body">
              You&apos;ll hear back from me within 24 hours to start the
              conversation. It&apos;ll come from{' '}
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
            <p className="modal-label">Tell Me What You&apos;re Building</p>

            <form
              className="form-in-modal"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="form-field">
                <label htmlFor="build-name" className="form-label">
                  Your name
                </label>
                <input
                  id="build-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={fields.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="form-input"
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="form-field">
                <label htmlFor="build-email" className="form-label">
                  Your email
                </label>
                <input
                  id="build-email"
                  name="email"
                  type="email"
                  placeholder="Your email"
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
                <label htmlFor="build-phone" className="form-label">
                  Your phone
                </label>
                <input
                  id="build-phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone"
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
                <label htmlFor="build-biz" className="form-label">
                  Your business name
                </label>
                <input
                  id="build-biz"
                  name="business_name"
                  type="text"
                  placeholder="Your business name"
                  value={fields.business_name}
                  onChange={handleChange}
                  required
                  autoComplete="organization"
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
                {status === 'submitting' ? 'Sending…' : "Let's Build It →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
