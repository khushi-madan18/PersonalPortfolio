import { motion } from 'framer-motion';

const Skills = () => {
    // Specific skills requested by the user, sorted alphabetically
    const skills = [
        { name: "C++", icon: "cplusplus/00599C" },
        { name: "Express.js", icon: "express/white" },
        { name: "Figma", icon: "figma/F24E1E" },
        { name: "GitHub", icon: "github/white" },
        { name: "HTML", icon: "html5/E34F26" },
        { name: "JavaScript", icon: "javascript/F7DF1E" },
        { name: "MongoDB", icon: "mongodb/47A248" },
        { name: "MySQL", icon: "mysql/4479A1" },
        { name: "Node.js", icon: "nodedotjs/339933" },
        { name: "Prisma ORM", icon: "prisma/white" },
        { name: "Python", icon: "python/3776AB" },
        { name: "React.js", icon: "react/61DAFB" },
        { name: "Tailwind CSS", icon: "tailwindcss/06B6D4" },
        { name: "TypeScript", icon: "typescript/3178C6" },
    ];

    return (
        <section id="skills" className="min-h-screen py-24 px-6 flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full flex flex-col items-center gap-12">
                
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-[#FC8EAC] tracking-tight"
                >
                    Skills & Tech
                </motion.h2>

                <motion.div 
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                show: { opacity: 1, scale: 1, y: 0 }
                            }}
                            whileHover={{ 
                                scale: 1.15, 
                                rotateX: 10,
                                rotateY: -10,
                                z: 50,
                                borderColor: "#FC8EAC", 
                                boxShadow: "0 20px 30px rgba(0,0,0,0.5)" 
                            }}
                            className="aspect-square w-24 h-24 sm:w-28 sm:h-28 bg-[#0A0A0A] border border-[#FC8EAC]/20 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer group transition-all duration-300 relative"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <img 
                                src={`https://cdn.simpleicons.org/${skill.icon}`} 
                                alt={skill.name}
                                className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                style={{ transform: "translateZ(20px)" }} 
                            />
                            
                            {/* Hover Tooltip/Name */}
                            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                                <span className="text-[#FC8EAC] font-medium text-sm bg-zinc-900/90 px-3 py-1 rounded-full border border-[#FC8EAC]/30 shadow-lg backdrop-blur-md">
                                    {skill.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
