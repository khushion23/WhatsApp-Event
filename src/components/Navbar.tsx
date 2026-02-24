import { useScroll } from "@/hooks/useScroll";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Agenda", href: "#agenda" },
  { label: "RSVP", href: "#rsvp" },
];


import React, { useState } from "react";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const scrolled = useScroll(50);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
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

          {/* Hamburger icon for mobile, right side */}
          <button
            className="md:hidden ml-auto p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Open sidebar"
            onClick={() => setSidebarOpen(true)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="5" width="24" height="2" rx="1" fill="white" />
              <rect y="11" width="24" height="2" rx="1" fill="white" />
              <rect y="17" width="24" height="2" rx="1" fill="white" />
            </svg>
          </button>

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
      {/* Mobile Sidebar */}
      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} navLinks={navLinks} />
    </>
  );
};

export default Navbar;
