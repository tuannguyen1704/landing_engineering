import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Expertise', href: '#services' },
  { name: 'Case Studies', href: '#projects' },
  { name: 'Insights', href: '#' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[1px] bg-[#bc13fe] origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <span className="text-xl font-display font-bold tracking-tighter text-white uppercase italic">
                MECSU <span className="text-white/20 px-2 font-light">/</span> Engineering
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 hover:text-white transition-all duration-500 relative group/nav"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#bc13fe] transition-all duration-500 group-hover/nav:w-full" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8">
              <button className="hidden sm:flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-white group bg-white/5 border border-white/5 px-6 py-3 rounded-full hover:bg-[#bc13fe] hover:text-black transition-all duration-500">
                Init Project <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white/50 hover:text-white focus:outline-none"
                >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: '100vh', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-[#050508] fixed inset-0 top-20 z-40 transition-all"
        >
          <div className="px-8 pt-12 space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-medium text-white block uppercase tracking-tighter hover:text-[#bc13fe] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-12">
              <button className="w-full text-left text-xs uppercase tracking-[0.4em] font-bold text-[#bc13fe] py-6 border-y border-white/5">
                Start A Conversation
              </button>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
