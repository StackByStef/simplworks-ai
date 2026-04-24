export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col footer-col-identity">
          <span className="wordmark">
            <span className="wordmark-simpl">Simpl</span>
            <span className="wordmark-works">Works</span>
            <span className="wordmark-period">.</span>
          </span>
          <p className="footer-tagline">Custom websites, built by hand.</p>
          <p className="footer-location">Knoxville, TN</p>
          <p className="footer-label footer-label-reach">Reach Me</p>
          <a href="#reach" className="footer-reach-link">
            Send a message &rarr;
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
            <li><a href="#reach">The Walk-Through</a></li>
            <li><a href="#stephanie">The Builder</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-rule" aria-hidden="true"></div>

      <p className="footer-text">
        &copy; {year} SimplWorks.ai &middot; Built by hand in Knoxville, TN
      </p>
    </footer>
  );
}
