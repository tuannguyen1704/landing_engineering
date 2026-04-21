import { motion } from 'motion/react';

interface PerspectiveTextProps {
  label: string;
}

export default function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className="perspective-text overflow-hidden relative leading-[0.8] tracking-tighter uppercase font-display italic">
      <motion.div
        initial={{ y: "100%", skewY: 10 }}
        whileInView={{ y: 0, skewY: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2, 
          ease: [0.215, 0.610, 0.355, 1.000],
          delay: 0.1
        }}
        className="origin-top-left"
      >
        {label}
      </motion.div>
    </div>
  );
}
