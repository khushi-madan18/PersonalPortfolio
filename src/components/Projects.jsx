import { motion } from 'framer-motion';
import { ArrowRight, Github, Mic, Plane, Car } from 'lucide-react';
import SimulatedDashboard from './SimulatedDashboard';

const Projects = () => {
  const projects = [
      {
          title: "VocaCoach",
          desc: "A real-time AI voice interview platform using React, Node.js, Convex DB, and DeepSeek API. Conducts personalized mock interviews with actionable feedback.",
          link: "https://github.com/khushi-madan18/VocaCoach",
          demo: "https://voca-coach.vercel.app",
          tags: ["React", "Convex", "DeepSeek"],
          color: "from-blue-900 to-indigo-900",
          accent: "#60A5FA", // Blue-400
          image: "/images/projects/vocacoach_final.png"
      },
      {
          title: "TripTailor",
          desc: "An AI-driven itinerary generator built with React, Gemini API, and Firebase. Creates detailed, personalized travel plans in seconds.",
          link: "https://github.com/khushi-madan18/capstoneAITripPlanner.git",
          demo: "https://triptailor-eight.vercel.app",
          tags: ["React", "Gemini", "Firebase"],
          color: "from-orange-900 to-red-900",
          accent: "#FB923C", // Orange-400
          image: "/images/projects/triptailor_final.png"
      },
      {
          title: "Personal Portfolio",
          desc: "A high-performance, 3D interactive portfolio website built with React, Three.js, and Framer Motion. Features a custom particle system and simulated desktop interactions.",
          link: "https://github.com/khushi-madan18/PersonalPortfolio.git",
          demo: "https://personal-portfolio-nu-two-36.vercel.app",
          tags: ["React", "Three.js", "Framer Motion"],
          color: "from-pink-900 to-rose-900",
          accent: "#F472B6", // Pink-400
          image: "/images/projects/portfolio_final.png"
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
                                    href={project.demo} 
                                    target="_blank" 
                                    className="px-6 py-2 rounded-full text-black font-semibold flex items-center gap-2 transition-opacity hover:opacity-80"
                                    style={{ backgroundColor: project.accent }}
                                >
                                    Live Demo <ArrowRight size={16} />
                                </a>
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
