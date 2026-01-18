import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { GraduationCap, Code, Globe } from 'lucide-react';

export const About3D = () => {
    const { viewport } = useThree();

    return (
        <group position={[0, -viewport.height, 0]}> {/* Page 1 Position */}
            <Html center transform={false} className="w-screen flex justify-center items-center pointer-events-none">
                <div className="pointer-events-auto bg-black/60 backdrop-blur-md border border-[#FC8EAC]/20 p-8 md:p-12 rounded-[2rem] max-w-4xl w-full mx-4 flex flex-col md:flex-row gap-10 items-center shadow-[0_0_30px_-5px_rgba(255,183,197,0.2)]">
                    
                    {/* Image / Avatar Placeholder */}
                    <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-[#121212] rounded-full border-4 border-[#FC8EAC]/30 flex items-center justify-center text-6xl shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#FC8EAC]/20 to-transparent" />
                        👩‍💻
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            About <span className="text-[#FC8EAC]">Me</span>
                        </h2>
                        
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Hey! I'm <span className="text-white font-semibold">Khushi</span>, a student at <span className="text-[#FC8EAC]">Newton School of Technology</span> pursuing a B.Tech in Computer Science. 
                        </p>
                        <p className="text-gray-400 text-base leading-relaxed mb-8">
                            I'm a passionate full-stack developer who loves building responsive and interactive web experiences. Whether it's crafting 3D worlds or solving complex algorithms, I enjoy the process of creating and growing.
                        </p>

                        {/* Stats / Pills */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300">
                                <GraduationCap size={16} className="text-[#FC8EAC]" /> B.Tech CS & AI
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300">
                                <Code size={16} className="text-[#FC8EAC]" /> Full Stack Dev
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300">
                                <Globe size={16} className="text-[#FC8EAC]" /> Competitive Programmer
                            </div>
                        </div>
                    </div>

                </div>
            </Html>
        </group>
    );
};
