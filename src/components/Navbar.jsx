import { motion } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';

const Navbar = () => {
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" }, 
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
            <motion.nav 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pointer-events-auto bg-zinc-900/90 backdrop-blur-md border border-[#FC8EAC]/10 px-6 py-2 rounded-full flex items-center gap-6 shadow-2xl"
            >
                {/* Avatar / Logo Placeholder */}
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-[#FC8EAC]/5 overflow-hidden">
                    <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover object-top grayscale" />
                </div>

                <ul className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href}
                                className="text-sm font-medium text-gray-400 hover:text-[#FC8EAC] transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </div>
    );
};

export default Navbar;
