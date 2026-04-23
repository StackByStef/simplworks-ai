/**
 * REACH ME — Belief 8 (Conversion/Contact) + Module 2 Scope
 *
 * Two paths:
 *   - Existing site → "FIX IT" → FrictionAuditModal
 *   - No site yet  → "BUILD IT" → BuildRequestModal
 *
 * Both modals are lazy-loaded via their respective CTA wrappers
 * (AuditCta, BuildCta) so modal bytes only ship on click.
 *
 * Reach Me stays a server component; only the CTA wrappers and the
 * modals themselves are client-rendered.
 */

import AuditCta from './AuditCta';
import BuildCta from './BuildCta';

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
          Find out what&apos;s actually going on with your site.
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

        <AuditCta />

        <div className="subsection-divider"></div>

        <p className="section-label">No Website Yet?</p>
        <h2 className="section-heading">
          Then this is your first rodeo.
        </h2>
        <p className="beat">
          And that&apos;s actually the best place to start. No template to
          undo. No bad habits to fix. No agency that already failed you.
          Just a real website built from scratch, around your business, in
          about a week.
        </p>
        <p
          className="beat"
          style={{ color: 'var(--white)', fontWeight: 700 }}
        >
          Tell me what you&apos;re building. I&apos;ll send you a quote.
        </p>

        <BuildCta />
      </div>
    </section>
  );
}
