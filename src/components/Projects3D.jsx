import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export const Projects3D = () => {
  const { viewport } = useThree();
  
  const projects = [
      {
          title: "Farmer Decision Support System: Mandi Price Analysis",
          desc: "Indian farmers often face suboptimal price realization due to information asymmetry and price variations across Mandis (markets). This project analyzes 6,000 transactional records to build a decision support system that moves farmers from intuition-based to insight-based agriculture.",
          link: "https://github.com/anshika292005/DVA-capstone",
          tags: ["Excel", "Data Analysis", "Visualization"],
          color: "from-green-900 to-emerald-900"
      },
      {
          title: "NYC Rolling Sales Analysis",
          desc: "This project presents a comprehensive analysis of New York City's real estate market using the NYC Rolling Sales dataset (2016–2017). The study examines property transaction patterns, borough-wise pricing dynamics, seasonal sales behavior, and building-age distributions to deliver actionable intelligence for investors, brokers, and market analysts.",
          link: "https://github.com/ka-ori/SectionB_G16_NYC_RealEstate_Analysis",
          tags: ["Tableau", "Python", "Jupyter Notebook", "numpy", "pandas", "matplotlib", "seaborn"],
          color: "from-blue-900 to-sky-900",
      }
  ];

  return (
    <group position={[0, -viewport.height * 2, 0]}>
        <Html center transform={false} className="w-screen flex justify-center items-center pointer-events-none">
            <div className="pointer-events-auto max-w-6xl w-full px-6 flex flex-col gap-20">
               <h2 className="text-4xl md:text-5xl font-bold text-[#FC8EAC] text-center mb-0">
                    Featured Projects
                </h2>

                {projects.map((project, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-black/40 p-8 rounded-3xl border border-white/5 hover:border-[#FC8EAC]/30 transition-all">
                        {/* Left: Image Container */}
                        <div className={`aspect-video rounded-xl bg-gray-800 border border-white/10 flex items-center justify-center overflow-hidden relative group`}>
                             <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                             <span className="text-gray-500 font-mono text-sm">Dashboard Preview</span>
                        </div>

                        {/* Right: Content */}
                        <div className="space-y-6 text-left">
                            <h3 className="text-3xl font-bold text-[#FC8EAC]">{project.title}</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {project.desc}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className="px-3 py-1 text-xs font-semibold text-white bg-white/10 rounded-full border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} target="_blank" className="inline-block text-white hover:text-[#FC8EAC] underline decoration-[#FC8EAC] underline-offset-4 transition-colors font-medium">
                                View Code on GitHub →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Html>
    </group>
  );
};
