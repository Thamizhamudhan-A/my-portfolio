function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-slate-900 to-black px-6">

      {/* Small Intro Badge */}
      {/* <div className="mb-6 px-4 py-1 text-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-gray-400 tracking-wide">
        Portfolio 2026
      </div> */}

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight">
        Hi, I'm Thamizhamudhan 👋
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
        Pre-Final Year CSE Student | React Developer | ML Enthusiast
      </p>

      {/* GitHub Button */}
      <a
        href="https://github.com/Thamizhamudhan-A"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block px-8 py-3 font-medium text-white rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition duration-300 shadow-lg"
      >
        View GitHub
      </a>

    </section>
  )
}

export default HeroSection