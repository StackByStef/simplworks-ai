'use client';

/**
 * THE FIX — Belief 3 (Solution/Mechanism) + partial Belief 4 (Scope setup)
 *
 * Condensed in-page version + full-length editorial overlay.
 * Entity-anchor definition block + mechanism pull-quote are load-bearing
 * for SEO/AEO/GEO and render verbatim in both in-page and overlay views.
 */

import { useEffect, useState } from 'react';
import Brand from './Brand';

export default function TheFix() {
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
      <section className="section section-black" id="solution">
        <div className="section-inner">
          <div className="section-divider"></div>
          <p className="section-label">The Fix</p>
          <h2 className="section-heading">
            Get Your Website Working as Hard as You Do.
          </h2>

          {/* Entity anchor — verbatim, load-bearing for GEO/AEO */}
          <p className="beat" style={{ color: 'var(--white)', fontWeight: 700 }}>
            <Brand /> builds custom websites, one at a time, by hand. No
            templates. No page builders. Every site is built by Stephanie
            Belote, a 20-year business operator who builds websites the way
            a business owner needs them built: around the customer, around
            the sale, and around the way a real business actually runs.
          </p>

          {/* Mechanism pull-quote — verbatim */}
          <p className="mechanism-quote">
            Every site is built by hand around one question: will this bring
            you customers?
          </p>

          <p className="beat drop-cap-manual">
            <span className="dc-letter">C</span>
            <span className="dc-lines">
              ustomers find you before they find your competitor. Not
              because you chased them. Because when they searched for what
              you do, your business was the one that showed up.
            </span>
          </p>

          <p className="beat">
            The phone rings from people you didn&apos;t cold call. The inbox
            has messages from people you&apos;ve never met. They found you
            online.
          </p>

          <p className="beat">
            You stop wondering whether your website is costing you business.
            You know it&apos;s working because you can see it.
          </p>

          <p className="beat">
            You&apos;ve spent years earning your reputation in person.
          </p>

          <p className="beat-strong">It&apos;s time your website caught up.</p>

          <button
            type="button"
            className="continue-reading"
            onClick={() => setOverlayOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={overlayOpen}
            aria-controls="fix-editorial-overlay"
          >
            Continue reading &rarr;
          </button>
        </div>
      </section>

      <div
        id="fix-editorial-overlay"
        className={`editorial-overlay${overlayOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="The Fix — Full Essay"
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
          <p className="section-label">The Fix</p>
          <h2 className="section-heading">
            Get Your Website Working as Hard as You Do.
          </h2>

          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            <Brand /> builds custom websites, one at a time, by hand. No
            templates. No page builders. Every site is built by Stephanie
            Belote, a 20-year business operator who builds websites the way
            a business owner needs them built: around the customer, around
            the sale, and around the way a real business actually runs.
          </p>

          <p className="mechanism-quote">
            Every site is built by hand around one question: will this bring
            you customers?
          </p>

          <p className="drop-cap-manual">
            <span className="dc-letter">C</span>
            <span className="dc-lines">
              ustomers find you before they find your competitor.
            </span>
          </p>

          <p>
            Not because you chased them. Because when they searched for what
            you do, your business was the one that showed up.
          </p>

          <p>
            You send someone your link and you feel good about it. No
            hesitation. No apology. No &ldquo;we&apos;re working on
            that.&rdquo; The site looks like the business you&apos;ve
            actually built.
          </p>

          <p>
            The phone rings from people you didn&apos;t cold call. The inbox
            has messages from people you&apos;ve never met. They found you.
            They read your site. They reached out because what they saw
            matched what they needed.
          </p>

          <div className="gold-rule-block">
            <p style={{ color: 'var(--white)', fontWeight: 700 }}>
              You stop wondering whether your website is costing you
              business. You know it&apos;s working because you can see it.
              Leads come in. Real people reaching out because they found
              you online.
            </p>
          </div>

          <p>
            You stop paying for things that don&apos;t produce results.{' '}
            <em>
              No more agencies that disappear after launch. No more
              dashboards full of numbers that don&apos;t connect to revenue.
              No more guessing.
            </em>
          </p>

          <p>
            And the business owners who used to show up ahead of you online?
            They&apos;re still running the same site they had five years
            ago.
          </p>

          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            You&apos;re not.
          </p>

          <p>
            You&apos;ve spent years earning your reputation in person.
          </p>

          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            It&apos;s time your website caught up.
          </p>
        </div>
      </div>
    </>
  );
}
