import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 800);
          return 100;
        }
        // Quadratic-like speed boost
        const step = prev < 50 ? 1 : prev < 80 ? 2 : 4;
        return Math.min(100, prev + step);
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[999] bg-[#050508] flex flex-col items-center justify-center pointer-events-auto"
        >
          <div className="absolute top-12 left-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 italic">MECSU Engineering Group</span>
          </div>

          <div className="relative overflow-hidden mb-8">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-display font-medium text-white tracking-widest uppercase"
            >
              Building The Future
            </motion.h2>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-8xl md:text-[12rem] font-display font-bold text-white/5 relative">
              {progress}
            </div>
            <div className="w-48 h-[1px] bg-white/10 mt-[-2rem] relative overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#bc13fe]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          
          <div className="absolute bottom-12 right-12 text-[10px] font-mono text-white/20 uppercase tracking-widest">
            Sequence: {progress}% Complete
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
