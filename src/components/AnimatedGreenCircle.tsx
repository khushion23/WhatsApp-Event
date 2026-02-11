

import { useRef, useState, useEffect } from "react";

const AnimatedGreenCircle = () => {
  const numDots = 5;
  const radius = 140; // px, for a 280px diameter circle
  const [angle, setAngle] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    let running = true;
    const animate = () => {
      setAngle((prev) => (prev + 1) % 360);
      if (running) requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="relative w-[340px] h-[340px] flex items-center justify-center">
      {/* SVG Rings */}
      <svg className="absolute left-0 top-0 w-full h-full" width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="170" cy="170" r="160" stroke="#4ade80" strokeOpacity="0.2" strokeWidth="3" />
        <circle cx="170" cy="170" r="140" stroke="#4ade80" strokeOpacity="0.15" strokeWidth="3" />
      </svg>
      {/* Main Green Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-lg flex items-center justify-center">
        <div className="text-center">
          <span className="text-4xl font-extrabold text-white drop-shadow-lg">Digital</span>
          <div className="text-2xl font-semibold text-white mt-2">Governance</div>
        </div>
      </div>
      {/* Animated Dots on Circle */}
      {Array.from({ length: numDots }).map((_, idx) => {
        // Each dot is spaced evenly around the circle
        const theta = ((360 / numDots) * idx + angle) * (Math.PI / 180);
        const x = 170 + radius * Math.cos(theta) - 16; // center + radius*cos - half dot size
        const y = 170 + radius * Math.sin(theta) - 16; // center + radius*sin - half dot size
        return (
          <div
            key={idx}
            className="absolute"
            style={{
              left: x,
              top: y,
              width: '32px',
              height: '32px',
              zIndex: 2,
              background: 'white',
              borderRadius: '50%',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedGreenCircle;
