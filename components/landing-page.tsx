'use client'

import { Header } from "./Header"
import { Footer } from "./Footer"
import { HeroSection } from "./sections/HeroSection"
import { SolutionSection } from "./sections/SolutionSection"
import { CaseStudySection } from "./sections/CaseStudySection"
import { ServiceSection } from "./sections/ServiceSection"
import { ContactSection } from "./sections/ContactSection"

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#000000] text-white font-pretendard">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <SolutionSection />
      <CaseStudySection />
      <ServiceSection />
      <ContactSection scrollToSection={scrollToSection} />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
} 