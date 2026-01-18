import { Github, Linkedin, Code2, Terminal, Send } from 'lucide-react';
import { motion } from 'framer-motion';

import SplitText from './SplitText';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-24 px-6 flex items-center justify-center">
             <div className="max-w-6xl mx-auto w-full">
                
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                     {/* Left: Info */}
                    <div className="lg:w-1/2 space-y-12">
                        <div>
                            <div className="mb-6">
                                <SplitText 
                                    text="Get in Touch" 
                                    className="text-6xl font-bold text-[#FC8EAC] tracking-tight"
                                    direction="down"
                                    textAlign="left"
                                />
                            </div>
                            <p className="text-gray-400 text-xl">
                                Have a project in mind or just want to say hi?
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-6">
                            <a href="mailto:khushi.2024@nst.rishihood.edu.in" className="text-xl md:text-2xl text-[#FC8EAC] hover:underline decoration-[#FC8EAC]/50 underline-offset-8 break-all">
                                khushi.2024@nst.rishihood.edu.in
                            </a>
                            <div className="flex gap-4">
                                <a href="https://github.com/khushi-madan18" target="_blank" className="p-3 rounded-full bg-zinc-900 border border-[#FC8EAC]/20 text-[#FC8EAC] hover:bg-[#FC8EAC] hover:text-black transition-all">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/khushi-madan-489622323" target="_blank" className="p-3 rounded-full bg-zinc-900 border border-[#FC8EAC]/20 text-[#FC8EAC] hover:bg-[#FC8EAC] hover:text-black transition-all">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://leetcode.com/u/khushi_madan18/" target="_blank" className="p-3 rounded-full bg-zinc-900 border border-[#FC8EAC]/20 text-[#FC8EAC] hover:bg-[#FC8EAC] hover:text-black transition-all">
                                    <Code2 size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 bg-[#111] p-10 rounded-3xl border border-[#FC8EAC]/10 shadow-2xl w-full"
                    >
                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const subject = formData.get('subject') || 'Portfolio Contact';
                            const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`;
                            window.location.href = `mailto:khushi.2024@nst.rishihood.edu.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        }}>
                            <div className="grid grid-cols-2 gap-6">
                                <input name="name" type="text" placeholder="Name" className="w-full bg-zinc-900 border border-[#FC8EAC]/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#FC8EAC] transition-colors" required />
                                <input name="email" type="email" placeholder="Email" className="w-full bg-zinc-900 border border-[#FC8EAC]/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#FC8EAC] transition-colors" required />
                            </div>
                            <input name="subject" type="text" placeholder="Subject" className="w-full bg-zinc-900 border border-[#FC8EAC]/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#FC8EAC] transition-colors" required />
                            <textarea name="message" placeholder="Message" rows="4" className="w-full bg-zinc-900 border border-[#FC8EAC]/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#FC8EAC] transition-colors resize-none" required></textarea>
                            <button type="submit" className="w-full bg-[#FC8EAC] text-black font-bold py-4 rounded-xl hover:bg-[#FC8EAC]/90 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="border-t border-[#FC8EAC]/10 pt-12 mt-20 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
                    <p>&copy; {new Date().getFullYear()} Khushi. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#about" className="hover:text-[#FC8EAC] transition-colors">Home</a>
                        <a href="#projects" className="hover:text-[#FC8EAC] transition-colors">Work</a>
                        <a href="#contact" className="hover:text-[#FC8EAC] transition-colors">Contact</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
