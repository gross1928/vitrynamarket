import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import WhyVitrinaSection from '@/components/sections/WhyVitrinaSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CasesSection from '@/components/sections/CasesSection';
import AboutSection from '@/components/sections/AboutSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyVitrinaSection />
      <ServicesSection />
      <CasesSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
