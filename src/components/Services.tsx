import { motion } from 'motion/react';
import { Cpu, Globe, Rocket, Terminal, ArrowUpRight } from 'lucide-react';
import PerspectiveText from './PerspectiveText';

const services = [
  {
    id: "01",
    title: "System Architecture",
    description: "Designing end-to-end distributed systems with high availability and low latency.",
    icon: <Cpu className="text-white" />
  },
  {
    id: "02",
    title: "Full-Stack Engineering",
    description: "Robust frontends paired with resilient backends using the modern industrial tech stack.",
    icon: <Terminal className="text-white" />
  },
  {
    id: "03",
    title: "Cloud Infrastructure",
    description: "Automated deployment pipelines and serverless scale-on-demand solutions.",
    icon: <Globe className="text-white" />
  },
  {
    id: "04",
    title: "Performance Auditing",
    description: "Deep-dive optimization to remove bottlenecks and drastically improve system speed.",
    icon: <Rocket className="text-white" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-8 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.6em] text-[#bc13fe] font-bold mb-8 block">Expertise</span>
            <div className="text-6xl md:text-8xl font-bold font-display leading-[0.8] tracking-tighter uppercase italic">
              <PerspectiveText label="Specialized" />
              <div className="opacity-20"><PerspectiveText label="Technical Ops." /></div>
            </div>
          </div>
          <p className="text-white/30 max-w-sm text-xl font-light leading-relaxed border-l border-white/5 pl-8 italic">
            Strategic engineering for organizations requiring extreme scale and absolute reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group p-12 md:p-20 bg-white/[0.01] border border-white/5 rounded-[2.5rem] flex flex-col justify-between min-h-[500px] relative overflow-hidden transition-all duration-700 hover:border-[#bc13fe]/30"
            >
              <div className="flex justify-between items-start">
                <span className="text-4xl font-display text-white/5 group-hover:text-[#bc13fe]/40 transition-all duration-700 uppercase italic font-bold">{service.id}</span>
                <div className="w-16 h-16 flex items-center justify-center bg-white/5 rounded-full group-hover:bg-[#bc13fe] group-hover:text-black transition-all duration-500 transform group-hover:rotate-45">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              
              <div>
                <motion.div 
                   whileHover={{ scale: 1.1, rotate: 5 }}
                   className="mb-10 opacity-30 group-hover:opacity-100 transition-all duration-500 w-fit text-[#bc13fe]"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-4xl font-display font-medium uppercase mb-6 tracking-tight italic">
                   {service.title}
                </h3>
                <p className="text-white/30 max-w-xs group-hover:text-white/70 transition-all duration-500 text-lg leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Dynamic Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#bc13fe]/0 group-hover:bg-[#bc13fe]/5 blur-[100px] transition-all duration-1000 -translate-y-1/2 translate-x-1/2 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
