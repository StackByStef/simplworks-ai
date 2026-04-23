'use client';

/**
 * THE INSIDER modal — lazy-loaded via next/dynamic from Hero.jsx.
 *
 * Only mounts when a visitor clicks THE INSIDER button; the modal JS
 * chunk is not downloaded on initial page load. Every visitor who
 * never clicks saves the modal's bytes from their First Contentful
 * Paint window.
 *
 * Props:
 *   onClose — called on backdrop click, close-button click, and
 *             TOC-item click (to dismiss the overlay on navigation).
 *             ESC key handling stays in Hero.jsx since it requires
 *             knowledge of insiderOpen state.
 */

const TOC = [
  { href: '#shift', title: 'The Shift', desc: 'What changed while you were building your business' },
  { href: '#solution', title: 'The Fix', desc: 'Get your website working as hard as you do' },
  { href: '#tdv', title: 'Top Dog Vending', desc: 'A SimplWorks case study' },
  { href: '#process', title: 'The Process', desc: 'How the work gets done' },
  { href: '#stephanie', title: 'The Builder', desc: '20 years in business. One new mission.' },
  { href: '#faq', title: "FAQ's", desc: 'Questions prospects actually ask' },
  { href: '#reach', title: 'Reach Me', desc: 'Start the conversation' },
];

export default function InsiderModal({ onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modal-overlay open"
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
          onClick={onClose}
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
            onClick={onClose}
          >
            <p className="toc-title">{item.title}</p>
            <p className="toc-desc">{item.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
