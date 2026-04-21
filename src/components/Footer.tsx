import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full h-full flex flex-col justify-between py-24 px-8 bg-black relative">
      <div className="max-w-7xl mx-auto relative z-10 w-full mt-12 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-8">
          <span className="text-xs uppercase tracking-[0.4em] text-white/30 mb-8 block">Connect</span>
          <h2 className="text-5xl md:text-[10rem] font-bold font-display leading-[0.8] tracking-tighter uppercase mb-16">
            Start <br /> 
            <span className="text-white/20 italic">A Project.</span>
          </h2>
          
          <div className="flex flex-wrap gap-12 text-sm uppercase tracking-widest font-semibold">
            <a href="mailto:init@nexus.engineering" className="hover:text-[#bc13fe] transition-colors border-b border-white/10 pb-2">Email Us</a>
            <a href="#" className="hover:text-[#bc13fe] transition-colors border-b border-white/10 pb-2">LinkedIn</a>
            <a href="#" className="hover:text-[#bc13fe] transition-colors border-b border-white/10 pb-2">GitHub</a>
            <a href="#" className="hover:text-[#bc13fe] transition-colors border-b border-white/10 pb-2">Twitter / X</a>
          </div>
        </div>
        
        <div className="md:col-span-4 flex flex-col justify-end">
          <div className="space-y-12 mb-16">
            <div>
              <h4 className="text-xs font-bold mb-6 text-white/40 uppercase tracking-[0.2em]">Global Presence</h4>
              <p className="text-white/60 text-lg font-light leading-relaxed">
                Distributed Collective <br />
                San Francisco / Berlin / Tokyo
              </p>
            </div>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-[#bc13fe] group-hover:text-black transition-all group-hover:border-white">
                <ArrowUpRight size={24} />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold">Schedule Consultation</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-white/20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#bc13fe] rounded-full animate-pulse" />
          System Operational: 99.9%
        </div>
        <p>© 2026 MECSU Engineering Group — All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Term</a>
        </div>
      </div>
    </footer>
  );
}
