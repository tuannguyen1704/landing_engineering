import ProjectCard from './ProjectCard';
import PerspectiveText from './PerspectiveText';

const projects = [
  {
    id: "01",
    title: "Quantum Ledger",
    category: "BLOCKCHAIN INFRASTRUCTURE",
    image: "https://picsum.photos/seed/nux1/1200/800",
    description: "Architecting a high-throughput distributed ledger for institutional assets.",
    tags: ["Distributed Systems", "Cryptography"]
  },
  {
    id: "02",
    title: "Vertex AI Core",
    category: "NEURAL ARCHITECTURE",
    image: "https://picsum.photos/seed/nux2/1200/800",
    description: "Developing proprietary model training frameworks for enterprise-grade LLMs.",
    tags: ["Deep Learning", "Infrastructure"]
  },
  {
    id: "03",
    title: "Omni Mesh",
    category: "CLOUD ORCHESTRATION",
    image: "https://picsum.photos/seed/nux3/1200/800",
    description: "Next-gen service mesh providing seamless connectivity across multi-cloud clusters.",
    tags: ["Kubernetes", "Rust"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 bg-black relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-32">
          <span className="text-xs uppercase tracking-[0.6em] text-[#bc13fe] font-bold mb-8">Archive</span>
          <div className="text-6xl md:text-[10rem] font-bold font-display leading-[0.8] tracking-tighter uppercase mb-8">
            <PerspectiveText label="Case" />
            <div className="text-white/10 italic"><PerspectiveText label="Studies." /></div>
          </div>
        </div>

        <div className="space-y-48">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
