import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Float, OrbitControls } from '@react-three/drei';
import SplitText from './SplitText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden">
      {/* 3D Background Element */}
      {/* 3D Background Element Removed */}
      <div className="absolute inset-0 z-0 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center z-10 pt-20 pointer-events-none relative">
        <div className="mb-4">
             <SplitText text="Hii I am Khushi, I am a" className="text-gray-400 text-lg md:text-xl" delay={0.5} />
        </div>
        
        <div className="mb-12">
            <SplitText 
                text="Software Developer" 
                className="text-5xl md:text-8xl font-bold text-[#FC8EAC] tracking-tighter leading-tight" 
                delay={0.8}
            />
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 pointer-events-auto"
        >
            <a href="/resume.pdf" download="Khushi_Resume.pdf" className="px-8 py-3 rounded-full bg-[#FC8EAC] text-black font-semibold text-lg hover:bg-[#FC8EAC]/80 transition-colors flex items-center gap-2">
                Download CV
            </a>
            <a href="https://github.com/khushi-madan18" target="_blank" className="px-8 py-3 rounded-full bg-black border border-[#FC8EAC]/20 text-[#FC8EAC] font-semibold text-lg hover:bg-[#FC8EAC]/10 transition-colors flex items-center gap-2">
                <Github size={20} />
                GitHub
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
