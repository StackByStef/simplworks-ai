/**
 * REACH ME — Belief 8 (Conversion/Contact) + Module 2 Scope
 *
 * DC Copy Changes v1.1 Change 4 + Stage 4C round 7 restructure:
 * - Drop-cap single line: "You have two options."
 * - Bright white: "Close this page and go back to what you had before."
 * - OR divider (standalone, centered, caps, bright white)
 * - Bright white: "Let me show you what's actually going on with your website."
 * - Friction Audit offer block (scoped per Framework v1.1)
 * - Real form (FrictionAuditForm) replacing the unreliable mailto: link
 * - Phone as plain text (tel: links opened unreliable handlers on desktop)
 */

import FrictionAuditForm from './FrictionAuditForm';

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
          <span className="dc-lines">ou have two options.</span>
        </p>

        <p className="beat-white">
          Close this page and go back to what you had before.
        </p>

        <p className="beat-or">OR</p>

        <p className="beat-white">
          Let me show you what&apos;s actually going on with your website.
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

        <FrictionAuditForm />

        <p className="reach-phone">
          Prefer to talk? Call or text 678.617.4598.
        </p>
      </div>
    </section>
  );
}
