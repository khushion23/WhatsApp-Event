import React from "react";

const MobileSidebar = ({ open, onClose, navLinks }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      <div
        className="fixed top-0 right-0 w-64 h-full bg-black backdrop-blur-md bg-opacity-95 shadow-2xl flex flex-col border-l border-gray-800"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b font-bold text-lg text-white bg-[#23272e]"></div>
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-base text-white font-medium hover:text-primary transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileSidebar;
