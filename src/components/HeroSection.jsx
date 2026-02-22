function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Thamizhamudhan 👋
      </h1>
      <p className="text-xl text-gray-400 mb-6">
        6th Semester CSE Student | React Developer | ML Enthusiast
      </p>
      <a
        href="https://github.com/Thamizhamudhan-A"
        target="_blank"
        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        View GitHub
      </a>
    </section>
  )
}

export default HeroSection