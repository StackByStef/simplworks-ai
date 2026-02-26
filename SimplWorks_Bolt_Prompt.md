# SimplWorks.ai — Bolt.new Build Prompt

Paste everything below this line into Bolt.new as your initial prompt.

---

Build a Next.js single-page website for SimplWorks.ai — a custom web design agency. This will deploy to Vercel and connect to a custom domain. Build it right the first time. Follow every specification below exactly.

## STACK

- Next.js (App Router)
- React
- CSS Modules (NOT Tailwind)
- Google Fonts via next/font/google
- Deploys to Vercel

## FONTS

- Headings: Space Grotesk (weight 500, 600, 700)
- Body: DM Sans (weight 300, 400, 500, 600, 700)
- Font smoothing: -webkit-font-smoothing: antialiased on body

## COLOR SYSTEM

```
--bg: #111111
--bg-card: #1a1a1a
--text: #e0e0e0
--text-dim: #a0a0a0
--white: #f0f0f0
--cream: #ebe6dd
--accent: #4f8cff
--accent-hover: #3a6fd8
--accent-glow: rgba(79, 140, 255, 0.15)
--border: rgba(255, 255, 255, 0.1)
--border-hover: rgba(79, 140, 255, 0.4)
--green: #34d399
--red: #ef4444
```

Body text color is #e0e0e0. Subtitle/muted text is #a0a0a0 (6.5:1 contrast on #111111 — WCAG AA). NOT #888 or #777. Heading text is #f0f0f0.

## TYPOGRAPHY RULES

- Body font size: 18px desktop, 16px mobile
- Line height: 1.7 for body, 1.15-1.3 for headings
- Max content width for body text paragraphs: 720-780px
- Max section width: 1100px container centered with margin: 0 auto

## LAYOUT & SPACING

- Nav: 72px fixed, background rgba(17, 17, 17, 0.92) with backdrop-filter: blur(12px)
- Section padding: 100px top/bottom desktop, 60px mobile
- Side padding: 40px desktop, 24px mobile
- Card backgrounds: #1a1a1a (solid, NOT transparent/rgba)
- Card border: 1px solid rgba(255, 255, 255, 0.1)
- Card border-radius: 14px
- Card padding: 36px 28px large, 24px small
- Card hover: border-color changes to accent glow + translateY(-3px)
- Card grid gap: 24px
- scroll-behavior: smooth with scroll-padding-top: 80px
- Responsive breakpoints: 768px and 480px

## TEXT ALIGNMENT

- Section headings: CENTERED
- Section subtitles: CENTERED
- Section tag labels (like "WHAT WE BUILD"): CENTERED
- Body text paragraphs: LEFT-aligned within centered containers
- Card titles: LEFT-aligned
- Card descriptions: LEFT-aligned
- Hero content: CENTERED

Section headers should be wrapped in a centered container (text-align: center; max-width: 780px; margin: 0 auto 60px) with body content left-aligned below.

## BUTTONS

