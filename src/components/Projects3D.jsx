import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export const Projects3D = () => {
  const { viewport } = useThree();
  
  const projects = [
      {
          title: "VocaCoach",
          desc: "A real-time AI voice interview platform using React, Node.js, Convex DB, and DeepSeek API. Conducts personalized mock interviews with actionable feedback.",
          link: "https://github.com/hikhushi/VocaCoach",
          tags: ["React", "Node.js", "Convex", "DeepSeek API"],
          color: "from-blue-600 to-cyan-500"
      },
      {
          title: "TripTailor",
          desc: "An AI-driven itinerary generator built with React, Gemini API, and Firebase. Creates detailed, personalized travel plans in seconds.",
          link: "https://github.com/hikhushi/TripTailor",
          tags: ["React", "Gemini API", "Firebase", "Tailwind"],
          color: "from-orange-500 to-amber-500"
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
