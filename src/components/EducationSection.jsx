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
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-slate-900 via-black to-slate-900 text-gray-300"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
          Education
        </h2>

        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-emerald-400 to-cyan-500 opacity-30"></div>

          <div className="space-y-16">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Card */}
                <div className="md:w-1/2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition duration-500">

                  <span className="text-sm font-mono text-emerald-400 tracking-wider">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold text-white mt-2">
                    {item.school}
                  </h3>

                  <p className="text-gray-400 mt-1 font-medium">
                    {item.degree}
                  </p>

                  <div className="mt-3 inline-block px-3 py-1 text-xs bg-emerald-500/10 text-emerald-300 rounded-full">
                    {item.score}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </div>

                {/* Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_15px_#34d399]"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;