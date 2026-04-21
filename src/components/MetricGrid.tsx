import { motion } from 'motion/react';

const metrics = [
  { label: 'Latency', value: '0.4ms', sub: 'Regional Average' },
  { label: 'Uptime', value: '99.99%', sub: 'SLA Guaranteed' },
  { label: 'Nodes', value: '14.2K', sub: 'Global Edge' },
  { label: 'Compute', value: '42.8PB', sub: 'Daily Processed' },
];

export default function MetricGrid() {
  return (
    <section className="py-32 px-8 bg-black relative">
       <div className="max-w-7xl mx-auto pt-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 overflow-hidden rounded-[2rem]">
             {metrics.map((m, i) => (
                <div key={i} className="bg-black p-12 md:p-20 flex flex-col items-center text-center group relative overflow-hidden">
                   {/* Background Glow */}
                   <div className="absolute inset-0 bg-[#bc13fe]/0 group-hover:bg-[#bc13fe]/[0.03] transition-all duration-700" />
                   
                   <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-8 block group-hover:text-[#bc13fe] transition-colors relative z-10"
                   >
                    {m.label}
                   </motion.span>
                   <span className="text-5xl md:text-8xl font-display font-medium italic mb-4 tracking-tighter relative z-10">
                    {m.value}
                   </span>
                   <span className="text-[10px] uppercase tracking-[0.2em] text-white/10 italic relative z-10">
                    {m.sub}
                   </span>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}
