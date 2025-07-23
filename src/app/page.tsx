import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WhyVitrinaSection from '@/components/sections/WhyVitrinaSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CasesSection from '@/components/sections/CasesSection';
import AboutSection from '@/components/sections/AboutSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  console.log("[TEST] Home page render");
  return (
    <main className="min-h-screen">
      {(() => { console.log("[TEST] Header render"); return <Header /> })()}
      {(() => { console.log("[TEST] HeroSection render"); return <HeroSection /> })()}
      {(() => { console.log("[TEST] WhyVitrinaSection render"); return <WhyVitrinaSection /> })()}
      {(() => { console.log("[TEST] ServicesSection render"); return <ServicesSection /> })()}
      {(() => { console.log("[TEST] CasesSection render"); return <CasesSection /> })()}
      {(() => { console.log("[TEST] AboutSection render"); return <AboutSection /> })()}
      {(() => { console.log("[TEST] FAQSection render"); return <FAQSection /> })()}
      {(() => { console.log("[TEST] Footer render"); return <Footer /> })()}
    </main>
  );
}
