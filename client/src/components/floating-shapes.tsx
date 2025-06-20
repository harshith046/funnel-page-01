import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <motion.div
        className="floating-shape w-64 h-64 top-20 left-10 opacity-20"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-shape w-32 h-32 top-1/3 right-20 opacity-30"
        animate={{
          y: [20, -20, 20],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -2,
        }}
      />
      <motion.div
        className="floating-shape w-48 h-48 bottom-20 left-1/4 opacity-25"
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -4,
        }}
      />
    </div>
  );
}
