import { motion } from "framer-motion";
import ParticlesBackground from "@/components/particles-background";
import FloatingNavigation from "@/components/floating-navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import AuthModals from "@/components/auth-modals";
import FloatingShapes from "@/components/floating-shapes";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
      {/* Background Effects */}
      <ParticlesBackground />
      <FloatingShapes />
      
      {/* Navigation */}
      <FloatingNavigation />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </motion.main>
      
      {/* Modals */}
      <AuthModals />
    </div>
  );
}
