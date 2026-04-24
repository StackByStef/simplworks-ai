/**
 * THE PROCESS — Belief 4 (Scope) + Belief 3 reinforcement (Mechanism specifics)
 *
 * DC Copy Changes v1.1, Change 3 applied directly:
 * - Module 2 mechanism-formula closer inserted before final rhythm line
 */
export default function TheProcess() {
  return (
    <section className="section section-black" id="process">
      <div className="section-inner">
        <div className="section-divider"></div>
        <p className="section-label">The Process</p>
        <h2 className="section-heading">How the Work Gets Done.</h2>

        <p className="beat drop-cap-manual">
          <span className="dc-letter">E</span>
          <span className="dc-lines">
            very SimplWorks project follows the same path.
          </span>
        </p>

        <p className="beat">
          No surprises.
          <br />
          No scope creep.
          <br />
          No &ldquo;we&apos;ll figure it out as we go.&rdquo;
        </p>

        <p className="beat">
          You know what&apos;s happening at every step because the process is
          built to be clear from the start.
        </p>

        <div className="gold-rule-block">
          <p className="gold-rule-label">Map</p>
          <p>
            You tell us about your business. What you do, who your customers
            are, how they find you, and what makes you different from the
            next name on the list.
          </p>
          <p>
            This isn&apos;t a questionnaire you fill out and never hear about
            again. It&apos;s a conversation. By the end of it, you see the
            plan. You know exactly what&apos;s being built and why.
          </p>
        </div>

        <div className="gold-rule-block">
          <p className="gold-rule-label">Build</p>
          <p>
            You don&apos;t touch a template. You don&apos;t manage a project.
            You don&apos;t sit through weeks of revisions wondering when
            something will actually happen.
          </p>
          <p>
            About a week later, you see your business online the way it
            should have looked all along. Written in your language. Designed
            around your brand. Built so customers can find you.
          </p>
        </div>

        <div className="gold-rule-block">
          <p className="gold-rule-label">Launch</p>
          <p>
            Your site is live. Leads start coming in. Your business shows up
            when people search for what you do.
          </p>
          <p>
            You get a full set of guides explaining everything that was
            built, why it was built, and what to do next. No mystery. No
            confusion. You understand what you have and how it works.
          </p>
        </div>

        {/* DC Change 3 — Mechanism-formula closer */}
        <p
          className="beat"
          style={{ color: 'var(--white)', fontWeight: 700, marginTop: '2.5rem' }}
        >
          Your site is built from scratch around your customer, so customers
          can find you, without scope creep, template limits, or a site that
          goes dark after launch.
        </p>

        <p className="beat-strong" style={{ marginTop: '2.5rem' }}>
          One week. One <span style={{ color: 'var(--gold)' }}>builder</span>.
          Everything handled.
        </p>
      </div>
    </section>
  );
}
