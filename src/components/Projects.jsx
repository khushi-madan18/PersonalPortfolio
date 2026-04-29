import { motion } from 'framer-motion';
import { ArrowRight, Github, Mic, Plane, Car } from 'lucide-react';
import SimulatedDashboard from './SimulatedDashboard';

const Projects = () => {
  const projects = [
      {
          title: "Farmer Decision Support System: Mandi Price Analysis",
          desc: "Indian farmers often face suboptimal price realization due to information asymmetry and price variations across Mandis (markets). This project analyzes 6,000 transactional records to build a decision support system that moves farmers from intuition-based to insight-based agriculture.",
          link: "https://github.com/anshika292005/DVA-capstone",
          tags: ["Excel", "Data Analysis", "Visualization"],
          color: "from-green-900 to-emerald-900",
          accent: "#34D399", 
          image: "/images/projects/mandi_price.png"
      },
      {
          title: "NYC Rolling Sales Analysis",
          desc: "This project presents a comprehensive analysis of New York City's real estate market using the NYC Rolling Sales dataset (2016–2017). The study examines property transaction patterns, borough-wise pricing dynamics, seasonal sales behavior, and building-age distributions to deliver actionable intelligence for investors, brokers, and market analysts.",
          link: "https://github.com/ka-ori/SectionB_G16_NYC_RealEstate_Analysis",
          tags: ["Tableau", "Python", "Jupyter Notebook", "numpy", "pandas", "matplotlib", "seaborn"],
          color: "from-blue-900 to-sky-900",
          accent: "#63B3FF0", 
          image: "/images/projects/nyc.png"
      }
      
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-6 flex items-center justify-center">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-20">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-[#FC8EAC] mb-4">Selected Work</h2>
                <p className="text-gray-400">A showcase of projects that demonstrate my technical capabilities.</p>
            </motion.div>

            <motion.div 
                className="flex flex-col gap-20"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } }
                        }}
                        className="flex flex-col md:flex-row gap-12 items-center"
                    >
                        {/* Left: Image Container (Animated Interaction) */}
                        <motion.div 
                            className="w-full md:w-3/5 aspect-video rounded-3xl bg-zinc-900 border flex flex-col items-center justify-center overflow-hidden relative group gap-4 cursor-pointer shadow-2xl"
                            style={{ borderColor: `${project.accent}20` }} 
                            whileHover={{ 
                                scale: 1.02, 
                                rotateY: 2, 
                                rotateX: 2, 
                                z: 10,
                                boxShadow: `0 20px 40px -10px ${project.accent}20`
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                             <SimulatedDashboard image={project.image} color={project.accent} />
                        </motion.div>

                        {/* Right: Content */}
                        <div className="w-full md:w-2/5 space-y-6 text-left">
                            <h3 className="text-4xl font-bold" style={{ color: project.accent }}>{project.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.desc}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tIndex) => (
                                    <span 
                                        key={tIndex} 
                                        className="px-3 py-1 text-xs font-semibold bg-zinc-800 rounded-md border uppercase tracking-wider"
                                        style={{ color: project.accent, borderColor: `${project.accent}33` }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4">
                                
                                 <a 
                                    href={project.link} 
                                    target="_blank" 
                                    className="px-6 py-2 rounded-full border font-semibold flex items-center gap-2 transition-colors hover:bg-white/5"
                                    style={{ color: project.accent, borderColor: `${project.accent}33` }}
                                 >
                                    <Github size={16} /> Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Projects;
