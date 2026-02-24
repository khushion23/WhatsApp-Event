

import React from "react";
import { motion } from "framer-motion";

const speakers = [
  {
    name: "SHRI JAYESH RANJAN",
    title: "Special Chief Secretary\nGovernment of Telangana",
    img: "/assets/speakers/Jayesh-Ranjan.jpg",
  },
  {
    name: "SHRI NITIN MADAN KULKARNI",
    title: "Additional Chief Secretary to Governor\nJharkhand",
    img: "/assets/speakers/Nitin Madan Kulkarni.png",
  },
  {
    name: "SHRI SAMPATH KUMAR",
    title: "Principal Secretary\nGovernment of Meghalaya",
    img: "/assets/speakers/sampath_kumar.jpg",
  },
  {
    name: "ARUN SRINIVAS",
    title: "Managing Director & Country Head\nMeta India",
    img: "/assets/speakers/Arun Srinivas.jpg",
  },
  {
    name: "SANDHYA DEVANATHAN",
    title: "Vice President & Head, India & SE Asia\nMeta",
    img: "/assets/speakers/sandhya-devanathan-.jpg",
  },
  {
    name: "RAVI GARG",
    title: "Country Head, WhatsApp for Business\nMeta India",
    img: "/assets/speakers/Ravi Garg.jpg",
  },
];




function SpeakersSection() {
  return (
    <motion.section
      className="section-padding bg-[#10151c] min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="font-sora text-3xl md:text-4xl font-bold text-white tracking-wide inline-block">Speakers</h2>
          <div className="w-16 h-1 bg-green-400 rounded-full mx-auto mt-2"></div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {speakers.map((speaker, idx) => (
            <motion.div
              key={idx}
              className="bg-[#181f29] rounded-2xl p-3 flex flex-col items-center text-center shadow-lg border border-[#2a3340] max-w-xs mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
            >
              <img
                src={speaker.img}
                alt={speaker.name}
                className="w-36 h-36 object-contain rounded-lg mb-3 border-2 border-green-400 shadow bg-white p-2"
                style={{ background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)' }}
              />
              <div className="font-sora font-bold text-base md:text-lg text-white mb-1 uppercase tracking-wide">{speaker.name}</div>
              <div className="text-gray-300 whitespace-pre-line text-xs md:text-sm font-medium">{speaker.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


// Robust image component with fallback
const SpeakerImage = ({ src, alt, name }) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [error, setError] = React.useState(false);

  // Get initials from name
  const getInitials = (fullName) => {
    return fullName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

  if (error || !imgSrc) {
    return (
      <div className="w-28 h-28 flex items-center justify-center rounded-full mb-4 border-4 border-primary/40 shadow bg-background text-primary font-bold text-2xl">
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-primary/40 shadow"
      onError={() => { setError(true); setImgSrc(null); }}
    />
  );
};

export default SpeakersSection;
