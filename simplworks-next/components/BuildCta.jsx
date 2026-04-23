'use client';

/**
 * BUILD IT button — opens the Build Request modal.
 * Same pattern as AuditCta: scroll-into-view shimmer + lazy modal.
 */

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const BuildRequestModal = dynamic(() => import('./BuildRequestModal'), {
  ssr: false,
  loading: () => null,
});

export default function BuildCta() {
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
        BUILD IT
      </button>
      {open && <BuildRequestModal onClose={() => setOpen(false)} />}
    </>
  );
}
