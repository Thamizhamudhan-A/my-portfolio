import React from 'react';

const CertificationSection = () => {
  const certs = [
    { title: "Frontend Web Developer", provider: "Infosys Springboard", date: "2025" },
    { title: "Oracle Cloud Infrastructure", provider: "Oracle University", date: "2025" },
    { title: "Computer Networks & IP", provider: "NPTEL", date: "Jan - Apr 2025" },
    { title: "Python Programming & DSA", provider: "NPTEL", date: "Jul - Sep 2025" },
    { title: "Database Management System", provider: "NPTEL", date: "Jul - Sep 2024" },
    { title: "Cybersecurity Analysis", provider: "NAASCOM", date: "2024" }
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-br from-black via-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-500"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition duration-500"></div>

              {/* Date */}
              <span className="text-xs tracking-widest uppercase text-gray-400">
                {cert.date}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold text-white">
                {cert.title}
              </h3>

              {/* Provider */}
              <p className="mt-2 text-gray-400 text-sm">
                {cert.provider}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationSection;