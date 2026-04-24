'use client';

/**
 * THE BUILDER — Belief 6 (Trust/About)
 *
 * Condensed version renders in the section.
 * "Continue reading →" opens a full-page editorial overlay with the
 * long-form biography (ported from V42 prototype_42.html lines 1493–1515
 * verbatim — same source of truth as DC's locked copy).
 *
 * Client component for overlay state + ESC/body-scroll handling.
 */

import { useEffect, useState } from 'react';
import Brand from './Brand';

export default function TheBuilder() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  // Body scroll lock when overlay open
  useEffect(() => {
    if (overlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [overlayOpen]);

  // ESC to close overlay
  useEffect(() => {
    if (!overlayOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setOverlayOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [overlayOpen]);

  const stephanieNameStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
    color: 'var(--white)',
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
    marginBottom: '0.5rem',
  };

  return (
    <>
      <section className="section section-dark editorial" id="stephanie">
        <div className="section-inner">
          <div className="section-divider"></div>
          <p className="section-label">The Builder</p>
          <p style={stephanieNameStyle}>Stephanie Belote</p>
          <h2 className="section-heading">
            20 Years in Business.
            <br />
            One New Mission.
          </h2>

          <p className="beat drop-cap-manual">
            <span className="dc-letter">N</span>
            <span className="dc-lines">
              ot long ago, I was sitting on a sofa with cold coffee,
              wondering how I got so quiet. I was 53. And I&apos;d been
              building things my whole life.
            </span>
          </p>

          <p className="beat">
            AT&amp;T. First Union Bank. A staffing franchise I built from
            nothing. A healthcare consulting company I built from a 1099 gig
            into a real business. Then COVID killed the company. I went
            back to work for someone else.
          </p>

          <p className="beat">
            Somewhere in all those years of building for other people,
            starting over, rebuilding, starting over again, I became
            invisible.
          </p>

          <div className="pull-quote">
            <p>
              You wake up one day and realize that everything you&apos;re
              good at has been making everyone else&apos;s life bigger while
              yours got quieter.
            </p>
          </div>

          <p className="beat">
            I have dyscalculia. I used my laptop for emails. That&apos;s it.
            I taught myself to code from nothing. Not because I wanted to
            become a developer. Because I refused to disappear.
          </p>

          <div className="gold-rule-block">
            <p style={{ color: 'var(--white)', fontWeight: 700 }}>
              I build conversion systems, not brochures. I build them fast,
              I build them right, and I don&apos;t disappear after launch.
            </p>
          </div>

          <p
            className="beat-strong"
            style={{ color: 'var(--white)', fontWeight: 700 }}
          >
            <Brand /> is mine. Every line of it. And if you&apos;re a
            business owner who&apos;s been too busy working hard to notice
            the game changed around you, I see you. Because I was you. And
            I&apos;m not going anywhere.
          </p>

          <button
            type="button"
            className="continue-reading"
            onClick={() => setOverlayOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={overlayOpen}
            aria-controls="builder-editorial-overlay"
          >
            Continue reading &rarr;
          </button>
        </div>
      </section>

      {/* Editorial Overlay — long-form biography (V42 full profile, verbatim) */}
      <div
        id="builder-editorial-overlay"
        className={`editorial-overlay${overlayOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Stephanie Belote — Full Profile"
      >
        <button
          type="button"
          className="editorial-overlay-close"
          onClick={() => setOverlayOpen(false)}
          aria-label="Close full profile"
        >
          &times;
        </button>
        <div className="editorial-overlay-inner">
          <p className="section-label">The Builder</p>
          <p style={stephanieNameStyle}>Stephanie Belote</p>
          <h2 className="section-heading">
            20 Years in Business.
            <br />
            One New Mission.
          </h2>

          {/* drop-cap-manual pattern: .dc-lines creates a BFC so the body
              text stays in a single indented column beside the floated letter,
              regardless of paragraph length. Prevents the last-line escape
              that the CSS ::first-letter float version suffers from. */}
          <p className="drop-cap-manual">
            <span className="dc-letter">N</span>
            <span className="dc-lines">
              ot long ago, I was sitting on a sofa staring into the woods.
              My coffee was cold. I hadn&apos;t moved in two hours. A friend
              called and said, &ldquo;Why don&apos;t you come stay with me
              tonight?&rdquo; That&apos;s the kind of phone call you get
              when people can tell you&apos;re not okay.
            </span>
          </p>

          <p>
            I was 53. And the thing is, I&apos;d been building things my
            whole life.
          </p>

          <p>
            I graduated from the University of Georgia with a degree in
            speech communications and rhetoric, a liberal arts major I chose
            because I have dyscalculia, which means numbers and I have never
            gotten along. They teach you how to read a room, how to build
            an argument, how to make people listen. What they don&apos;t
            teach you is what to do when you&apos;ve been quiet for so long
            you forget you have a voice.
          </p>

          <p>
            My first job out of college was at AccuStaff in Jacksonville,
            inside a division called People Systems built to support one
            massive client, AT&amp;T American TransTech. I started as an
            account coordinator. Within months, I had restructured the
            internal processes and gotten promoted to on-site manager. I
            rebuilt their entire payroll system and presented it to AT&amp;T
            directors and AccuStaff senior leadership. They implemented it.
            I oversaw the team that rolled it out. I was in my mid-twenties.
          </p>

          <p>
            Corporate called. I moved to a national account manager role
            for First Union Bank, working under the CEO who took that
            company public. I was doing work at 27 that most people
            don&apos;t touch until they&apos;re 40.
          </p>

          <p>
            Then life shifted. I moved to Gainesville, Georgia, consulted
            for a Norrell staffing franchise, got their entire operation
            stood up and running, and stepped away to raise my kids for 14
            years.
          </p>

          <p>
            When I came back, I started over in Knoxville. I took a 1099
            role selling lab services to physicians and turned it into my
            own company, Biosystems MD, a healthcare consulting firm that
            helped doctors find revenue they didn&apos;t know they were
            leaving on the table. Business was good. Then COVID hit. I had
            24-hour turnaround testing when LabCorp was taking 14 days, but
            I couldn&apos;t get through the door to see the doctors. I had
            the solution and no way to deliver it. By mid-2021, Biosystems
            was gone.
          </p>

          <p>
            So I went back to work for someone else. Insurance marketing.
            Learned the industry. Did the job.
          </p>

          <p className="editorial-pullquote">
            You wake up one day and realize that everything you&apos;re good
            at has been making everyone else&apos;s life bigger while yours
            got quieter.
          </p>

          <p>
            And somewhere in all of that, the years of building for other
            people, the starting over, the rebuilding, the starting over
            again, I became invisible. Not because anyone set out to make
            me that way. Just because life has a way of doing that to
            people who keep their heads down and keep working. And if
            you&apos;re honest about it, I think most people know exactly
            what that feels like.
          </p>

          <p>And then I was on that sofa.</p>

          <p>
            So I joined an online learning platform. I didn&apos;t know
            what I&apos;d learn. I didn&apos;t know what I&apos;d build. I
            just knew I had to move. And I haven&apos;t missed a single day
            since.
          </p>

          <p>
            What I found in there wasn&apos;t what I expected. I thought I
            was learning business skills. I was. But the real change was
            something deeper. Every day there&apos;s a lesson. Small.
            Practical. And you apply it. Not tomorrow. That day. And those
            small daily changes, making your bed, showing up on time, doing
            the work before you feel like doing the work, they start to
            stack. One on top of the other. And slowly, without even
            realizing it&apos;s happening, your brain starts to change. The
            laziness burns off. The excuses stop making sense. You start to
            see what you&apos;re actually capable of when you stop waiting
            for permission and just move.
          </p>

          <p>
            I didn&apos;t start learning AI to become a developer. I
            started because I refused to disappear. But somewhere along the
            way, while I was learning automations and teaching myself to
            code from nothing, I realized that the thing I was actually
            building was myself. Every problem I solved, every wall I hit,
            every system I figured out, it was never just about the
            technology. It was about finding out what was on the other
            side of every excuse I&apos;d ever accepted.
          </p>

          <p>
            I&apos;m telling this story as I&apos;m living it. That&apos;s
            what Higher Game is. It&apos;s my podcast. The first episode is
            called Candyland. It&apos;s not a retrospective where I look
            back and tell you how I figured it all out. I&apos;m
            documenting it in real time. Every lesson, every wall, every
            win. If you see yourself in any of this, that&apos;s where you
            go to hear it in my voice.
          </p>

          <p>
            I have dyscalculia. I used my laptop for emails. That&apos;s
            it. And I built all of this anyway. Not because I&apos;m
            special. Because I stopped believing I was small.
          </p>

          <p>
            And here&apos;s what I learned while I was building. The game
            changed. Websites aren&apos;t brochures anymore. They&apos;re
            not business cards. They&apos;re where people decide whether to
            trust you, buy from you, or move on. AI changed what a website
            is responsible for, and most business owners are still running
            something that was fine five years ago but doesn&apos;t work
            now. Not because they&apos;re behind. Because they were busy.
            They were doing what they do best, running their business, and
            the rules changed under them while they were working.
          </p>

          <p>I know that feeling. I was that person.</p>

          <p>
            Every <Brand /> site is built from scratch. No templates. No
            page builders. No recycled layouts. Every word, every page,
            every line of the site is built around one question: does
            this make the business money? Not because there&apos;s some noble
            philosophy behind it. Because that&apos;s how you build
            something that actually works. A website in this market has one
            job, convert trust into action. If it&apos;s not doing that,
            it&apos;s costing you.
          </p>

          <p>
            I build conversion systems, not brochures. I build them fast,
            I build them right, and I don&apos;t disappear after launch.
          </p>

          <p style={{ color: 'var(--white)', fontWeight: 700 }}>
            <Brand /> is mine. Every line of it. And if you&apos;re a
            business owner who&apos;s been too busy working hard to notice
            the game changed around you, I see you. Because I was you.
            And I&apos;m not going anywhere.
          </p>
        </div>
      </div>
    </>
  );
}
