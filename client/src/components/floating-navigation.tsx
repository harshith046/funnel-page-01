import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuthModal } from "@/hooks/use-auth-modal";

export default function FloatingNavigation() {
  const { openLogin, openSignup } = useAuthModal();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 glass-morphism rounded-full px-6 py-3"
    >
      <div className="flex items-center space-x-8">
        <div className="text-2xl font-bold gradient-text">NeoFlow</div>
        
        <div className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('features')}
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
        
        <div className="flex space-x-3">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={openLogin}
            className="hover:text-cyan-400"
          >
            Login
          </Button>
          <Button 
            size="sm"
            onClick={openSignup}
            className="btn-primary px-6 py-2 rounded-full text-sm font-medium text-white"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
