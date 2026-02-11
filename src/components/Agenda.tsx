import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AgendaItem {
  time: string;
  title: string;
  description: string;
}

const agendaItems: AgendaItem[] = [
  { time: "04:00 PM", title: "Registration & Networking", description: "Welcome reception with executive networking" },
  { time: "05:00 PM", title: "Opening Remarks", description: "Inaugural address by distinguished dignitaries" },
  { time: "05:30 PM", title: "Panel Discussion", description: "Digital governance and citizen engagement strategies" },
  { time: "06:30 PM", title: "Strategic Dialogue", description: "WhatsApp as an enabler for Viksit Bharat" },
  { time: "07:30 PM", title: "Networking Dinner", description: "Curated dinner with industry leaders and policymakers" },
];

const Agenda = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="agenda" className="section-padding" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-3">
            Agenda
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {agendaItems.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className={`relative flex items-start mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_hsl(145_63%_49%/0.5)]" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.15)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="glass-panel p-5 cursor-pointer"
                  >
                    <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                      {item.time}
                    </span>
                    <h4 className="font-sora text-lg font-semibold text-foreground mt-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
