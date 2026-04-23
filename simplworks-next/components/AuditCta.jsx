'use client';

/**
 * FIX IT button — opens the Friction Audit modal.
 *
 * Two client-side behaviors wrapped here so ReachMe.jsx can stay
 * server-rendered:
 *   1. IntersectionObserver triggers a one-shot shimmer via .cta-btn--in-view
 *      the first time the button crosses into view. This replaces the
 *      "shimmer at 3s after page load" pattern used by THE INSIDER
 *      (which is above the fold). Reach Me is far down the page — a
 *      load-timed shimmer would play unseen.
 *   2. Modal is lazy-loaded via next/dynamic, ssr:false, and only mounts
 *      when the button is clicked.
 */

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const FrictionAuditModal = dynamic(() => import('./FrictionAuditModal'), {
  ssr: false,
  loading: () => null,
});

export default function AuditCta() {
  const buttonRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (inView) return;
    const el = buttonRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={`cta-btn${inView ? ' cta-btn--in-view' : ''}`}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        FIX IT
      </button>
      {open && <FrictionAuditModal onClose={() => setOpen(false)} />}
    </>
  );
}
