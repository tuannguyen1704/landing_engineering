import { motion } from 'motion/react';
import PerspectiveText from './PerspectiveText';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

const steps = [
  {
    title: "Discovery",
    desc: "We analyze your existing core infrastructure to identify fundamental bottlenecks and potential for extreme acceleration.",
    icon: <Layers size={32} />
  },
  {
    title: "Hardening",
    desc: "Implementing zero-trust security layers and resilient micro-services that withstand any load spike.",
    icon: <ShieldCheck size={32} />
  },
  {
    title: "Scale",
    desc: "Deployment of distributed systems that automatically orchestrate through intelligent cloud mesh networks.",
    icon: <Zap size={32} />
  }
];

export default function Approach() {
  return (
    <section className="py-48 px-8 bg-black relative overflow-hidden">
      {/* Background Glow for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#bc13fe]/5 blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#bc13fe] font-bold mb-8 block">Execution</span>
          <div className="text-6xl md:text-[8rem] font-bold font-display leading-[0.8] tracking-tighter uppercase italic">
            <PerspectiveText label="Our" />
            <div className="text-white/10 italic"><PerspectiveText label="Methodology." /></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="group p-12 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all duration-700"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#bc13fe]/10 text-[#bc13fe] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#bc13fe] group-hover:text-black transition-all duration-500">
                {step.icon}
              </div>
              <h3 className="text-3xl font-display font-medium uppercase mb-6 tracking-tight italic">{step.title}</h3>
              <p className="text-white/30 text-lg leading-relaxed font-light group-hover:text-white/60 transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
