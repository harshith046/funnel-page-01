import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Rocket } from "lucide-react";
import { useAuthModal } from "@/hooks/use-auth-modal";

export default function ContactSection() {
  const { openSignup } = useAuthModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="hero-bg py-20 relative">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl font-bold gradient-text mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-12"
          >
            Join the revolution and transform your workflow today
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="relative mb-12"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400"
                alt="Abstract colorful tech background"
                className="w-full h-64 object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={openSignup}
                  className="btn-primary px-12 py-6 rounded-full text-xl font-bold text-white animate-glow z-10"
                >
                  <Rocket className="mr-3 h-6 w-6" />
                  Start Your Free Trial
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <motion.div
              variants={itemVariants}
              className="group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <Mail className="h-8 w-8 text-cyan-400 mb-4 mx-auto group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400">hello@neoflow.com</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <Phone className="h-8 w-8 text-purple-400 mb-4 mx-auto group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <MessageCircle className="h-8 w-8 text-pink-400 mb-4 mx-auto group-hover:animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-400">Available 24/7</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
