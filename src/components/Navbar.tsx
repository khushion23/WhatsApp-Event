import { useScroll } from "@/hooks/useScroll";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Agenda", href: "#agenda" },
  { label: "RSVP", href: "#rsvp" },
];

const Navbar = () => {
  const scrolled = useScroll(50);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel-strong shadow-lg shadow-background/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center">
          <img src="/assets/on-logo-white.png" alt="Logo" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#rsvp" className="glow-button text-sm">
            Register Now
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
