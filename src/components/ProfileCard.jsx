import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, Download, GraduationCap } from 'lucide-react';

const ProfileCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121212] rounded-[2rem] p-8 h-full border border-white/5 flex flex-col items-center sticky top-6"
    >
      {/* Profile Image Area */}
      <div className="relative mb-6">
        <div className="w-40 h-40 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-black border-2 border-white/5 p-1">
           {/* Placeholder for Memoji/Photo - Replace with user image if available */}
           <div className="w-full h-full bg-[#1a1a1a] rounded-2xl flex items-center justify-center text-6xl">
             👩‍💻
           </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Khushi</h1>
      
      <div className="bg-[#1a1a1a] px-5 py-2 rounded-lg text-gray-400 text-sm mb-8 border border-white/5 font-medium">
        Frontend Developer
      </div>

      <div className="w-full flex flex-col gap-4 mb-8">
        
        <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 hover:border-pink-600/50 transition-colors group">
          <div className="p-3 rounded-xl bg-black text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
            <Mail size={20} />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email</p>
            <p className="text-sm text-gray-300 truncate font-medium" title="khushi.2024@mst.rishihood.edu.in">khushi.2024@...</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 hover:border-pink-600/50 transition-colors group">
          <div className="p-3 rounded-xl bg-black text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
            <Phone size={20} />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Phone</p>
            <p className="text-sm text-gray-300 font-medium">+91 7206244313</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 hover:border-pink-600/50 transition-colors group">
          <div className="p-3 rounded-xl bg-black text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
             <GraduationCap size={20} />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Pursuing</p>
            <p className="text-sm text-gray-300 font-medium">B.Tech in CS & AI</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#1a1a1a] p-4 rounded-2xl border border-white/5 hover:border-pink-600/50 transition-colors group">
          <div className="p-3 rounded-xl bg-black text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-colors">
            <MapPin size={20} />
          </div>
          <div className="overflow-hidden">
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Location</p>
            <p className="text-sm text-gray-300 font-medium">India</p>
          </div>
        </div>
      </div>

      <div className="mt-auto flex gap-4">
         <a href="https://github.com/hikhushi" target="_blank" className="text-gray-400 hover:text-white transition-colors">
          <Github size={24} />
         </a>
         <a href="https://linkedin.com/in/khushi" target="_blank" className="text-gray-400 hover:text-white transition-colors">
          <Linkedin size={24} />
         </a>
      </div>
      
    </motion.div>
  );
};

export default ProfileCard;
