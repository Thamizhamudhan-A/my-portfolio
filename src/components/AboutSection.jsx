function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-br from-slate-900 via-black to-slate-800"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Card Container */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 hover:scale-[1.02] transition duration-500">
          
          {/* Decorative Line */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"></div>

          {/* Paragraph */}
          <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
            "Driven by a passion for software innovation, I am a 3rd-year Computer Science student with a proven track record of academic excellence (8.4 CGPA) and technical versatility. My expertise spans across Full-Stack Web Development and Data Science, allowing me to build responsive interfaces as well as predictive ML architectures.
            I specialize in Java, Python, and SQL, with a deep interest in developing applications that provide real-time updates and seamless user experiences. My professional journey includes a Web Development internship where I mastered React.js and Node.js, alongside earning advanced certifications in Cybersecurity, Cloud Infrastructure (Oracle), and Algorithms. I am now seeking to apply my problem-solving skills to a dynamic engineering team."
          </p>

        </div>
      </div>
    </section>
  )
}

export default AboutSection