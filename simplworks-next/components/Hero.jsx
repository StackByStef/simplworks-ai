'use client';

/**
 * HERO — Belief 1 (Opening/Identity) + Belief 2 (Self-selection)
 *
 * Contains:
 * - Masthead wordmark (SimplWorks.)
 * - Typewriter brand name (SIMPLE in white, WORKS in gold gradient)
 * - Tagline, subhead, callout
 * - DC Copy Changes v1.1 Change 1 — hero-filter line
 * - THE INSIDER button + modal (TOC with 7 items including FAQ per Change 5a)
 * - Scrolling ticker (pinned to bottom of hero)
 *
 * Respects prefers-reduced-motion.
 */

import { useEffect, useState, Fragment } from 'react';

const WORD1 = 'SIMPLE';
const WORD2 = ' WORKS';
const FULL_TEXT = WORD1 + WORD2;

const TICKER_ITEMS = [
  '97% OF WEBSITE VISITORS NEVER CONVERT',
  '70% OF BUSINESS HOMEPAGES HAVE NO CALL-TO-ACTION',
  'CHATGPT HAS 400M+ WEEKLY USERS',
  'GOOGLE AI OVERVIEWS APPEAR ON 47% OF SEARCHES',
  '58% OF GEN Z PREFERS AI OVER GOOGLE',
  'YOUR COMPETITORS ARE ALREADY OPTIMIZING FOR THIS',
];

const TOC = [
  { href: '#shift', title: 'The Shift', desc: 'What changed while you were building your business' },
  { href: '#solution', title: 'The Fix', desc: 'Get your website working as hard as you do' },
  { href: '#tdv', title: 'Top Dog Vending', desc: 'A SimplWorks case study' },
  { href: '#process', title: 'The Process', desc: 'How the work gets done' },
  { href: '#stephanie', title: 'The Builder', desc: '20 years in business. One new mission.' },
  { href: '#faq', title: 'FAQ', desc: 'Questions prospects actually ask' },
  { href: '#reach', title: 'Reach Me', desc: 'Start the conversation' },
];

export default function Hero() {
  const [typedLength, setTypedLength] = useState(0);
  const [showPeriod, setShowPeriod] = useState(false);
  const [cursorFaded, setCursorFaded] = useState(false);
  const [cursorRemoved, setCursorRemoved] = useState(false);
  const [insiderOpen, setInsiderOpen] = useState(false);

  // Typewriter effect
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedLength(FULL_TEXT.length);
      setShowPeriod(true);
      setCursorRemoved(true);
      return;
    }

    let typed = 0;
    let stopped = false;
    const timers = [];

    const finishTypewriter = () => {
      setShowPeriod(true);
      timers.push(
        setTimeout(() => {
          if (stopped) return;
          setCursorFaded(true);
          timers.push(
            setTimeout(() => {
              if (!stopped) setCursorRemoved(true);
            }, 300)
          );
        }, 400)
      );
    };

    const typeWord2 = () => {
      const id = setInterval(() => {
        if (stopped) {
          clearInterval(id);
          return;
        }
        typed++;
        setTypedLength(typed);
        if (typed >= FULL_TEXT.length) {
          clearInterval(id);
          finishTypewriter();
        }
      }, 70);
      timers.push(id);
    };

    const typeWord1 = () => {
      const id = setInterval(() => {
        if (stopped) {
          clearInterval(id);
          return;
        }
        typed++;
        setTypedLength(typed);
        if (typed >= WORD1.length) {
          clearInterval(id);
          timers.push(setTimeout(typeWord2, 600));
        }
      }, 70);
      timers.push(id);
    };

    timers.push(setTimeout(typeWord1, 800));

    return () => {
      stopped = true;
      timers.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
    };
  }, []);

  // Body scroll lock when modal open
  useEffect(() => {
    if (insiderOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [insiderOpen]);

  // ESC to close modal
  useEffect(() => {
    if (!insiderOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setInsiderOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [insiderOpen]);

  const closeModal = () => setInsiderOpen(false);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  // Derived typewriter state
  const typedWord1 = FULL_TEXT.slice(0, Math.min(typedLength, WORD1.length));
  const typedWord2 =
    typedLength > WORD1.length ? FULL_TEXT.slice(WORD1.length, typedLength) : '';

  return (
    <>
      <div className="masthead">
        <span className="wordmark">
          <span className="wordmark-simpl">Simpl</span>
          <span className="wordmark-works">Works</span>
          <span className="wordmark-period">.</span>
        </span>
      </div>

      <section className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span>
              {typedWord1}
              {typedWord2 && <span className="brand-gold">{typedWord2}</span>}
            </span>
            {showPeriod && <span className="brand-period">.</span>}
            {!cursorRemoved && (
              <span className={`cursor${cursorFaded ? ' fade' : ''}`}></span>
            )}
          </div>

          <p className="tagline">
            <span className="tagline-l1">Is Your Website</span>{' '}
            <span className="tagline-l2">Pulling Its Weight?</span>
          </p>

          <p className="hero-sub">
            The world moved online while most business owners
            <br />
            were busy running their business.
          </p>

          <p className="hero-callout">
            You&apos;re here because you&apos;re ready to move.
          </p>

          {/* DC Change 1 — Hero filter line (Belief 2 self-select) */}
          <p className="hero-filter">
            For business owners who&apos;ve built something real, and are
            tired of a website that&apos;s costing them customers.
          </p>

          <button
            type="button"
            className="insider-btn"
            onClick={() => setInsiderOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={insiderOpen}
            aria-controls="insider-modal"
          >
            THE INSIDER
          </button>
        </div>

        {/* Ticker pinned to bottom of hero */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <Fragment key={i}>
                <span className="ticker-item">{item}</span>
                <span className="ticker-dot" />
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* THE INSIDER modal */}
      <div
        className={`modal-overlay${insiderOpen ? ' open' : ''}`}
        id="insider-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Inside This Issue"
        onClick={handleOverlayClick}
      >
        <div className="modal">
          <button
            type="button"
            className="modal-close"
            onClick={closeModal}
            aria-label="Close"
          >
            &times;
          </button>
          <p className="modal-label">The Insider</p>

          {TOC.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="toc-item"
              onClick={closeModal}
            >
              <p className="toc-title">{item.title}</p>
              <p className="toc-desc">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
