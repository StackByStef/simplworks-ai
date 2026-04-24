'use client';

/**
 * HERO — Belief 1 (Opening/Identity) + Belief 2 (Self-selection)
 *
 * Contains:
 * - Masthead wordmark (SimplWorks.)
 * - Typewriter brand name (SIMPL in white, WORKS in gold gradient) —
 *   no space, matches the "SimplWorks." masthead for visual congruence.
 * - Tagline, subhead, callout
 * - DC Copy Changes v1.1 Change 1 — hero-filter line
 * - THE INSIDER button (with shimmer-on-load defined in globals.css).
 *   The modal itself is lazy-loaded: InsiderModal.jsx is dynamically
 *   imported only after the user clicks THE INSIDER. Modal bytes are
 *   excluded from the initial page payload.
 * - Scrolling ticker (pinned to bottom of hero)
 *
 * Respects prefers-reduced-motion.
 */

import { useEffect, useState, Fragment } from 'react';
import dynamic from 'next/dynamic';

const InsiderModal = dynamic(() => import('./InsiderModal'), {
  ssr: false,
  loading: () => null,
});

const WORD1 = 'SIMPL';
const WORD2 = 'WORKS';
const FULL_TEXT = WORD1 + WORD2;

const TICKER_ITEMS = [
  '97% OF WEBSITE VISITORS NEVER CONVERT',
  '70% OF BUSINESS HOMEPAGES HAVE NO CALL-TO-ACTION',
  'CHATGPT HAS 400M+ WEEKLY USERS',
  'GOOGLE AI OVERVIEWS APPEAR ON 47% OF SEARCHES',
  '58% OF GEN Z PREFERS AI OVER GOOGLE',
  'YOUR COMPETITORS ARE ALREADY OPTIMIZING FOR THIS',
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

    // Defer typewriter start until after window.load so Chrome can
    // commit LCP on the hero-sub paint without counting typewriter
    // animation frames as LCP-window activity. The typewriter still
    // runs once per page load — just a beat later. If the page is
    // already fully loaded (fast connection, cached assets), kick
    // off immediately with the original 800ms warm-up pause.
    const kickoff = () => {
      if (stopped) return;
      timers.push(setTimeout(typeWord1, 800));
    };

    let loadHandler = null;
    if (document.readyState === 'complete') {
      kickoff();
    } else {
      loadHandler = kickoff;
      window.addEventListener('load', loadHandler, { once: true });
    }

    return () => {
      stopped = true;
      if (loadHandler) window.removeEventListener('load', loadHandler);
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
            The game changed while most business owners{' '}
            <br />
            {' '}were busy running their business.
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

      {/* THE INSIDER modal — dynamically imported, mounted only when
          the user has clicked THE INSIDER (insiderOpen is true). */}
      {insiderOpen && <InsiderModal onClose={() => setInsiderOpen(false)} />}
    </>
  );
}
