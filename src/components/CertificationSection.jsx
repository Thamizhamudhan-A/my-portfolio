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
    <section id="certifications" className="py-20 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white border-b-4 border-blue-500 w-fit mx-auto pb-2">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="bg-[#112240] border border-blue-500/20 p-6 rounded-xl hover:bg-[#1d2d44] hover:border-blue-500 transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-gray-500">{cert.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{cert.provider}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
