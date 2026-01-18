import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Code2, Database, Terminal, Cpu, Globe, Server } from 'lucide-react';

export const Skills3D = () => {
    const { viewport } = useThree();
    
    // Flattened Skills List for the Requested Grid Layout
    const skills = [
        { name: "React", icon: <Globe size={32} /> },
        { name: "Tailwind CSS", icon: <Code2 size={32} /> },
        { name: "HTML", icon: <Code2 size={32} /> },
        { name: "JavaScript", icon: <Code2 size={32} /> },
        { name: "Node.js", icon: <Server size={32} /> },
        { name: "Express", icon: <Server size={32} /> },
        { name: "Convex DB", icon: <Database size={32} /> },
        { name: "Python", icon: <Code2 size={32} /> },
        { name: "C++", icon: <Cpu size={32} /> },
        { name: "SQL", icon: <Database size={32} /> },
        { name: "Figma", icon: <Globe size={32} /> },
        { name: "Prisma", icon: <Database size={32} /> },
        { name: "Git", icon: <Terminal size={32} /> },
    ];

    return (
        <group position={[0, -viewport.height, 0]}>
            <Html center transform={false} className="w-screen flex justify-center items-center pointer-events-none">
                <div className="pointer-events-auto max-w-5xl w-full px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FC8EAC] mb-12">
                        My Skills
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#FC8EAC] transition-all flex flex-col items-center gap-4 group hover:-translate-y-1 duration-300">
                                <div className="text-[#FC8EAC] group-hover:scale-110 transition-transform">
                                    {skill.icon}
                                </div>
                                <span className="text-lg font-medium text-white">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Html>
        </group>
    );
};
