import React from "react";

const ForMoreQueries = () => {
  return (
    <section className="flex items-center justify-center bg-background min-h-[220px] pt-0 mt-0">
      <div className="w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[180px] bg-background border border-white/10">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col justify-start p-4 md:p-8 pt-2">
          <h2 className="font-sora text-2xl md:text-3xl font-bold text-white mb-2 mt-0">For More Queries</h2>
          <div className="w-48 h-1 bg-green-400 rounded-full mb-6" />
          <div className="mb-2">
            <p className="text-lg text-blue-200 font-sora">Gouri Nikam</p>
            <p className="text-base text-blue-200 font-sora">+91 8108521363</p>
            <p className="text-base text-blue-200 font-sora">Gouri@observenow.com</p>
          </div>
        </div>
        {/* Right: GIF/Illustration */}
        <div className="flex-1 flex items-center justify-center bg-transparent p-2">
          <img
            src="/assets/Untitled design (4).gif"
            alt="Contact Illustration"
            className="w-full h-48 md:h-56 object-contain object-right rounded-2xl"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default ForMoreQueries;
