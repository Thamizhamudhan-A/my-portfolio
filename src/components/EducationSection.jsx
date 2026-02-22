import React from 'react';

const EducationSection = () => {
  const education = [
    {
      school: "Panimalar Engineering College",
      degree: "Bachelor of Engineering - Computer Science",
      year: "2023 - 2026 (Expected)",
      score: "CGPA: 8.4 / 10",
      desc: "Currently in 3rd year, focusing on Full Stack Development and Machine Learning."
    },
    {
      school: "Krishnasamy Matric Higher Secondary School",
      degree: "HSC (Class XII) - State Board",
      year: "2022 - 2023",
      score: "Percentage: 88.5%",
      desc: "Specialized in Computer Science and Mathematics."
    },
    {
      school: "Krishnasamy Matric Higher Secondary School",
      degree: "SSLC (Class X) - State Board",
      year: "2020 - 2021",
      score: "Result: All Pass",
      desc: "Foundation in Science and Mathematics."
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0a192f] text-gray-300">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white border-b-4 border-blue-500 w-fit mx-auto pb-2">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors group">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 group-hover:scale-125 transition-transform shadow-[0_0_10px_#3b82f6]"></div>
              <div className="bg-[#112240] p-6 rounded-lg shadow-xl hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{item.school}</h3>
                  <span className="text-blue-400 font-mono text-sm">{item.year}</span>
                </div>
                <p className="text-gray-400 font-medium mb-2">{item.degree}</p>
                <p className="text-sm text-blue-300 bg-blue-500/10 w-fit px-2 py-1 rounded mb-3">{item.score}</p>
                <p className="text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
