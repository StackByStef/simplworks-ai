/**
 * FAQ — Belief 7 (Objection Handling)
 *
 * DC Copy Changes v1.1, Change 5 applied directly — 9 Q+A pairs.
 * Every answer leads with a direct, quotable first sentence (AEO extraction).
 * Copy must match FAQPage JSON-LD schema exactly (see components/JsonLd.jsx).
 */
export default function Faq() {
  return (
    <section className="section section-black" id="faq">
      <div className="section-inner">
        <div className="section-divider"></div>
        <p className="section-label">FAQ</p>
        <h2 className="section-heading">Questions, Answered.</h2>

        <details className="faq-item">
          <summary className="faq-question">What is SimplWorks?</summary>
          <p className="faq-answer">
            SimplWorks is a custom website studio run by Stephanie Belote, a
            20-year business operator who builds websites by hand for business
            owners who need their site to actually bring in customers. Every
            site is built by hand from scratch, measured against one question,
            will this bring you customers, and delivered in about a week.
          </p>
        </details>

        <details className="faq-item">
          <summary className="faq-question">Who is Stephanie Belote?</summary>
          <p className="faq-answer">
            Stephanie Belote is the founder and builder behind SimplWorks.
            She spent 20 years running and building businesses at AT&amp;T,
            First Union Bank, a staffing franchise she built from the ground
            up, and a healthcare consulting company of her own, before
            teaching herself to code and launching SimplWorks. Every
            SimplWorks website is built by her directly.
          </p>
        </details>

        <details className="faq-item">
          <summary className="faq-question">Where is SimplWorks based?</summary>
          <p className="faq-answer">
            SimplWorks is based in Knoxville, Tennessee. Stephanie works with
            business owners across the country. Every project is handled
            remotely, end to end, with no travel required from the client.
          </p>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            How long does a SimplWorks build take?
          </summary>
          <p className="faq-answer">
            Most SimplWorks websites are built and live in about one week.
            The timeline includes a planning conversation to map the site to
            the business, the full build, and launch. Larger or multi-page
            builds get their own timeline, scoped at the start so there are
            no surprises.
          </p>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            Do you use templates or page builders, and what makes a SimplWorks
            site different?
          </summary>
          <p className="faq-answer">
            No templates and no page builders. Every SimplWorks site is built
            by hand. That means the site is built specifically for the
            business, around its customer and its sale, instead of starting
            from a generic framework. The difference shows up in how the
            site performs, how fast it loads, how easily it shows up in
            search and AI answers, and how well it holds up over time.
          </p>
        </details>

        <details className="faq-item">
          <summary className="faq-question">Does SimplWorks do SEO?</summary>
          <p className="faq-answer">
            Yes. Every SimplWorks website includes SEO, AEO (AI answer engine
            optimization), and GEO (generative engine optimization) built in
            from the first day of the build. It&apos;s not an add-on or upsell.
            The site is built to show up in traditional search, AI answer
            engines like ChatGPT and Perplexity, and AI-generated results.
          </p>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            What happens after the site launches?
          </summary>
          <p className="faq-answer">
            Every SimplWorks client receives full documentation of what was
            built, why it was built that way, and how to maintain it. But a
            website is not a finished product the day it launches. Content
            ages, search rankings shift, performance drifts, and the site
            you paid for slowly stops working if nobody maintains it. Most
            clients continue working with SimplWorks after launch through a
            monthly care plan that covers updates, content changes,
            performance monitoring, and ongoing optimization. No lock-in, no
            long contracts, just the work that keeps the site bringing in
            customers. Stephanie does not disappear after launch.
          </p>
        </details>

        <details className="faq-item">
          <summary className="faq-question">
            How is SimplWorks different from big agencies and DIY platforms
            like Wix or Squarespace?
          </summary>
          <p className="faq-answer">
            Big agencies charge tens of thousands of dollars, take months to
            deliver, and often disappear after launch. DIY platforms like
            Wix and Squarespace lock the business into templates, slow page
            speeds, and limited search visibility. SimplWorks is a custom
            build, handled by one operator who has run real businesses,
            delivered in about a week, at a price that makes sense for
            owners who need the site to actually bring in customers.
          </p>
        </details>

        <details className="faq-item">
          <summary className="faq-question">How do I get started?</summary>
          <p className="faq-answer">
            The fastest way to start is to scroll down to the{' '}
            <a href="#reach">Reach Me section</a> and fill out the form that
            fits. If you have a website, request a free 10-point friction
            audit and I&apos;ll send it back showing what&apos;s working,
            what&apos;s leaking, and what to fix first. If you don&apos;t
            have a website yet, use the build request form and tell me what
            you&apos;re building. No call required, no pitch, just the work.
          </p>
        </details>
      </div>
    </section>
  );
}
