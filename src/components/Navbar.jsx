function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-white">
          Thamizhamudhan A
        </h1>

        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar