import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="relative text-foreground pt-8 pb-4 text-center mt-8 overflow-hidden">
    {/* Animated gradient background like Hero */}
    <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-accent/20 animate-gradient" />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
    <div className="relative z-10">
    <div className="mb-4 flex flex-col items-center justify-center">
      <img src="/assets/on-logo-white.png" alt="Event Logo" className="h-24 w-auto mb-2 mx-auto" />
    </div>
    <div className="flex flex-wrap justify-center gap-3 mb-4 text-base">
      <a href="https://x.com/ObservenowMedia/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-green-400 text-2xl border-2 border-green-400"><FaTwitter /></a>
      <a href="https://www.facebook.com/people/ObserveNow-Media/61573042113968/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-green-400 text-2xl border-2 border-green-400"><FaFacebookF /></a>
      <a href="https://www.linkedin.com/company/observenow/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-green-400 text-2xl border-2 border-green-400"><FaLinkedinIn /></a>
      <a href="https://www.instagram.com/now_observe/reels/?hl=am-et" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-green-400 text-2xl border-2 border-green-400"><FaInstagram /></a>
      <a href="https://www.youtube.com/@ObserveNowMedia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-green-400 text-2xl border-2 border-green-400"><FaYoutube /></a>
    </div>
    <div className="mb-2 text-base flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 font-medium text-foreground">
      <a href="#" className="underline mx-2">Terms of use</a>
      <span className="hidden sm:inline">|</span>
      <a href="#" className="underline mx-2">Privacy Notice</a>
      <span className="hidden sm:inline">|</span>
    </div>
    <div className="text-xs mb-2 px-2 text-center text-foreground">
      For more information on how we collect and process your personal data please read our <a href="#" className="underline">Privacy Policy</a>.
    </div>
    </div>
  </footer>
);

export default Footer;
