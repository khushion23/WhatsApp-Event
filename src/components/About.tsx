import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background/0 pointer-events-none animate-gradient z-0" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-panel-strong p-8 md:p-14 shadow-xl rounded-3xl"
        >
          <div className="flex flex-col md:flex-row items-start justify-between mb-10 gap-10">
            {/* Left: Text */}
            <div className="flex-1 min-w-[260px] max-w-xl">
              <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-2 text-left">
                About the Forum
              </h2>
              <div className="w-24 h-1 bg-green-500 rounded-full mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-2 text-base md:text-lg text-left">
                <span className="font-semibold text-foreground">The WhatsApp Citizen Engagement & Innovation Forum</span> brings together senior government officials, technology leaders, and policy experts for a strategic dialogue on leveraging digital platforms for inclusive governance.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base text-left">
                This high-level executive conclave explores how citizen-centric service delivery, powered by trusted communication channels, can accelerate India's journey toward becoming a digitally empowered society and knowledge economy — <span className="text-green-500 font-semibold">the vision of Viksit Bharat</span>.
              </p>
            </div>
            {/* Right: Animated GIF */}
            <div className="flex flex-col items-center min-w-[200px]">
              <img src="/assets/Untitled design.gif" alt="Animated WhatsApp" className="w-80 h-80 rounded-2xl shadow-lg object-contain mb-2" />
              <div className="w-56 h-6 bg-black/20 rounded-full blur-md mt-2" />
            </div>
          </div>
          {/* Horizontal points with green borders and icons */}
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-stretch mt-8">
            {[
              { title: "Strategic Dialogue", desc: "Policy leaders shaping digital governance frameworks for the next decade.", icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
              { title: "Digital Governance", desc: "Exploring scalable models for citizen-centric public service delivery.", icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="2"/></svg> },
              { title: "Inclusive Participation", desc: "Ensuring every citizen benefits from India's digital transformation.", icon: <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 16v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className={`flex-1 flex flex-col bg-background/60 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-green-500`}
                style={{ minWidth: 240, maxWidth: 340 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h4
                    className={`font-sora font-semibold text-foreground text-lg${item.title === 'Inclusive Participation' ? ' whitespace-nowrap' : ''}`}
                  >
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
