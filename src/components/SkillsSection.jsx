function SkillsSection() {
  const skills = ["Java", "Python", "React", "MySQL", "XGBoost"]

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black via-slate-900 to-black text-center"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 font-medium hover:bg-gradient-to-r hover:from-yellow-400 hover:to-red-500 hover:text-black hover:scale-105 transition duration-300 shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SkillsSection