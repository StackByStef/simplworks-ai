'use client';

/**
 * THE PROCESS — Belief 4 (Scope) + Belief 3 reinforcement (Mechanism specifics)
 *
 * Condensed in-page version + full-length editorial overlay
 * (Continue reading → pattern mirrors TheBuilder.jsx exactly).
 */

import { useEffect, useState } from 'react';
import Brand from './Brand';

export default function TheProcess() {
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
      <section className="section section-black" id="process">
        <div className="section-inner">
          <div className="section-divider"></div>
          <p className="section-label">The Process</p>
          <h2 className="section-heading">How the Work Gets Done.</h2>

          <p className="beat drop-cap-manual">
            <span className="dc-letter">E</span>
            <span className="dc-lines">
              very <Brand /> project follows the same path. No surprises.
              No scope creep.
            </span>
          </p>

          <div className="gold-rule-block">
            <p className="gold-rule-label">Map</p>
            <p>
              You tell me about your business. By the end of the
              conversation, you see the plan and know exactly what&apos;s
              being built.
            </p>
          </div>

          <div className="gold-rule-block">
            <p className="gold-rule-label">Build</p>
            <p>
              About a week later, your business is online the way it should
              have looked all along. Written in your language. Built around
              your customer.
            </p>
          </div>

          <div className="gold-rule-block">
            <p className="gold-rule-label">Launch</p>
            <p>
              Your site is live. Leads come in. You get full documentation
              of what was built and how it works.
            </p>
          </div>

          <p className="beat-strong" style={{ marginTop: '2.5rem' }}>
            One week. One <span style={{ color: 'var(--gold)' }}>builder</span>.
            Everything handled.
          </p>

          <button
            type="button"
            className="curious-btn"
            onClick={() => setOverlayOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={overlayOpen}
            aria-controls="process-editorial-overlay"
          >
            Continue reading &rarr;
          </button>
        </div>
      </section>

      <div
        id="process-editorial-overlay"
        className={`editorial-overlay${overlayOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="The Process — Full Detail"
      >
        <button
          type="button"
          className="editorial-overlay-close"
          onClick={() => setOverlayOpen(false)}
          aria-label="Close full detail"
        >
          &times;
        </button>
        <div className="editorial-overlay-inner">
          <p className="section-label">The Process</p>
          <h2 className="section-heading">How the Work Gets Done.</h2>

          <p className="drop-cap-manual">
            <span className="dc-letter">E</span>
            <span className="dc-lines">
              very <Brand /> project follows the same path. No surprises.
              No scope creep. No &ldquo;we&apos;ll figure it out as we
              go.&rdquo; You know what&apos;s happening at every step
              because the process is built to be clear from the start.
            </span>
          </p>

          <div className="gold-rule-block">
            <p className="gold-rule-label">Map</p>
            <p>
              You tell us about your business. What you do, who your
              customers are, how they find you, and what makes you different
              from the next name on the list.
            </p>
            <p>
              This isn&apos;t a questionnaire you fill out and never hear
              about again. It&apos;s a conversation. By the end of it, you
              see the plan. You know exactly what&apos;s being built and
              why.
            </p>
          </div>

          <div className="gold-rule-block">
            <p className="gold-rule-label">Build</p>
            <p>
              You don&apos;t touch a template. You don&apos;t manage a
              project. You don&apos;t sit through weeks of revisions
              wondering when something will actually happen.
            </p>
            <p>
              About a week later, you see your business online the way it
              should have looked all along. Written in your language.
              Designed around your brand. Built so customers can find you.
            </p>
          </div>

          <div className="gold-rule-block">
            <p className="gold-rule-label">Launch</p>
            <p>
              Your site is live. Leads start coming in. Your business shows
              up when people search for what you do.
            </p>
            <p>
              You get a full set of guides explaining everything that was
              built, why it was built, and what to do next. No mystery. No
              confusion. You understand what you have and how it works.
            </p>
          </div>

          <p style={{ color: 'var(--white)', fontWeight: 700, marginTop: '2.5rem' }}>
            Your site is built from scratch around your customer, so
            customers can find you, without scope creep, template limits,
            or a site that goes dark after launch.
          </p>

          <p className="beat-strong" style={{ marginTop: '2.5rem' }}>
            One week. One builder. Everything handled.
          </p>
        </div>
      </div>
    </>
  );
}
