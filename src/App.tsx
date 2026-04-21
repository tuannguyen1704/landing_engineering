/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MetricGrid from './components/MetricGrid';
import Approach from './components/Approach';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function App() {
  const { scrollYProgress } = useScroll();
  // Parallax footer effect - slides up as it reveals
  const footerY = useTransform(scrollYProgress, [0.8, 1], [150, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0.8, 1], [0.5, 1]);

  return (
    <div className="bg-black selection:bg-cyan-500/30 page-container overflow-x-hidden">
      <Preloader />
      
      {/* Blurred background image layer */}
      <div className="project-bg" />
      
      <Navbar />
      
      <div className="main-content">
        <main>
          <Hero />
          
          {/* Partnership Marquee (Luxury Style) */}
          <section className="py-24 border-y border-white/5 bg-black overflow-hidden whitespace-nowrap group">
            <div className="flex animate-marquee">
              <div className="flex items-center gap-32 px-16 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
                 {['ASTRON', 'QUANTUM', 'SPATIAL', 'VERTEX', 'OMNI', 'NEBULA', 'COSMOS', 'TITAN'].map((logo, i) => (
                   <span key={i} className="text-4xl font-display font-bold tracking-tighter text-white hover:text-[#bc13fe] transition-colors cursor-default">{logo}</span>
                 ))}
              </div>
              <div className="flex items-center gap-32 px-16 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
                 {['ASTRON', 'QUANTUM', 'SPATIAL', 'VERTEX', 'OMNI', 'NEBULA', 'COSMOS', 'TITAN'].map((logo, i) => (
                   <span key={i + 10} className="text-4xl font-display font-bold tracking-tighter text-white hover:text-[#bc13fe] transition-colors cursor-default">{logo}</span>
                 ))}
              </div>
            </div>
          </section>
          
          <Services />
          
          <MetricGrid />

          {/* Impact Statement */}
          <section className="py-48 px-8 bg-black relative overflow-hidden text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] md:text-[7rem] font-display font-bold leading-tight uppercase italic text-white/5 reveal-text"
            >
              Efficiency <br /> Meets <br /> <span className="text-[#bc13fe] text-glow shadow-[#bc13fe]">Elegance.</span>
            </motion.h2>
          </section>

          <Approach />
          
          <Projects />
        </main>
      </div>

      <div className="footer-reveal-container">
        <motion.div 
          style={{ y: footerY, opacity: footerOpacity }}
          className="w-full h-full"
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}
