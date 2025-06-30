
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BackgroundAnimation } from '@/components/BackgroundAnimation';
import { PartnerProgram } from '@/components/PartnerProgram';
import { InvestorProgram } from '@/components/InvestorProgram';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { BusinessSection } from '@/components/BusinessSection';
import { InvestorSection } from '@/components/InvestorSection';
import { InstitutionalSection } from '@/components/InstitutionalSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <BackgroundAnimation />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <PartnerProgram />
        <InvestorProgram />
        <TestimonialsCarousel />
        <BusinessSection />
        <InvestorSection />
        <InstitutionalSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
