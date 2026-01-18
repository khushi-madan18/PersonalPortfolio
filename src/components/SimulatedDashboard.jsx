import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Cursor = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: `drop-shadow(0px 2px 4px rgba(0,0,0,0.5))` }}>
    <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19177L17.9169 12.3673H5.65376Z" fill={color} stroke="white" strokeWidth="1.5"/>
  </svg>
);

const SimulatedDashboard = ({ image, color = "#FC8EAC" }) => {
  const [clickActive, setClickActive] = useState(false);

  // Animation Sequence
  // 1. Start bottom right
  // 2. Move to center-ish (Button click)
  // 3. Move to top left (Menu click)
  
  return (
    <div className="relative w-full h-full overflow-hidden bg-zinc-900 group">
      {/* Dashboard Image - Cropped to hide Browser Navbar */}
      <div className="w-full h-full overflow-hidden">
          <img 
            src={image} 
            alt="Dashboard Preview" 
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-500" 
            style={{ transform: 'translateY(-5.5%) scale(1.10)' }}
          />
      </div>
      
      {/* Overlay Gradient (Fade out on hover) */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-500`} />

      {/* Simulated Cursor Container */}
      <motion.div
        className="absolute z-20 pointer-events-none"
        animate={{
          x: ["100%", "40%", "40%", "20%", "20%", "80%"],
          y: ["100%", "60%", "60%", "30%", "30%", "80%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 0.4, 0.6, 0.7, 1]
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1, 0.8, 1, 0.8, 1],
          }}
          transition={{
              duration: 8,
              repeat: Infinity,
              times: [0, 0.3, 0.35, 0.6, 0.65, 1]
          }}
        >
            <Cursor color={color} />
        </motion.div>
      </motion.div>

      {/* Click Ripple Effect 1 */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 border-white/50 z-10"
        style={{ left: "40%", top: "60%", x: "-50%", y: "-50%" }}
        animate={{
            scale: [0.5, 1.5],
            opacity: [0, 1, 0]
        }}
        transition={{
            duration: 1,
            repeat: Infinity,
            delay: 2.4, // Matches the click time at 0.3 * 8s = 2.4s
            repeatDelay: 7
        }}
      />
      
       {/* Click Ripple Effect 2 */}
       <motion.div
        className="absolute w-8 h-8 rounded-full border-2 border-white/50 z-10"
        style={{ left: "20%", top: "30%", x: "-50%", y: "-50%" }}
        animate={{
            scale: [0.5, 1.5],
            opacity: [0, 1, 0]
        }}
        transition={{
            duration: 1,
            repeat: Infinity,
            delay: 4.8, // Matches the click time at 0.6 * 8s = 4.8s
            repeatDelay: 7
        }}
      />

    </div>
  );
};

export default SimulatedDashboard;
