'use client';

/**
 * TOP DOG VENDING — Belief 5 (Proof/Credentials)
 *
 * Case study with "For the technically curious" toggle that reveals
 * the What Shipped panel (Lighthouse scores + AEO/GEO indicators).
 *
 * Client component solely because of the toggle state.
 */

import { useState } from 'react';

export default function Tdv() {
  const [shippedOpen, setShippedOpen] = useState(false);

  return (
    <section className="section section-dark" id="tdv">
      <div className="section-inner">
        <div className="section-divider"></div>
        <p className="section-label">Top Dog Vending</p>
        <h2 className="section-heading">
          How Top Dog Vending Started Pulling
          <br />
          Its Weight in One Week.
        </h2>

        <p className="beat drop-cap">
          Emory and Ellie had spent months planning the launch of Top Dog
          Vending, a smart store company serving apartment communities and
          commercial properties across East Tennessee.
        </p>

        <p className="beat">The business was ready.</p>

        <p className="beat">Online, they didn&apos;t exist.</p>

        <p className="beat">
          They needed a website that looked like a real company, explained
          what they do clearly, and made it easy for property managers to
          reach out.
        </p>

        <p className="beat">And they needed it fast.</p>

        <p className="beat">
          Not in six weeks.
          <br />
          Not after twelve rounds of revisions.
        </p>

        <p className="beat-strong">Now.</p>

        <div className="gold-rule-block">
          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            Every page was written and built by hand.
          </p>
          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            This wasn&apos;t a template. Every page, every word was built
            specifically for their business and measured against one
            question: will this bring in customers?
          </p>
        </div>

        <p className="beat">
          The site was designed so that when someone searches for what Top
          Dog Vending does, they find them. When someone asks an AI
          assistant about smart stores in Knoxville, the business shows up
          in the answer.
        </p>

        <p className="beat">
          The site launched clean, professional, and ready to grow with the
          company.
        </p>

        <p
          className="section-label"
          style={{ marginTop: '3rem', marginBottom: '1.5rem' }}
        >
          At Launch
        </p>
        <p className="beat gold-first">Built and live in one week.</p>
        <p className="beat gold-first">
          Customers can find the business online.
        </p>
        <p className="beat gold-first">
          AI assistants can find and recommend them.
        </p>
        <p className="beat gold-first">
          Every lead goes directly to the owner.
        </p>

        <button
          type="button"
          className="curious-btn"
          onClick={() => setShippedOpen((v) => !v)}
          aria-expanded={shippedOpen}
          aria-controls="shipped-panel"
        >
          {shippedOpen ? 'Hide the detail ←' : 'For the technically curious →'}
        </button>

        <div
          id="shipped-panel"
          className={`shipped-panel${shippedOpen ? ' open' : ''}`}
        >
          <div className="gold-rule-block">
            <p className="gold-rule-label">What Shipped</p>
          </div>
          <div className="shipped-grid">
            <div className="shipped-item">
              <p className="shipped-num">100</p>
              <p className="shipped-label">Google Performance</p>
            </div>
            <div className="shipped-item">
              <p className="shipped-num">100</p>
              <p className="shipped-label">Google SEO</p>
            </div>
            <div className="shipped-item">
              <p className="shipped-num">100</p>
              <p className="shipped-label">Best Practices</p>
            </div>
            <div className="shipped-item">
              <p className="shipped-num">AEO-Ready</p>
              <p className="shipped-label">
                Entity-Structured Pages
                <br />
                GEO-Indexed Content
              </p>
            </div>
            <div className="shipped-item">
              <p className="shipped-num">10</p>
              <p className="shipped-label">AI-Optimized FAQ Items</p>
            </div>
            <div className="shipped-item">
              <p className="shipped-num">3</p>
              <p className="shipped-label">Articles at Launch</p>
            </div>
          </div>
        </div>

        <div className="testimonial" style={{ marginTop: '3rem' }}>
          <p className="testimonial-quote">
            &ldquo;Creating a website was one of our biggest complications
            when starting our business. Working with Stephanie made our life
            so much easier. She was quick, accurate, and made our website
            even more perfect than we imagined it would be. I will use her
            services for anything I need in the future!&rdquo;
          </p>
          <p className="testimonial-attr">&mdash; Ellie, Top Dog Vending</p>
        </div>

        <a
          href="https://www.topdogvendingtn.com"
          target="_blank"
          rel="noopener noreferrer"
          className="tdv-link"
        >
          Visit topdogvendingtn.com &rarr;
        </a>
      </div>
    </section>
  );
}
