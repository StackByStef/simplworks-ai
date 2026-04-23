/**
 * Structured data — Organization + WebPage + FAQPage (WEO Guide §Tier 1).
 *
 * FAQPage answers MUST match the visible copy in components/Faq.jsx exactly.
 * If Faq.jsx copy changes, update this file in the same commit.
 */

const SITE_URL = 'https://simplworks.ai';

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SimplWorks',
  legalName: 'SimplWorks.ai',
  url: SITE_URL,
  // logo: add when a real brand logo file exists (V2). Omitting is
  // preferable to a broken reference for Google's Rich Results Test.
  founder: {
    '@type': 'Person',
    name: 'Stephanie Belote',
    jobTitle: 'Founder and Builder',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Knoxville',
    addressRegion: 'TN',
    addressCountry: 'US',
  },
  email: 'stephanie@simplworks.ai',
  telephone: '+1-678-617-4598',
  description:
    'SimplWorks builds custom websites by hand, one at a time. Coded from scratch by Stephanie Belote with SEO, AEO, and GEO built in. Knoxville, TN. Delivered in about a week.',
};

const webPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'SimplWorks — Custom Websites Built by Hand',
  url: SITE_URL,
  description:
    'SimplWorks builds custom websites by hand, one at a time. Coded from scratch by Stephanie Belote with SEO, AEO, and GEO built in. Knoxville, TN. Delivered in about a week.',
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'SimplWorks',
    url: SITE_URL,
  },
};

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is SimplWorks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SimplWorks is a custom website studio run by Stephanie Belote, a 20-year business operator who builds websites by hand for small business owners, service providers, startups, and creators. Every site is coded from scratch, measured against one question, will this bring you customers, and delivered in about a week.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is Stephanie Belote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stephanie Belote is the founder and builder behind SimplWorks. She spent 20 years running and building businesses at AT&T, First Union Bank, a staffing franchise she built from the ground up, and a healthcare consulting company of her own, before teaching herself to code and launching SimplWorks. Every SimplWorks website is built by her directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is SimplWorks based?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SimplWorks is based in Knoxville, Tennessee. Stephanie works with business owners across the country. Every project is handled remotely, end to end, with no travel required from the client.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a SimplWorks build take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most SimplWorks websites are built and live in about one week. The timeline includes a planning conversation to map the site to the business, the full build, and launch. Larger or multi-page builds get their own timeline, scoped at the start so there are no surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you use templates or page builders, and what makes a SimplWorks site different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No templates and no page builders. Every SimplWorks site is coded by hand. That means the site is built specifically for the business, around its customer and its sale, instead of starting from a generic framework. The difference shows up in how the site performs, how fast it loads, how easily it shows up in search and AI answers, and how well it holds up over time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SimplWorks do SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Every SimplWorks website includes SEO, AEO (AI answer engine optimization), and GEO (generative engine optimization) built in from the first line of code. It's not an add-on or upsell. The site is built to show up in traditional search, AI answer engines like ChatGPT and Perplexity, and AI-generated results.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the site launches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every SimplWorks client receives full documentation of what was built, why it was built that way, and how to maintain it. But a website is not a finished product the day it launches. Content ages, search rankings shift, performance drifts, and the site you paid for slowly stops working if nobody maintains it. Most clients continue working with SimplWorks after launch through a monthly care plan that covers updates, content changes, performance monitoring, and ongoing optimization. No lock-in, no long contracts, just the work that keeps the site bringing in customers. Stephanie does not disappear after launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is SimplWorks different from big agencies and DIY platforms like Wix or Squarespace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Big agencies charge tens of thousands of dollars, take months to deliver, and often disappear after launch. DIY platforms like Wix and Squarespace lock the business into templates, slow page speeds, and limited search visibility. SimplWorks is a custom build, handled by one operator who has run real businesses, delivered in about a week, at a price that makes sense for owners who need the site to actually bring in customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The fastest way to start is to request a free 10-point website friction audit. Send your current website URL to stephanie@simplworks.ai and you will receive an audit back showing what's working, what's leaking, and what to fix first. No call required, no pitch, just the audit.",
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
