function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Name */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent tracking-wide">
          Thamizhamudhan A
        </h1>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition duration-300">
            About
          </a>
          <a href="#education" className="hover:text-cyan-400 transition duration-300">
            Education
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition duration-300">
            Skills
          </a>
          <a href="#certifications" className="hover:text-cyan-400 transition duration-300">
            Certifications
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition duration-300">
            Projects
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition duration-300">
            Experience
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition duration-300">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar