import Hero from '@/components/Hero';
import TheShift from '@/components/TheShift';
import TheFix from '@/components/TheFix';
import Tdv from '@/components/Tdv';
import TheProcess from '@/components/TheProcess';
import TheBuilder from '@/components/TheBuilder';
import Faq from '@/components/Faq';
import ReachMe from '@/components/ReachMe';
import ChatIcon from '@/components/ChatIcon';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      {/* Visually-hidden H1 for SEO (WEO Guide §Semantic HTML).
          Keyword-bound and location-anchored. Does not disturb hero design. */}
      <h1 className="visually-hidden">
        SimplWorks — Custom Websites Built by Hand | Knoxville, Tennessee
      </h1>

      <main>
        <Hero />
        <TheShift />
        <TheFix />
        <Tdv />
        <TheProcess />
        <TheBuilder />
        <ReachMe />
        <Faq />
      </main>

      <ChatIcon />
      <Footer />

      <JsonLd />
    </>
  );
}
