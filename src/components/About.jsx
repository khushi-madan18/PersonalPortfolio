import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 bg-black/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Avatar Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Avatar Container */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-zinc-900 flex items-center justify-center border border-[#FC8EAC]/10 overflow-hidden shadow-2xl">
             <img src="/profile.jpg" alt="Khushi" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" />
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#FC8EAC] tracking-tight">
            About Me
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              Hey! I'm <span className="text-[#FC8EAC] font-medium">Khushi</span>, a student at <span className="text-[#FC8EAC] font-medium">Newton School of Technology</span> pursuing  B.Tech in Computer Science and Artificial Intelligence. I'm a passionate full-stack developer who loves building responsive and interactive web experiences.
            </p>
            <p>
              I'm constantly learning and exploring new technologies to improve my skills and bring ideas to life. Whether it's building projects, solving problems, or diving deep into design, I enjoy the process of creating and growing.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
