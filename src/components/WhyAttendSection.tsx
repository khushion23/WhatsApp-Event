import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Engage with senior policymakers and industry leaders shaping India's digital governance future.",
  "Discover breakthrough solutions in citizen-centric service delivery and digital public infrastructure.",
  "Build partnerships on trusted communication platforms enabling secure, scalable governance solutions.",
];

const WhyAttendSection = () => {
  const headingRef = useRef(null);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  useLayoutEffect(() => {
    if (headingRef.current) {
      setUnderlineWidth(headingRef.current.offsetWidth);
    }
  }, []);
  return (
    <section className="section-padding bg-gradient-to-br from-green-50 via-white to-green-100 w-full">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center w-full">
              <span
                ref={headingRef}
                className="gravitas-one-regular text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg block text-center"
                style={{ color: '#22c55e' }}
              >
                Why You Should Attend
              </span>
              <div
                className="h-1 rounded-full mb-8 transition-all duration-300"
                style={{
                  width: underlineWidth || '60%',
                  background: 'linear-gradient(90deg, #22c55e 0%, #0ea5e9 100%)',
                  margin: '0 auto',
                }}
              />
            </div>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-green-400/50 hover:bg-card hover:border-green-500/80 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="mb-3 text-sm md:text-base text-black drop-shadow text-justify">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Abstract commerce visualization */}
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-green-400/20 animate-pulse" />
                <div className="absolute inset-4 rounded-full border-2 border-green-400/30" />
                <div className="absolute inset-8 rounded-full border-2 border-green-400/40" />
                {/* Center */}
                <div className="absolute inset-12 rounded-full bg-green-500 flex items-center justify-center shadow-xl" style={{ boxShadow: '0 8px 32px 0 #22c55e55' }}>
                  <div className="text-center text-white">
                    <p className="text-7xl md:text-8xl font-extrabold">AI</p>
                    <p className="text-lg md:text-2xl font-semibold opacity-90">Commerce</p>
                  </div>
                </div>
                {/* Floating elements */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                    style={{ transformOrigin: "center" }}
                  >
                    <div
                      className={`absolute w-8 h-8 rounded-full bg-white shadow-lg`}
                      style={{
                        top: "10%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        border: '2px solid #22c55e',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
