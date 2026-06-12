import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Comparison from '@/components/Comparison';
import Mechanism from '@/components/Mechanism';
import SocialProof from '@/components/SocialProof';
import TheApp from '@/components/TheApp';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden text-[#e5e7eb]">
      <Hero />
      <PainPoints />
      <Comparison />
      <Mechanism />
      <SocialProof />
      <TheApp />
      <Pricing />
      <Footer />
    </main>
  );
}
