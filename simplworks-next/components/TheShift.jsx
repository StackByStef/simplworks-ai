'use client';

/**
 * THE SHIFT — Belief 1 continuation / Belief 2 setup
 *
 * Condensed in-page version + full-length editorial overlay
 * (Continue reading → pattern mirrors TheBuilder.jsx exactly).
 */

import { useEffect, useState } from 'react';

export default function TheShift() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    if (overlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [overlayOpen]);

  useEffect(() => {
    if (!overlayOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setOverlayOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [overlayOpen]);

  return (
    <>
      <section className="section section-dark" id="shift">
        <div className="section-inner">
          <p className="section-label">The Shift</p>
          <h2 className="section-heading">
            The Game Changed While You Were Running Your Business.
          </h2>

          <p className="beat drop-cap-manual">
            <span className="dc-letter">Y</span>
            <span className="dc-lines">
              ou know you need to do something.
              <br />
              ou can feel it.
            </span>
          </p>

          <p className="beat">
            Customers are looking for businesses online before they ever
            pick up the phone. If what they find doesn&apos;t reflect what
            you&apos;ve built, they move on before you knew they were
            looking.
          </p>

          <p className="beat">
            You&apos;ve probably already paid someone who didn&apos;t
            deliver. Spent the money. Got nothing back.
          </p>

          <p className="beat">
            The game changed and nobody showed you the new rules.
          </p>

          <div className="pull-quote">
            <p>Now every pitch sounds like the last one that burned you.</p>
          </div>

          <p className="beat-strong">
            You&apos;re not behind because you failed. You&apos;re behind
            because you were busy building something real.
          </p>

          <button
            type="button"
            className="curious-btn"
            onClick={() => setOverlayOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={overlayOpen}
            aria-controls="shift-editorial-overlay"
          >
            Continue reading &rarr;
          </button>
        </div>
      </section>

      <div
        id="shift-editorial-overlay"
        className={`editorial-overlay${overlayOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="The Shift — Full Essay"
      >
        <button
          type="button"
          className="editorial-overlay-close"
          onClick={() => setOverlayOpen(false)}
          aria-label="Close full essay"
        >
          &times;
        </button>
        <div className="editorial-overlay-inner">
          <p className="section-label">The Shift</p>
          <h2 className="section-heading">
            The Game Changed While You Were Running Your Business.
          </h2>

          <p className="drop-cap-manual">
            <span className="dc-letter">Y</span>
            <span className="dc-lines">
              ou know you need to do something.
              <br />
              ou can feel it.
            </span>
          </p>

          <p>
            Customers are looking for businesses online before they ever
            pick up the phone, and if what they find doesn&apos;t reflect
            what you&apos;ve built, they move on before you knew they were
            looking.
          </p>

          <p>
            While you were working on your business, the rules changed.
            You&apos;ve probably already paid someone who didn&apos;t
            deliver. Spent the money, did the right thing, got nothing back.
          </p>

          <p className="editorial-pullquote">
            Now every pitch sounds like the last one that burned you.
          </p>

          <p>That skepticism is earned. But it&apos;s also expensive.</p>

          <p>
            Every month that goes by without your business showing up where
            your customers are looking, that&apos;s money walking to someone
            else.
          </p>

          <p>
            Not because you did anything wrong. Because the game changed and
            nobody showed you the new rules.
          </p>

          <p>You&apos;re not behind because you failed.</p>

          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            You&apos;re behind because you were busy building something
            real.
          </p>

          <p className="italic-close">
            The question is what are you going to do about it?
          </p>
        </div>
      </div>
    </>
  );
}
