import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Github, Linkedin, Code2, Terminal } from 'lucide-react';

export const Contact3D = () => {
    const { viewport } = useThree();

    return (
        <group position={[0, -viewport.height * 3, 0]}>
            <Html center transform={false} className="w-screen flex justify-center items-center pointer-events-none">
                <div className="pointer-events-auto bg-black/60 backdrop-blur-md p-10 rounded-3xl border border-white/10 max-w-5xl w-full flex flex-col shadow-2xl">
                    
                    <div className="flex flex-col md:flex-row gap-16 items-start mb-12">
                         {/* Left: Socials */}
                        <div className="flex-1 text-left space-y-8">
                            <div>
                                <h2 className="text-5xl font-bold text-[#FC8EAC] mb-4">
                                    Let's Talk
                                </h2>
                                <p className="text-gray-300 text-lg">
                                    Have a project in mind or just want to connect? Reach out via social media or drop a message.
                                </p>
                            </div>
                            
                            <div className="flex gap-6">
                                <a href="https://github.com/hikhushi" target="_blank" className="text-white hover:text-[#FC8EAC] transition-colors bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#FC8EAC]">
                                    <Github size={32} />
                                </a>
                                <a href="https://linkedin.com/in/khushi" target="_blank" className="text-white hover:text-[#FC8EAC] transition-colors bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#FC8EAC]">
                                    <Linkedin size={32} />
                                </a>
                                <a href="https://leetcode.com/khushi" target="_blank" className="text-white hover:text-[#FC8EAC] transition-colors bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#FC8EAC]">
                                    <Code2 size={32} />
                                </a>
                                <a href="https://codeforces.com/profile/khushi" target="_blank" className="text-white hover:text-[#FC8EAC] transition-colors bg-white/5 p-3 rounded-lg border border-white/10 hover:border-[#FC8EAC]">
                                    <Terminal size={32} />
                                </a>
                            </div>
                        </div>

                        {/* Right: Message Form */}
                        <div className="flex-1 w-full bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#FC8EAC] transition-colors" />
                                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#FC8EAC] transition-colors" />
                                <textarea placeholder="Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#FC8EAC] transition-colors"></textarea>
                                <button className="w-full bg-[#FC8EAC] text-black font-bold py-3 rounded-lg hover:bg-white transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-white/10 pt-8 text-center text-gray-500 font-mono text-sm">
                        <p className="mb-2 text-white/50">khushi.2024@nst.rishihood.edu.in</p>
                        <p>&copy; {new Date().getFullYear()} KHUSHI. ALL RIGHTS RESERVED.</p>
                    </div>

                </div>
            </Html>
        </group>
    );
};