- Primary: accent background (#4f8cff), dark text, 14px 36px padding, 8px radius, 600 weight. Hover: darken + translateY(-2px)
- Secondary: transparent, text color, 1px solid rgba(255, 255, 255, 0.2) border, same padding. Hover: border turns accent blue (#4f8cff), background rgba(255,255,255,0.05).

## ICONS

- Use emoji for cards (as shown in the copy below)
- Icons sit inside 44x44px containers with border-radius: 10px and accent-glow background

## IMAGE PLACEHOLDERS

Include placeholder containers where images should go in the future:
- Hero section: a placeholder area to the right of the hero text (for a future hero image or illustration)
- About section: a placeholder area next to the bio text (for a headshot or brand image)

Style placeholders as dashed-border boxes with muted text saying "Image placeholder" so I know where to add images later. Make them easy to swap out.

## SCROLLING TICKER

Include a full-width scrolling ticker between the Hero and Services sections. Dark card background (#161616), border-top and border-bottom with the standard border color. The ticker should scroll horizontally continuously on an infinite loop.

Ticker text: Space Grotesk font, 1.3rem, color #ebe6dd (cream/near-white — NOT the muted gray). Items separated by a blue diamond (◆) at 0.65rem in the accent color #4f8cff.

Ticker items (duplicate the set so the scroll loops seamlessly):
- 90% of small businesses underutilize their website
- 70% of business homepages have no call-to-action
- ChatGPT has 400M+ weekly users
- Google AI Overviews now appear on 47% of searches
- 58% of Gen Z prefers AI over Google
- AI-cited businesses get 3x more qualified leads
- Your competitors are already optimizing for this

## PAGE STRUCTURE AND EXACT COPY

Build these sections in this exact order. Use the exact copy provided. Do not rewrite or rephrase anything.

### 1. NAVIGATION
Logo: SimplWorks.ai (the "Works" is in the accent color #4f8cff)
Links: Services, Who We Serve, Process, About, FAQ
CTA button: "Get a Free Website Audit" (links to #audit section)

### 2. HERO
Badge/tag above headline: Typewriter animation that types out "SIMPLE WORKS." letter by letter at 80ms speed, with a blinking cursor that disappears after typing completes, replaced by a pulsing period.

Headline: Your Website Should Work For You. Not Cost You Customers.

Subtitle: Most business websites look fine and perform terribly. We build the ones that actually work.

Buttons:
- Primary: "Book a Strategy Call" (links to #cta)
- Secondary: "See What We Build" (links to #services)

### 3. TICKER
(Described above in the SCROLLING TICKER section)

### 4. SERVICES — "What We Build"
Label: WHAT WE BUILD
Heading: Built as Infrastructure. Not Decoration.
Subtitle: Every SimplWorks site is built for performance, visibility, and lead generation from day one. No legacy sites, just clean, fast websites engineered to get found by Google, by AI, and by the people who matter.

3-column card grid:

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

2-column card grid:

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

2-column card grid:

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

Two-column comparison with "vs." in the middle:

LEFT COLUMN — "Legacy Website" (tag: "Outdated" in red)
Red circle markers with ✕:
- Built to look pretty for humans only
- Keyword-stuffed pages for old Google SEO
- Static pages that rarely get updated
- Vague copy: "We're the best! Call us today!"
- No structured data — AI has no idea what you do
- Invisible to ChatGPT, Perplexity, Gemini, Siri
- Losing traffic as Google shifts to AI Overviews

RIGHT COLUMN — "AI-Ready Website" (tag: "Future-Proof" in green)
Green circle markers with ✓:
- Built for humans AND AI engines to understand
- SEO + GEO — optimized for search AND AI answers
- Dynamic, regularly updated content signals authority
- Conversational Q&A content that mirrors how people ask AI
- Full schema markup — AI knows exactly what you offer and where
- Shows up when AI recommends businesses to potential customers
- Dominates both traditional search and AI-generated results

### 8. STATS BANNER
3-column centered stat strip:

400M+ — Weekly users asking AI for business recommendations
0% — Of legacy websites optimized for AI discovery
6 mo. — Window before early movers lock in AI authority

Stats numbers in accent color (#4f8cff), Space Grotesk font, large. Labels in muted text.

### 9. PROCESS — "How It Works"
Label: HOW IT WORKS
Heading: Three steps. About a week.
Subtitle: No drawn-out timelines. No mystery. We figure out what you need, build it right, and get you live.

3-column card grid with step numbers (01, 02, 03) as large faded accent-color numbers:

Step 01 — Map
We look at what you have, figure out where it's falling short, and build a plan around your actual business goals — not a template.

Step 02 — Build
Custom-coded from scratch with lead capture, mobile performance, search optimization, and AI discoverability built in. No shortcuts.

Step 03 — Deploy
We launch, test everything, and make sure it runs right. You get a live site with managed hosting and ongoing support. You focus on your business.

### 10. ABOUT
Label: ABOUT
Heading: Built by someone who understands business. Not just code.

Paragraph 1: SimplWorks was founded by Stephanie Belote. Before she ever wrote a line of code, she spent over two decades in the business world — corporate staffing at AT&T, national account management at First Union Bank, building and running a healthcare consulting company that helped medical practices increase their revenue, and years as a marketing rep in the insurance industry learning exactly how businesses attract and retain customers.

Paragraph 2: That experience is the foundation. She doesn't just build websites — she understands how businesses make money, where leads get lost, and what makes someone pick up the phone or fill out a form. These are not design projects. They are revenue systems.

Paragraph 3: She taught herself to code because she was tired of tools that looked good but didn't deliver. Every site is hand-built — no templates, no page builders. Clean code, fast performance, real results.

Below the bio paragraphs, include a 4-column stat strip (stacks to 2x2 on mobile):
- 20+ / Years in business
- 100% / Hand-coded, no templates
- ~1 Week / Strategy call to live site
- Revenue-First / Every site built to convert

Stat numbers in accent color, Space Grotesk font. Labels in muted text. Separated by top/bottom borders.

Include an image placeholder next to or near the bio text for a future headshot.

### 11. AI-READY SECTION
Label: BUILT FOR HOW SEARCH WORKS NOW
Heading: Google isn't the only thing finding your business anymore.

Paragraph 1: AI assistants — ChatGPT, Perplexity, Google AI Overview — are increasingly how people find businesses. They don't send traffic to links. They summarize answers. If your site isn't structured to be found and quoted by those systems, you're invisible to a growing share of your market.

Paragraph 2: Every SimplWorks site is built for both: traditional search rankings and AI-driven discovery. That's not an add-on. It's how we build.

Paragraph 3: Your business should show up wherever your customers are looking — whether that's a search results page or an AI assistant answering a question at 11pm on a phone. We make sure it does.

Give this section a visually distinct background — use a subtle gradient with accent color at low opacity to differentiate it from surrounding sections.

### 12. FAQ
Label: FAQ
Heading: Questions I hear a lot.

Accordion-style FAQ items (click to expand/collapse). Max-width 700px centered. Each item is a card with the standard card styling.

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

Paragraph 1: Most small business websites have problems you can't see — slow load times, missing SEO basics, and zero visibility in AI search results. You won't know until someone checks.

Paragraph 2: We'll run a full audit on your site and send you an honest breakdown of what's working, what's not, and what it's costing you.

Form fields:
- Your name (text, required)
- Email (email, required)
- Your website URL (text, optional)
- Phone (tel, optional)
- Submit button: "Get Your Free Website Audit"

Give this section a visually distinct background to differentiate it from the FAQ and CTA sections.

### 14. FINAL CTA
Label: SIMPLE WORKS
Heading: Ready when you are.
Subtitle: Fill out the form and I'll be back to you within 24 hours.

CENTERED layout.

Form fields:
- Your name (text, required)
- Email (email, required)
- Phone (tel, optional)
- Business name (text, optional)
- Tell me about your project (textarea)
- Submit button: "Book a Strategy Call"

Below the form:
- stephanie@simplworks.ai · 678.617.4598
- Tagline in italic muted text: "These aren't design projects. They're revenue systems."

### 15. FOOTER
Three columns:
- Left: SimplWorks.ai logo
- Center: © 2026 SimplWorks.ai — All rights reserved.
- Right: Designed and built by SimplWorks.ai

## FORM INTEGRATION — CRITICAL SECURITY REQUIREMENT

DO NOT put any API keys, Supabase URLs, or credentials in client-side code. All form submissions must go through a Next.js API route.

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

Use process.env.SUPABASE_URL and process.env.SUPABASE_ANON_KEY — NOT NEXT_PUBLIC_ prefix. These must stay server-side only.

Front-end forms POST to /api/audit and /api/contact respectively. Include email validation (must have @ and a real TLD). Show success message: "Got it — I'll send your audit within 48 hours." for audit form and "Got it — I'll be in touch within 24 hours." for strategy form. Show error message on failure.

## SEO — INCLUDE ALL OF THIS

- Page title: Custom Websites for Startups & Small Businesses | SimplWorks.ai
- Meta description: SimplWorks.ai builds custom, hand-coded websites for startups and small businesses. SEO and AI search optimization built in. Strategy call to live site in about a week.
- Open Graph tags: og:title, og:description, og:image (placeholder), og:url, og:site_name (SimplWorks.ai), og:locale (en_US), og:type (website)
- Twitter Card: summary_large_image with title, description, image
- Canonical URL: https://simplworks.ai
- Proper heading hierarchy: one h1 (hero headline), h2s for sections, h3s for cards
- Semantic HTML: section, article, main, footer, nav elements
- lang="en" on html tag
- Favicon placeholder

## JSON-LD STRUCTURED DATA

Include a ProfessionalService schema in the head:
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

Also include FAQPage schema with all 8 FAQ items.

## MOBILE RESPONSIVE REQUIREMENTS

At 768px:
- Hide desktop nav links, show only logo + CTA button
- All grids collapse to single column
- Section padding reduces to 60px top/bottom, 24px sides
- Font size drops to 16px
- About stat strip goes to 2x2 grid
- Stats banner stacks to single column

At 480px:
- Hero buttons stack vertically
- Smaller headings

Test everything at both breakpoints. No horizontal scrolling. No text wrapping to 2-3 words per line on cards.

## WHAT NOT TO DO

- Do NOT use Tailwind CSS
- Do NOT put API keys in client-side code
- Do NOT use NEXT_PUBLIC_ prefix for Supabase credentials
- Do NOT use transparent/rgba card backgrounds
- Do NOT use #888 or #777 for text colors
- Do NOT use Inter or Montserrat fonts (use Space Grotesk + DM Sans)
- Do NOT center body text paragraphs (only headings and labels are centered)
- Do NOT skip the scroll-padding-top (content will hide behind the fixed nav)
- Do NOT use Instrument Serif (that was the old build)
