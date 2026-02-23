function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-900 via-black to-slate-900 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition duration-500">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Heart Disease Detection using ML
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Built using Python & XGBoost to predict heart disease risk.
            </p>

            <a
              href="https://github.com/Thamizhamudhan-A/heart-disease-detection-using-ml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-medium hover:scale-105 transition duration-300"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition duration-500">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Music App
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Built using React and Firebase with playlist functionality.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectsSection