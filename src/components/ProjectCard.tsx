import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
    tags: string[];
  };
  index: number;
  key?: any;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 group`}
    >
      <div className="flex-1 w-full relative overflow-hidden rounded-2xl aspect-[16/10] bg-zinc-900 border border-white/5">
        <motion.img 
          style={{ y }}
          src={project.image} 
          alt={project.title}
          referrerPolicy="no-referrer"
          className="absolute -top-20 left-0 w-full h-[calc(110%+100px)] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />
      </div>
      
      <div className="flex-1 flex flex-col items-start">
        <span className="text-xs font-mono text-[#bc13fe] mb-4 tracking-widest uppercase">{project.category}</span>
        <h3 className="text-5xl md:text-6xl font-display font-bold uppercase mb-6 tracking-tighter leading-tight italic group-hover:text-[#bc13fe] transition-colors">
          {project.title}
        </h3>
        <p className="text-white/40 text-xl font-light mb-8 max-w-md leading-relaxed">
          {project.description}
        </p>
        <div className="flex gap-4 mb-10">
          {project.tags.map(tag => (
            <span key={tag} className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-white/50">{tag}</span>
          ))}
        </div>
        
        <button className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:text-[#bc13fe] transition-colors group/btn">
          Technical Breakdown 
          <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-[#bc13fe] group-hover/btn:bg-[#bc13fe]/10 transition-all">
            <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
    </motion.div>
  );
}
