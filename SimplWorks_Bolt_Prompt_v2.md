# SimplWorks.ai — Bolt.new Build Prompt (v2 — Corrected)

Paste everything below the --- line into Bolt.new as your initial prompt.

---

Build a Next.js single-page website for SimplWorks.ai — a custom web design agency. This will deploy to Vercel and connect to a custom domain. Build it right the first time. Follow every specification below exactly.

## STACK

- Next.js (App Router)
- React
- CSS Modules (NOT Tailwind)
- Google Fonts via next/font/google
- Deploys to Vercel

## FONTS

- Headings: Instrument Serif (italic and non-italic weights)
- Body: DM Sans (weight 300, 400, 500, 600, 700)
- Ticker text: Instrument Serif at 1.3rem
- Font smoothing: -webkit-font-smoothing: antialiased on body

Load both fonts using next/font/google. Do NOT use external stylesheet links to Google Fonts — that causes render-blocking.

## COLOR SYSTEM — WARM EDITORIAL PALETTE

This site uses a warm, editorial color palette. Do NOT substitute cool grays. Use these exact values:

```
--black: #0a0a0a          (main background)
--white: #f5f2ed           (primary text — warm cream-white)
--cream: #ebe6dd           (secondary text, ticker text — slightly darker cream)
--accent: #4f8cff          (blue — buttons, links, highlights, stat numbers)
--accent-hover: #3a6fd8    (darker blue — hover states)
--accent-glow: rgba(79, 140, 255, 0.15)  (icon backgrounds, subtle glows)
--muted: #8a8578           (warm brown-gray — subtitles, descriptions, form placeholders)
--dark-card: #141412       (card backgrounds — warm near-black, NOT #161616)
--dark-card-border: #2a2822  (card borders — warm, NOT cool gray)
--green: #34d399           (comparison "modern" column)
--red: #ef4444             (comparison "legacy" column)
```

Primary body text color is #f5f2ed. Paragraph description text and subtitles use #8a8578. Headings use #f5f2ed. Stat numbers and accent elements use #4f8cff.

Do NOT use #d1d5db, #9ca3af, #f0f0f0, or any cool gray values. This is a warm palette.

## TYPOGRAPHY RULES

- Body font size: 18px desktop, 16px mobile
- Line height: 1.7 for body, 1.05-1.15 for large headings, 1.15-1.3 for section headings
- Max content width for body text paragraphs: 700px
- Max section width: 1200px container centered with margin: 0 auto

## LAYOUT & SPACING

- Nav: 72px fixed, background rgba(10, 10, 10, 0.7) with backdrop-filter: blur(20px), border-bottom: 1px solid rgba(255,255,255,0.05)
- Section padding: 100px top/bottom desktop, 60px mobile
- Side padding: 48px (3rem) desktop, 24px mobile
- Card backgrounds: #141412 (solid, NOT transparent/rgba, NOT #161616)
- Card border: 1px solid #2a2822
- Card border-radius: 16px
- Card padding: 2.5rem (40px)
- Card hover: border-color changes to rgba(79, 140, 255, 0.6) + box-shadow: 0 0 15px rgba(79,140,255,0.15) + translateY(-3px)
- Card grid gap: 2rem (32px)
- scroll-behavior: smooth with scroll-padding-top: 80px
- Responsive breakpoints: 768px and 480px

## TEXT ALIGNMENT

- Section headings: LEFT-aligned (not centered — this matches the current site design)
- Section subtitles: LEFT-aligned
- Section tag labels (like "WHAT WE BUILD"): LEFT-aligned
- Body text paragraphs: LEFT-aligned
- Card titles: LEFT-aligned
- Card descriptions: LEFT-aligned
- Hero content: LEFT-aligned
- Final CTA section: CENTERED (this is the only centered section)
- Stats banner: CENTERED
- About stat strip: CENTERED

## BUTTONS

