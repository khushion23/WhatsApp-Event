import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";

interface InfoCard {
  icon: React.ReactNode;
  label: string;
}

const infoCards: InfoCard[] = [
  { icon: <CalendarDays className="w-5 h-5 text-primary" />, label: "11th March 2026" },
  { icon: <Clock className="w-5 h-5 text-primary" />, label: "05:00 PM – 08:00 PM" },
  { icon: <MapPin className="w-5 h-5 text-primary" />, label: "New Delhi" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-accent/20 animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto text-center px-4 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-sans text-sm font-semibold uppercase tracking-[0.3em] mb-6"
        >
          An Executive Forum
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sora text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 max-w-5xl mx-auto"
        >
          WhatsApp Citizen Engagement{" "}
          <span className="text-gradient">&amp; Innovation Forum</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
        >
          Technology as an Enabler for Viksit Bharat
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {infoCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
              className="glass-panel flex items-center gap-3 px-6 py-3"
            >
              {card.icon}
              <span className="text-sm font-medium text-foreground">{card.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <a href="#rsvp" className="glow-button inline-block text-lg px-10 py-4">
            Register Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
