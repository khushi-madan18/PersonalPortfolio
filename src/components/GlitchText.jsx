import { useRef, useState, useEffect } from 'react';

const GlitchText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  const intervalRef = useRef(null);

  const scramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    // Determine when to scramble - for now, on mount or when in view could be added
    // Let's just do it on hover for interactivity or standard reveal
    scramble();
  }, []);

  return (
    <span 
      className={`inline-block truncate ${className}`}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );
};

export default GlitchText;