- Primary: accent background (#4f8cff), dark text (#0a0a0a), 1rem 2rem padding, 8px radius, 600 weight. Hover: darken to #3a6fd8 + translateY(-2px) + box-shadow: 0 8px 30px rgba(79,140,255,0.3)
- Secondary: transparent background, #f5f2ed text, 1px solid #2a2822 border, same padding. Hover: border brightens to #8a8578, background: rgba(255,255,255,0.03)

## ICONS

- Use emoji for cards (as shown in the copy below)
- Icons display at 2rem font size with 1.2rem margin-bottom

## IMAGE PLACEHOLDERS

Include placeholder containers where images should go in the future:
- Hero section: a placeholder area to the right of the hero text (for a future hero image or illustration)
- About section: a placeholder area next to the bio text (for a headshot or brand image)

Style placeholders as dashed-border boxes with muted text saying "Image placeholder" so I know where to add images later. Make them easy to swap out.

## SCROLLING TICKER

Include a full-width scrolling ticker between the Hero and Services sections. Background: #141412, border-top and border-bottom with 1px solid #2a2822. Padding: 1.2rem 0. The ticker should scroll horizontally continuously on an infinite loop at 25 seconds per cycle.

Ticker text: Instrument Serif font, 1.3rem, color #ebe6dd (cream — NOT the muted brown-gray). Items separated by a blue diamond character (◆) at 0.65rem in #4f8cff with 1.5rem gap on each side.

Ticker items (duplicate the full set in the HTML so the scroll loops seamlessly):
- 90% of small businesses underutilize their website
- 70% of business homepages have no call-to-action
- ChatGPT has 400M+ weekly users
- Google AI Overviews now appear on 47% of searches
- 58% of Gen Z prefers AI over Google
- AI-cited businesses get 3x more qualified leads
- Your competitors are already optimizing for this

## HERO BADGE — TYPEWRITER ANIMATION

Above the hero headline, include a pill-shaped badge with:
- Background: rgba(79,140,255,0.1)
- Border: 1px solid rgba(79,140,255,0.25)
- Border-radius: 100px
- Padding: 0.6rem 1.4rem
- Font: Instrument Serif, 1.8rem, weight 700, color #4f8cff
- Letter-spacing: 0.12em

The badge contains a typewriter animation that types out "SIMPLE WORKS" letter by letter at 80ms per letter. A blinking cursor (2px wide, accent color, 0.6s blink) shows during typing. After typing completes (600ms delay), the cursor disappears and a period "." appears with a pulsing opacity animation (2s ease infinite, fading between 100% and 30% opacity). The period is in #f5f2ed (white).

Start the typing after 1800ms delay so the cursor blinks visibly before typing begins.

## PAGE STRUCTURE AND EXACT COPY

Build these sections in this exact order. Use the exact copy provided. Do not rewrite or rephrase anything.

### 1. NAVIGATION
Logo text: SimplWorks.ai — render as "Simpl" in #f5f2ed + "Works" in #4f8cff + ".ai" in #f5f2ed. Font: Instrument Serif, 1.6rem, letter-spacing: -0.02em.
Links: Services, Process, Who We Serve, About, FAQ — color #8a8578, hover to #f5f2ed
CTA button: "Get a Free Website Audit" (links to #audit section) — accent background, dark text

### 2. HERO
Headline: Your Website Should Work For You. Not Cost You Customers.
(The word "Customers." should be in #f5f2ed — same as rest of heading, no accent color on it)

Font: Instrument Serif, clamp(3rem, 7vw, 5.5rem), line-height 1.05, letter-spacing -0.03em, max-width 900px.

Subtitle: Most business websites look fine and perform terribly. We build the ones that actually work.
Font: DM Sans, 1.2rem, color #8a8578, max-width 580px, line-height 1.7.

Buttons:
- Primary: "Book a Strategy Call" (links to #cta)
- Secondary: "See What We Build" (links to #services)

Include a subtle radial gradient glow in the top-right of the hero: radial-gradient(circle, rgba(79,140,255,0.12) 0%, transparent 70%), positioned top -30% right -10%, 700px × 700px, pointer-events none.

The hero should be min-height: 100vh with content vertically centered.

### 3. TICKER
(Described above in the SCROLLING TICKER section)

### 4. SERVICES — "What We Build"
Label: WHAT WE BUILD
Heading: Built as Infrastructure. Not Decoration.
Subtitle: Every SimplWorks site is built for performance, visibility, and lead generation from day one. No legacy sites, just clean, fast websites engineered to get found by Google, by AI, and by the people who matter.

Note: In the subtitle, render "SimplWorks" with the logo styling — "Simpl" in body color, "Works" in accent blue.

3-column card grid (collapses to 1 column on mobile):

Card 1 — ⚡ Landing Pages
One-page sites built to capture leads, launch a product, or get your idea in front of the right people fast. Live in days.

Card 2 — 🏢 Business Websites
Multi-section sites that tell your story, show what you do, and give customers a clear reason to reach out.

Card 3 — 📋 Lead Capture Forms
Smart forms connected to real databases. Every submission captured and stored — no leads lost, no follow-up gaps.

Card 4 — ✉️ Email Signup
Build your audience from day one. Email capture built into your site with duplicate detection and instant confirmation.

Card 5 — 🌐 Domain + Deployment
Custom domain, SSL, DNS — all handled. You get a live URL you can send to anyone, not a project file sitting in a folder.

Card 6 — 📱 Mobile-Ready Design
Every site looks sharp on phones, tablets, and desktops. No pinching, no broken layouts, no sideways scrolling.

### 5. WHO WE SERVE
Label: WHO WE SERVE
Heading: We build for businesses that need results. Not just a redesign.
Subtitle: If your website isn't generating leads, you're leaving money on the table. That's what we fix.

2-column card grid (collapses to 1 column on mobile):

Card 1 — 💡 Startups & New Ventures
Get live fast with a site that captures interest and starts building your audience before you've officially launched.

Card 2 — 🏪 Small Businesses
Sites that make your business look established, professional, and easy to contact. First impressions close deals.

Card 3 — ✨ Creators & Podcasts
A home base for your content — showcase episodes, grow your list, give people one place to find everything you do.

Card 4 — 🧠 Service Providers
Consultants, freelancers, agencies — sites that explain what you offer and make it easy for clients to say yes.

### 6. PAIN POINTS — "Sound Familiar?"
Label: SOUND FAMILIAR?
Heading: If any of these hit, we need to talk.
Subtitle: You don't need another opinion on your website. You need someone to fix it.

2-column card grid (collapses to 1 column on mobile):

Card 1 — ⏳ Your site looks like it was built five years ago
First impressions happen in seconds. If your website feels dated, visitors bounce before they ever find out what you do.

Card 2 — 👻 People visit but never reach out
Traffic without conversions is just a vanity metric. If nobody's filling out a form or picking up the phone, your site isn't doing its job.

Card 3 — 😬 You're embarrassed to send someone your link
If you hesitate before sharing your own website, that's not a cosmetic issue — it's a credibility problem that's costing you business.

Card 4 — 🪞 You've tried templates and they all look the same
Templates are built for everyone, which means they're built for no one. Your business deserves a site engineered around what you actually do.

### 7. COMPARISON — "The Difference"
Label: THE DIFFERENCE
Heading: Your old site is a liability. Here's what's changed.
Subtitle: It's not just a redesign. It's a fundamental shift in how your site communicates — to humans and to AI.

Give this entire section a background of #141412 with border-top and border-bottom of 1px solid #2a2822.

Two-column comparison with "vs." in italic Instrument Serif centered between them:

LEFT COLUMN — "Legacy Website" (tag pill: "Outdated" — background rgba(239,68,68,0.15), text #ef4444)
Background: rgba(239,68,68,0.04), border: 1px solid rgba(239,68,68,0.15), border-radius 16px, padding 2.5rem. Hover: border-color rgba(239,68,68,0.5), box-shadow: 0 0 20px rgba(239,68,68,0.1), translateY(-3px). Transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s.
Red circle markers (22px, rgba(239,68,68,0.15) background, #ef4444 text) with ✕:
- Built to look pretty for humans only
- Keyword-stuffed pages for old Google SEO
- Static pages that rarely get updated
- Vague copy: "We're the best! Call us today!"
- No structured data — AI has no idea what you do
- Invisible to ChatGPT, Perplexity, Gemini, Siri
- Losing traffic as Google shifts to AI Overviews

RIGHT COLUMN — "AI-Ready Website" (tag pill: "Future-Proof" — background rgba(52,211,153,0.15), text #34d399)
Background: rgba(52,211,153,0.04), border: 1px solid rgba(52,211,153,0.15), border-radius 16px, padding 2.5rem. Hover: border-color rgba(52,211,153,0.5), box-shadow: 0 0 20px rgba(52,211,153,0.1), translateY(-3px). Same transitions.
Green circle markers (22px, rgba(52,211,153,0.15) background, #34d399 text) with ✓:
- Built for humans AND AI engines to understand
- SEO + GEO — optimized for search AND AI answers
- Dynamic, regularly updated content signals authority
- Conversational Q&A content that mirrors how people ask AI
- Full schema markup — AI knows exactly what you offer and where
- Shows up when AI recommends businesses to potential customers
- Dominates both traditional search and AI-generated results

List items: DM Sans 0.95rem, color #ebe6dd, line-height 1.6, 1rem gap between items.

On mobile, the comparison stacks to single column with the "vs." between them.

### 8. STATS BANNER
3-column centered layout (stacks to 1 column on mobile). Padding: 5rem 3rem. No card background — sits on the main #0a0a0a background.

400M+ — Weekly users asking AI for business recommendations
0% — Of legacy websites optimized for AI discovery
6 mo. — Window before early movers lock in AI authority

Stat numbers: Instrument Serif, clamp(2.5rem, 5vw, 4rem), color #4f8cff, letter-spacing -0.03em.
Labels: DM Sans, 0.9rem, color #8a8578, line-height 1.5.

### 9. PROCESS — "How It Works"
Label: HOW IT WORKS
Heading: Three steps. About a week.
Subtitle: No drawn-out timelines. No mystery. We figure out what you need, build it right, and get you live.

3-column card grid (stacks to 1 column on mobile). Use a CSS counter to generate step numbers. Each card has a large faded step number (01, 02, 03) positioned absolute top-right: Instrument Serif, 3.5rem, color rgba(79,140,255,0.35).

Step 01 — Map
We look at what you have, figure out where it's falling short, and build a plan around your actual business goals — not a template.

Step 02 — Build
Custom-coded from scratch with lead capture, mobile performance, search optimization, and AI discoverability built in. No shortcuts.

Step 03 — Deploy
We launch, test everything, and make sure it runs right. You get a live site with managed hosting and ongoing support. You focus on your business.

### 10. ABOUT
Label: ABOUT
Heading: Built by someone who understands business. Not just code.

Paragraph 1 (with 2.5rem margin-top, max-width 700px): SimplWorks was founded by Stephanie Belote. Before she ever wrote a line of code, she spent over two decades in the business world — corporate staffing at AT&T, national account management at First Union Bank, building and running a healthcare consulting company that helped medical practices increase their revenue, and years as a marketing rep in the insurance industry learning exactly how businesses attract and retain customers.

Paragraph 2 (max-width 700px): That experience is the foundation. She doesn't just build websites — she understands how businesses make money, where leads get lost, and what makes someone pick up the phone or fill out a form. These are not design projects. They are revenue systems.

Paragraph 3 (max-width 700px): She taught herself to code because she was tired of tools that looked good but didn't deliver. Every site is hand-built — no templates, no page builders. Clean code, fast performance, real results.

Note: In paragraphs, render "SimplWorks" with the logo styling.

Below the bio paragraphs, include a 4-column stat strip (stacks to 2x2 on mobile, 1 column on small mobile):
- 20+ / Years in business
- 100% / Hand-coded, no templates
- ~1 Week / Strategy call to live site
- Revenue-First / Every site built to convert

Stat numbers: Instrument Serif, clamp(2rem, 4vw, 3rem), color #4f8cff. Labels: DM Sans, 0.9rem, color #8a8578. Centered text. Top and bottom borders (1px solid #2a2822). 3.5rem margin-top, 3rem padding top/bottom.

Include an image placeholder next to or near the bio text for a future headshot.

### 11. AI-READY SECTION
Label: BUILT FOR HOW SEARCH WORKS NOW
Heading: Google isn't the only thing finding your business anymore.

Give this section a background: linear-gradient(135deg, rgba(79,140,255,0.06) 0%, transparent 50%) with border-top: 1px solid #2a2822.

Paragraph 1 (2.5rem margin-top, max-width 700px): AI assistants — ChatGPT, Perplexity, Google AI Overview — are increasingly how people find businesses. They don't send traffic to links. They summarize answers. If your site isn't structured to be found and quoted by those systems, you're invisible to a growing share of your market.

Paragraph 2 (max-width 700px): Every SimplWorks site is built for both: traditional search rankings and AI-driven discovery. That's not an add-on. It's how we build.

Paragraph 3 (max-width 700px): Your business should show up wherever your customers are looking — whether that's a search results page or an AI assistant answering a question at 11pm on a phone. We make sure it does.

### 12. FAQ
Label: FAQ
Heading: Questions I hear a lot.

Accordion-style FAQ items using HTML details/summary elements. Max-width 700px. Each item styled as a card (#141412 background, 1px solid #2a2822 border, 12px border-radius, 0.75rem margin-bottom). Hover: border-color rgba(79,140,255,0.6) + box-shadow: 0 0 15px rgba(79,140,255,0.15). Open state: border-color rgba(79,140,255,0.6).

Summary text: Instrument Serif, 1.1rem, color #f5f2ed, padding 1.25rem 1.5rem. A "+" icon on the right in accent color that rotates 45° when open.

Answer text: DM Sans, 0.95rem, color #8a8578, line-height 1.7, padding 0 1.5rem 1.25rem.

Hide the default details marker/arrow.

Q: How long does a project take?
A: About a week from strategy call to live site. If there's something complex — custom integrations, large content migrations — it might take a little longer, but you'll know the timeline upfront.

Q: Can you fix my existing site or do I have to start over?
A: Depends on what you're working with. If the bones are solid, we can revamp it. If it's the thing holding you back, we'll recommend starting fresh. We'll figure that out together on the strategy call.

Q: Is SEO included?
A: Yes. Every site ships with optimized metadata, structured data, fast load times, mobile responsiveness, and clean semantic HTML. Built into the process — not charged as an extra.

Q: What about AI search — will my site show up in ChatGPT or Google AI?
A: That's built in too. We structure your content so AI systems can find, understand, and reference your business — not just link to it. It's called GEO (Generative Engine Optimization), and most web designers aren't doing this yet. We build it in from the start.

Q: What does "conversion-focused" mean?
A: It means the site is designed to get visitors to do something — fill out a form, book a call, sign up, buy. The layout, the copy, the button placement — it's all intentional, not decorative.

Q: Do you manage hosting after launch?
A: Yes. SimplWorks provides managed hosting and infrastructure so you don't have to deal with servers, databases, or deployments. We handle it.

Q: What does a website cost?
A: Every project is scoped individually based on what you need. We'll cover pricing on the strategy call once we understand your goals and what needs to be built.

Q: Do you only build websites?
A: Websites are the starting point. Every site we build is designed to grow with your business — lead capture, email systems, hosting, and more are all part of the package.

### 13. FREE AUDIT SECTION
Label: FREE SITE AUDIT
Heading: Find out what's wrong with your website — free.

Background: same gradient as the AI-Ready section — linear-gradient(135deg, rgba(79,140,255,0.06) 0%, transparent 50%) with border-top: 1px solid #2a2822.

Paragraph 1 (2.5rem margin-top, max-width 700px): Most small business websites have problems you can't see — slow load times, missing SEO basics, and zero visibility in AI search results. You won't know until someone checks.

Paragraph 2 (max-width 700px): We'll run a full audit on your site and send you an honest breakdown of what's working, what's not, and what it's costing you.

Form (max-width 480px, centered, 2.5rem margin-top):
- Your name (text, required)
- Email (email, required)
- Your website URL (text, optional, placeholder: "Your website URL (optional)")
- Phone (tel, optional, placeholder: "Phone (optional)")
- Submit button: "Get Your Free Website Audit"

Form inputs: #141412 background, 1px solid #2a2822 border, 10px border-radius, #f5f2ed text, #8a8578 placeholder, 14px 18px padding, 14px margin-bottom. Focus: border-color #4f8cff.

Status message area below form for success/error messages.

### 14. FINAL CTA
Label: SIMPLE WORKS
Heading: Ready when you are.
Subtitle: Fill out the form and I'll be back to you within 24 hours.

This section is CENTERED (text-align center). Padding: 8rem 3rem.

Include a centered radial gradient glow behind: radial-gradient(circle, rgba(79,140,255,0.1) 0%, transparent 60%), 600px × 600px, centered, pointer-events none.

Form (max-width 480px, centered, 2.5rem margin-top, left-aligned inputs):
- Your name (text, required)
- Email (email, required)
- Phone (tel, optional)
- Business name (text, optional)
- Tell me about your project (textarea, 4 rows)
- Submit button: "Book a Strategy Call"

Same input styling as audit form.

Below the form:
- Contact line: stephanie@simplworks.ai · 678.617.4598 (both as links — mailto and tel). Color #f5f2ed, 0.95rem.
- Tagline: "These aren't design projects. They're revenue systems." — italic, 0.85rem, color #8a8578. 1.2rem margin-top.

### 15. FOOTER
Border-top: 1px solid #2a2822. Padding: 3rem. Color: #8a8578. Font-size: 0.85rem.

Three columns (stacks on mobile):
- Left: SimplWorks.ai logo (same styling as nav logo, 1.3rem)
- Center: © 2026 SimplWorks.ai — All rights reserved.
- Right: Designed and built by SimplWorks.ai

Render "SimplWorks" with the logo styling (Works in accent blue) everywhere it appears in the footer.

## FORM INTEGRATION — CRITICAL SECURITY REQUIREMENT

DO NOT put any API keys, Supabase URLs, or credentials in client-side code. All form submissions must go through Next.js API routes.

Create TWO API routes:

### /api/audit (for the Free Audit form)
Posts to Supabase table: audit_leads
Fields: name, email, website_url, phone, source
Source value: "simplworks-free-audit"

### /api/contact (for the Strategy Call form)
Posts to Supabase table: strategy_call_leads
Fields: name, email, phone, business, message, source
Source value: "simplworks-website"

API route pattern:
```javascript
// app/api/contact/route.js
export async function POST(request) {
  const body = await request.json();
  const res = await fetch(process.env.SUPABASE_URL + '/rest/v1/strategy_call_leads', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': process.env.SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + process.env.SUPABASE_ANON_KEY,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({
      name: body.name?.trim(),
      email: body.email?.trim(),
      phone: body.phone?.trim() || null,
      business: body.business?.trim() || null,
      message: body.message?.trim() || null,
      source: 'simplworks-website'
    })
  });
  if (res.ok) return Response.json({ success: true });
  return Response.json({ error: 'Something went wrong.' }, { status: 500 });
}
```

Do the same pattern for /api/audit but posting to audit_leads with fields: name, email, website_url, phone, source.

Use process.env.SUPABASE_URL and process.env.SUPABASE_ANON_KEY — NOT NEXT_PUBLIC_ prefix. These must stay server-side only. I will set these as environment variables in Vercel after deployment.

Front-end forms POST to /api/audit and /api/contact respectively. Include email validation on the client side (must have @ and a real TLD like .com, .net, .org). Show validation error in red (#ef4444): "Please enter a valid email address (e.g. name@company.com)".

Success messages (color #4f8cff):
- Audit form: "Got it — I'll send your audit within 48 hours."
- Strategy form: "Got it — I'll be in touch within 24 hours."

Error message (color #8a8578): "Something went wrong. Try again or email stephanie@simplworks.ai"

Disable submit button and show "Sending..." text while the request is in flight. Re-enable after response.

## SEO — INCLUDE ALL OF THIS

- Page title: Custom Websites for Startups & Small Businesses | SimplWorks.ai
- Meta description: SimplWorks.ai builds custom, hand-coded websites for startups and small businesses. SEO and AI search optimization built in. Strategy call to live site in about a week.
- Open Graph tags: og:title, og:description, og:image (use a placeholder path like /og-image.png), og:url (https://simplworks.ai), og:site_name (SimplWorks.ai), og:locale (en_US), og:type (website)
- Twitter Card: summary_large_image with title, description, image
- Canonical URL: https://simplworks.ai
- Proper heading hierarchy: one h1 (hero headline), h2s for section headings, h3s for card titles
- Semantic HTML: section, main, footer, nav elements with proper nesting
- lang="en" on html tag
- Include a favicon link (placeholder path /favicon.ico)

## JSON-LD STRUCTURED DATA

Include two JSON-LD blocks in the head:

### ProfessionalService schema:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SimplWorks.ai",
  "url": "https://simplworks.ai",
  "email": "stephanie@simplworks.ai",
  "telephone": "+1-678-617-4598",
  "description": "SimplWorks.ai is a custom website development company that builds high-performance, SEO-optimized, AI-ready websites for startups, small businesses, and service providers across the United States.",
  "founder": {
    "@type": "Person",
    "name": "Stephanie Belote"
  },
  "serviceType": ["Web Design", "Web Development", "SEO", "Lead Generation"],
  "areaServed": "United States"
}
```

### FAQPage schema with all 8 FAQ items:
Generate this from the FAQ content above. Each question/answer pair should be a mainEntity item.

## MOBILE RESPONSIVE REQUIREMENTS

At 768px:
- Hide desktop nav links, show only logo + CTA button
- All card grids collapse to single column
- Comparison columns stack vertically with "vs." between them
- Stats banner stacks to single column
- Section padding reduces to 60px top/bottom, 24px sides
- Body font size drops to 16px
- About stat strip goes to 2x2 grid (grid-template-columns: repeat(2, 1fr))
- Process step cards stack to single column

At 480px:
- Hero buttons stack vertically
- Smaller headings
- About stat strip goes to single column

CRITICAL: Test that no cards render in 2 columns on phone screens. Every card grid must collapse to 1 column at the 768px breakpoint. No text should wrap to 2-3 words per line inside cards.

## ANIMATIONS

- Hero elements (badge, headline, subtitle, buttons) should fade in and slide up on load, staggered by 0.1s each
- Use CSS animations, not a JS animation library
- Cards have smooth hover transitions: border-color 0.3s, transform 0.3s
- Nav links: color transition 0.3s on hover
- FAQ items: smooth + icon rotation on open/close with 0.3s transition

## WHAT NOT TO DO

- Do NOT use Tailwind CSS
- Do NOT put API keys in client-side code
- Do NOT use NEXT_PUBLIC_ prefix for Supabase credentials
- Do NOT use transparent/rgba card backgrounds (use solid #141412)
- Do NOT use cool gray text colors (#d1d5db, #9ca3af, #f0f0f0) — use the warm palette (#f5f2ed, #8a8578, #ebe6dd)
- Do NOT use Space Grotesk, Inter, or Montserrat — use Instrument Serif + DM Sans
- Do NOT center body text paragraphs (only the Final CTA section and stats are centered)
- Do NOT skip scroll-padding-top (content will hide behind the fixed nav)
- Do NOT use inline styles for grid layouts in containers (this causes mobile override issues)
- Do NOT use external Google Fonts stylesheet links (use next/font/google to avoid render-blocking)
