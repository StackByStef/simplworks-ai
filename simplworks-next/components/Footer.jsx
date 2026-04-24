export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <span className="wordmark">
        <span className="wordmark-simpl">Simpl</span>
        <span className="wordmark-works">Works</span>
        <span className="wordmark-period">.</span>
      </span>
      <p className="footer-direct">
        Skip the form. Call:{' '}
        <a href="tel:+16786174598">678.617.4598</a>
        {' · '}Email:{' '}
        <a href="mailto:stephanie@simplworks.ai">stephanie@simplworks.ai</a>
      </p>
      <p className="footer-text">
        &copy; {year} SimplWorks.ai &mdash; All rights reserved.
      </p>
    </footer>
  );
}
