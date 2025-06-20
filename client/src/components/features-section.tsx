import { motion } from "framer-motion";
import { Brain, Users, Shield, ArrowRight } from "lucide-react";
import { useAuthModal } from "@/hooks/use-auth-modal";

export default function FeaturesSection() {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms provide deep insights into your data patterns and performance metrics.",
      color: "text-cyan-400",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Seamlessly work together with your team across projects with live updates and instant synchronization.",
      color: "text-purple-400",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and advanced security protocols ensure your data remains protected at all times.",
      color: "text-pink-400",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="features" className="section-bg py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Powerful Features</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the tools that will revolutionize your productivity
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="feature-card rounded-2xl p-8 group cursor-pointer"
              onClick={openSignup}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className={`text-3xl mb-4 ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              
              <p className="text-gray-300 mb-6">{feature.description}</p>
              
              <div className={`${feature.color} font-semibold group-hover:text-white transition-colors duration-300 flex items-center`}>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
