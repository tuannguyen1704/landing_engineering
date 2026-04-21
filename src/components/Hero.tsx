import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import React from 'react';
import AnimatedNumber from './AnimatedNumber';
import SphereCanvas from './SphereCanvas';

const revealVariants = {
  hidden: { y: "115%", skewY: 10, rotateZ: 5 },
  visible: (i: number) => ({
    y: 0,
    skewY: 0,
    rotateZ: 0,
    transition: {
      duration: 1.5,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.1 * i
    }
  })
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-500, 500], [5, -5]);
  const rotateY = useTransform(springX, [-500, 500], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center px-8 overflow-hidden pointer-events-auto"
    >
      <div className="atmosphere" />
      <div className="grid-base" />

      {/* 3D Sphere - Outside perspective transform */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none z-0">
        <SphereCanvas />
      </div>

      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="max-w-7xl mx-auto w-full relative z-10"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="w-12 h-[1px] bg-[#bc13fe] shadow-[0_0_10px_#bc13fe]" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#bc13fe] font-bold">
              Engineering Future State
            </span>
          </motion.div>

          <h1 className="text-[12vw] md:text-[8rem] lg:text-[9rem] font-bold leading-[0.95] tracking-tighter uppercase mb-20 font-display italic">
            <div className="overflow-hidden pb-4 -mb-4">
              <motion.span custom={1} initial="hidden" animate="visible" variants={revealVariants} className="block origin-top-left">Architecting</motion.span>
            </div>
            <div className="overflow-hidden h-fit flex items-center py-2">
              <motion.span custom={2} initial="hidden" animate="visible" variants={revealVariants} className="block text-white/20 origin-top-left">Systems</motion.span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] bg-white/10 flex-grow mx-8 origin-left"
              />
            </div>
            <div className="overflow-hidden pb-4 -mb-4">
              <motion.span custom={3} initial="hidden" animate="visible" variants={revealVariants} className="block origin-top-left">Of Value.</motion.span>
            </div>
          </h1>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-20 lg:gap-40">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-white/40 text-xl md:text-2xl max-w-sm font-light leading-relaxed border-l-2 border-[#bc13fe] pl-10"
            >
              MECSU transforms vision into resilient, high-speed infra. We scale the impossible.
            </motion.p>

            <div className="flex gap-20">
              {[{ label: 'Uptime', val: 99.9, s: '%' }, { label: 'Cap', val: 4.2, s: 'GB/s' }].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 + (i * 0.2) }}
                  className="flex flex-col"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">{stat.label}</span>
                  <span className="text-5xl font-display font-medium italic"><AnimatedNumber value={stat.val} suffix={stat.s} decimals={1} /></span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-12 flex items-center gap-8"
      >
        <button className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-semibold hover:text-[#bc13fe] transition-colors">
          Explore Systems
          <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-[#bc13fe] group-hover:bg-[#bc13fe]/10 transition-all">
            <ArrowRight size={14} />
          </span>
        </button>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 text-white/20"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
