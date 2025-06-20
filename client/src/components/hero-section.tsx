import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuthModal } from "@/hooks/use-auth-modal";
import { Rocket, Play } from "lucide-react";

export default function HeroSection() {
  const { openSignup } = useAuthModal();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold mb-6 gradient-text leading-tight"
        >
          Revolutionary
          <br />
          SaaS Platform
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Transform your workflow with cutting-edge AI-powered automation and seamless integrations
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={openSignup}
            className="btn-primary px-8 py-4 rounded-full text-lg font-semibold text-white animate-glow"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Start Free Trial
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection('features')}
            className="glass-morphism px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:bg-opacity-20 transition-all duration-300 border-white/20"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
        >
          <motion.div
            className="text-center"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-3xl font-bold text-cyan-400">50K+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </motion.div>
          <motion.div
            className="text-center"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -1 }}
          >
            <div className="text-3xl font-bold text-purple-400">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </motion.div>
          <motion.div
            className="text-center"
            animate={{ y: [-5, 15, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -2 }}
          >
            <div className="text-3xl font-bold text-pink-400">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
