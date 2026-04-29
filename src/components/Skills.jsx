import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        {
            name: "Excel",
            path: "/images/projects/image.png" 
        },
        { 
            name: "Python", 
            path: "https://img.icons8.com/color/48/python--v1.png" 
        },
        { 
            name: "SQL", 
            path: "https://img.icons8.com/color/48/mysql-logo.png" 
        },
        { 
            name: "Tableau", 
            path: "https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000" 
        },
        { 
            name: "Pandas", 
            path: "https://img.icons8.com/color/48/pandas.png" 
        },
        { 
            name: "NumPy", 
            path: "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000" 
        },
        { 
            name: "Jupyter", 
            path: "https://img.icons8.com/?size=100&id=J0SgMWzAxqFj&format=png&color=000000" 
        },
        { 
            name: "Google Colab", 
            path: "https://img.icons8.com/?size=100&id=lOqoeP2Zy02f&format=png&color=000000" 
        },
        { 
            name: "Matplotlib", 
            path: "https://img.icons8.com/?size=100&id=TkX1totjFmAD&format=png&color=000000" 
        },
        { 
            name: "Seaborn", 
            path: "/images/projects/seaborn.png" // Ensure this matches your public folder path
        }
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
                            {/* FIXED IMAGE LOGIC BELOW */}
                            <img 
                                src={skill.path} 
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