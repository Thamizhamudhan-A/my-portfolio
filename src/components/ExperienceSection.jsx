function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-black via-slate-900 to-black text-gray-300"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          Experience
        </h2>

        {/* Experience Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl hover:-translate-y-2 transition duration-500">

          {/* Role */}
          <h3 className="text-2xl font-semibold text-white">
            Web Development Intern
          </h3>

          {/* Company + Date */}
          <p className="mt-2 text-orange-400 font-mono tracking-wide">
            Cloudlogic Technologies • June 2025
          </p>

          {/* Decorative Line */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mt-6"></div>

        </div>

      </div>
    </section>
  )
}

export default ExperienceSection