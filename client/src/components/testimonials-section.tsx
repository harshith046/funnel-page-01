import { motion } from "framer-motion";

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      rating: "⭐⭐⭐⭐⭐",
      text: "NeoFlow transformed our entire workflow. The AI-powered insights have increased our productivity by 300%.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      color: "text-cyan-400"
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      text: "The real-time collaboration features are game-changing. Our team has never been more synchronized.",
      author: "Michael Chen",
      role: "CTO, StartupX",
      color: "text-purple-400"
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      text: "Outstanding security and support. We can focus on our business while NeoFlow handles the rest.",
      author: "Emily Rodriguez",
      role: "Operations Manager, ScaleUp",
      color: "text-pink-400"
    }
  ];

  return (
    <section id="testimonials" className="section-bg py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">What Our Users Say</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust NeoFlow
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              variants={cardVariants}
              animate={{ y: [-10, 10, -10] }}
              transition={{
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * -1,
                },
              }}
              className="feature-card rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">{testimonial.rating}</div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className={`font-semibold ${testimonial.color}`}>
                {testimonial.author}
              </div>
              <div className="text-sm text-gray-400">{testimonial.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
