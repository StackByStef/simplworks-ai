'use client';

/**
 * Client component so REACH ME can intercept clicks and dispatch
 * 'open-build-modal' to BuildCta, and so the two wordmarks can
 * smooth-scroll to the top of the page on click. Fallback hrefs
 * keep links functional without JS.
 */

export default function Footer() {
  const year = new Date().getFullYear();

  const handleReachClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-build-modal'));
  };

  const handleTopClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col footer-col-identity">
          <a
            href="#top"
            onClick={handleTopClick}
            className="footer-mark-link"
            aria-label="SimplWorks — back to top"
          >
            <span className="wordmark">
              <span className="wordmark-simpl">Simpl</span>
              <span className="wordmark-works">Works</span>
              <span className="wordmark-period">.</span>
            </span>
          </a>
          <p className="footer-tagline">Custom websites, built by hand.</p>
          <p className="footer-location">Knoxville, TN</p>
          <a
            href="#reach"
            onClick={handleReachClick}
            className="footer-label footer-label-reach"
          >
            Reach Me
          </a>
        </div>

        <div className="footer-col footer-col-direct">
          <p className="footer-label">Skip the Form</p>
          <p className="footer-email">
            <a href="mailto:stephanie@simplworks.ai">stephanie@simplworks.ai</a>
          </p>
          <p className="footer-phone">
            <a href="tel:+16786174598">678.617.4598</a>
          </p>
          <p className="footer-direct-caption">Real person. Real response.</p>
        </div>

        <div className="footer-col footer-col-links">
          <p className="footer-label">Inside</p>
          <ul className="footer-links">
            <li><a href="#shift">The Shift</a></li>
            <li><a href="#solution">The Fix</a></li>
            <li><a href="#process">The Process</a></li>
            <li><a href="#reach">The Walk-Through</a></li>
            <li><a href="#stephanie">The Builder</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-rule" aria-hidden="true"></div>

      <p className="footer-text">
        &copy; {year}{' '}
        <a
          href="#top"
          onClick={handleTopClick}
          className="footer-mark-link footer-mark-link-inline"
          aria-label="SimplWorks.ai — back to top"
        >
          <span className="wordmark-simpl">Simpl</span>
          <span className="wordmark-works">Works</span>
          .ai
        </a>
        {' '}&middot; Built by hand in Knoxville, TN
      </p>
    </footer>
  );
}
