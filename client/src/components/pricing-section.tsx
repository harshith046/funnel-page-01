import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useAuthModal } from "@/hooks/use-auth-modal";

export default function PricingSection() {
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

  const plans = [
    {
      name: "Starter",
      price: "$29",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics",
        "24/7 dedicated support",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="hero-bg py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Choose Your Plan</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Flexible pricing options designed to scale with your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`feature-card rounded-2xl p-8 text-center group transition-all duration-300 relative ${
                plan.popular ? 'border-2 border-cyan-400' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-2xl font-bold mb-4">{plan.name}</div>
              
              <div className="text-4xl font-bold mb-6 gradient-text">
                {plan.price}
                <span className="text-lg text-gray-400">/month</span>
              </div>
              
              <ul className="text-left space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-green-400 mr-3 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={openSignup}
                className={`w-full py-3 rounded-full font-semibold ${
                  plan.popular ? 'btn-primary animate-glow' : 'btn-primary'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
