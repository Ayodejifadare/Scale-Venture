import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import SolutionsSection from "@/components/solutions-section";
import IntegrationSection from "@/components/integration-section";
import CaseStudiesSection from "@/components/case-studies-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <IntegrationSection />
      <CaseStudiesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
