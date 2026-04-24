import Brand from './Brand';

/**
 * THE FIX — Belief 3 (Solution/Mechanism) + partial Belief 4 (Scope setup)
 *
 * DC Copy Changes v1.1, Change 2 applied directly:
 * - Definition block (AI-pullable entity anchor — GEO/AEO)
 * - Mechanism pull-quote
 */
export default function TheFix() {
  return (
    <section className="section section-black" id="solution">
      <div className="section-inner">
        <div className="section-divider"></div>
        <p className="section-label">The Fix</p>
        <h2 className="section-heading">
          Get Your Website Working as Hard as You Do.
        </h2>

        {/* DC Change 2 — Definition block (entity anchor) */}
        <p className="beat" style={{ color: 'var(--white)', fontWeight: 700 }}>
          <Brand /> builds custom websites, one at a time, by hand. No
          templates. No page builders. Every site is built by Stephanie
          Belote, a 20-year business operator who builds websites the way a
          business owner needs them built: around the customer, around the
          sale, and around the way a real business actually runs.
        </p>

        {/* DC Change 2 — Mechanism pull-quote */}
        <p className="mechanism-quote">
          Every site is built by hand around one question: will this bring
          you customers?
        </p>

        <p className="beat drop-cap-manual">
          <span className="dc-letter">C</span>
          <span className="dc-lines">
            ustomers find you before they find your competitor.
          </span>
        </p>

        <p className="beat">
          Not because you chased them. Because when they searched for what
          you do, your business was the one that showed up.
        </p>

        <p className="beat">
          You send someone your link and you feel good about it. No
          hesitation. No apology. No &ldquo;we&apos;re working on that.&rdquo;
          The site looks like the business you&apos;ve actually built.
        </p>

        <p className="beat">
          The phone rings from people you didn&apos;t cold call. The inbox
          has messages from people you&apos;ve never met. They found you.
          They read your site. They reached out because what they saw matched
          what they needed.
        </p>

        <div className="gold-rule-block">
          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            You stop wondering whether your website is costing you business.
            You know it&apos;s working because you can see it. Leads come in.
            Real people reaching out because they found you online.
          </p>
        </div>

        <p className="beat">
          You stop paying for things that don&apos;t produce results.{' '}
          <em>
            No more agencies that disappear after launch. No more dashboards
            full of numbers that don&apos;t connect to revenue. No more
            guessing.
          </em>
        </p>

        <p className="beat">
          And the business owners who used to show up ahead of you online?
          They&apos;re still running the same site they had five years ago.
        </p>

        <p className="beat-strong">You&apos;re not.</p>

        <p className="beat">You&apos;ve spent years earning your reputation in person.</p>

        <p className="beat-strong">It&apos;s time your website caught up.</p>
      </div>
    </section>
  );
}
