function SkillsSection() {
  const skills = ["Java", "Python", "React", "Firebase", "MySQL", "XGBoost"]

  return (
    <section id="skills" className="py-20 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 px-4 py-2 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection