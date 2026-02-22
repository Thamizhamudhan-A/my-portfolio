function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Heart Disease Detection using ML
          </h3>
          <p className="text-gray-400 mb-4">
            Built using Python & XGBoost to predict heart disease risk.
          </p>
          <a
            href="https://github.com/Thamizhamudhan-A/heart-disease-detection-using-ml"
            target="_blank"
            className="text-blue-400 underline"
          >
            View on GitHub
          </a>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">
            Music App
          </h3>
          <p className="text-gray-400">
            Built using React and Firebase with playlist functionality.
          </p>
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection