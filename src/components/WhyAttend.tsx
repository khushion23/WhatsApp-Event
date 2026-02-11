import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Lightbulb, ShieldCheck } from "lucide-react";

import AnimatedGreenCircle from "./AnimatedGreenCircle";

interface AttendCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cards: AttendCard[] = [
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Strategic Dialogue",
    description: "Engage with senior policymakers and industry leaders shaping India's digital governance future.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Citizen Innovation",
    description: "Discover breakthrough solutions in citizen-centric service delivery and digital public infrastructure.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "High-Trust Engagement",
    description: "Build partnerships on trusted communication platforms enabling secure, scalable governance solutions.",
  },
];

const WhyAttend = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Removed expand/collapse state and details
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-accent/5 to-background/0" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Cards */}
          <div className="flex-1 min-w-[320px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-10 text-left"
            >
              <h2 className="font-sora text-4xl font-bold text-primary mb-2">
                Why You Should Attend
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-blue-500 to-primary rounded-full mb-8" />
            </motion.div>
            <div className="space-y-6">
              {[
                { icon: <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M9 12l2 2l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, text: "Engage with senior policymakers and industry leaders shaping India's digital governance future." },
                { icon: <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M9 12l2 2l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, text: "Discover breakthrough solutions in citizen-centric service delivery and digital public infrastructure." },
                { icon: <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M9 12l2 2l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>, text: "Build partnerships on trusted communication platforms enabling secure, scalable governance solutions." },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="flex flex-col items-start bg-white/5 border border-green-400/40 rounded-xl p-5 shadow-sm mb-2"
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-4 text-base md:text-lg text-foreground font-medium">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Right: Animated Circle with SVG rings and looping dots */}
          <div className="flex-1 flex justify-center items-center min-w-[320px]">
              <AnimatedGreenCircle />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
