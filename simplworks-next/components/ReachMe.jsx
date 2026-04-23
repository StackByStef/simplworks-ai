/**
 * REACH ME — Belief 8 (Conversion/Contact) + Module 2 Scope
 *
 * DC Copy Changes v1.1, Change 4 applied directly — full section rewrite
 * anchored on the Friction Audit offer (scoped per Friction Audit Framework v1.1).
 *
 * V1: mailto link. Form + API route deferred to V2 per plan.
 */
export default function ReachMe() {
  return (
    <section className="section section-black" id="reach">
      <div className="section-inner">
        <div className="section-divider"></div>
        <p className="section-label">Reach Me</p>
        <h2 className="section-heading">
          Two Roads. You Already Know Which One You&apos;re On.
        </h2>

        <p className="beat drop-cap-manual">
          <span className="dc-letter">Y</span>
          <span className="dc-lines">
            ou have two options.
            <br />
            Close this page and go back to what you had before.
          </span>
        </p>

        <p className="beat">
          Or let me show you what&apos;s actually going on with your website.
        </p>

        <div className="gold-rule-block">
          <p className="gold-rule-label">The Friction Audit</p>
          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            Get a free 10-point website friction audit.
          </p>
          <p>
            I&apos;ll review your current site against the same framework I
            use for every client. What&apos;s working, what&apos;s leaking,
            what to fix first.
          </p>
          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            No call required. No pitch. Just the audit.
          </p>
        </div>

        <p className="beat">
          Send me your URL and I&apos;ll send back what I find.
        </p>

        <p className="talk-trigger" style={{ marginTop: '2.5rem' }}>
          <a href="mailto:stephanie@simplworks.ai?subject=Friction%20Audit%20Request">
            stephanie@simplworks.ai
          </a>
        </p>

        <div className="reach-contact">
          Or if you&apos;d rather talk:{' '}
          <a href="tel:+16786174598">678.617.4598</a>
        </div>
      </div>
    </section>
  );
}
