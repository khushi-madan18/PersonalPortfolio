import { motion } from 'framer-motion';
import { BookOpen, Briefcase } from 'lucide-react';
// Import Skills here as it is part of Resume tab in reference
import Skills from './Skills';

const Resume = () => {
  return (
    <article className="pt-8 px-8 pb-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white">Resume</h2>
        <div className="h-1 w-12 bg-pink-600 rounded-full mt-2" />
      </div>

      <div className="grid grid-cols-1 gap-12 mb-12">
        {/* Education Column */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#1a1a1a] text-pink-500 border border-white/5">
              <BookOpen size={20} />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="relative border-l border-white/10 pl-8 ml-3 space-y-10">
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-pink-600 shadow-[0_0_10px_#db2777]" />
              <h4 className="text-lg font-bold text-white">Bachelor of Technology (AI)</h4>
              <p className="text-pink-500 text-sm mb-2 font-medium">2024 — 2028</p>
              <p className="text-gray-400 text-sm">Newton School of Technology, Rishihood University</p>
            </div>

            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#1a1a1a] border border-pink-600" />
              <h4 className="text-lg font-bold text-white">Intermediate (Class XII)</h4>
              <p className="text-pink-500 text-sm mb-2 font-medium">2023 — 2024</p>
              <p className="text-gray-400 text-sm">Khemo Devi Public School</p>
            </div>

             <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#1a1a1a] border border-pink-600" />
              <h4 className="text-lg font-bold text-white">Matriculation (Class X)</h4>
              <p className="text-pink-500 text-sm mb-2 font-medium">2021 — 2022</p>
              <p className="text-gray-400 text-sm">St. Theresa's Convent School</p>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div>
           <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#1a1a1a] text-pink-500 border border-white/5">
              <Briefcase size={20} />
            </div>
            <h3 className="text-xl font-semibold">Experience</h3>
          </div>

          <div className="relative border-l border-white/10 pl-8 ml-3 space-y-10">
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-pink-600 shadow-[0_0_10px_#db2777]" />
              <h4 className="text-lg font-bold text-white">Smart India Hackathon 2024</h4>
              <p className="text-pink-500 text-sm mb-2 font-medium">Oct 2024</p>
              <p className="text-gray-400 text-sm">Participant - Solved real-world problems under time constraints.</p>
            </div>

             <div className="relative">
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-[#1a1a1a] border border-pink-600" />
              <h4 className="text-lg font-bold text-white">OOPS Core Committee</h4>
              <p className="text-pink-500 text-sm mb-2 font-medium">May 2024 — Present</p>
              <p className="text-gray-400 text-sm">College Programming Club Member.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Embed Skills here */}
      <Skills />
    </article>
  );
};

export default Resume;
