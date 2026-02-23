function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-black via-slate-900 to-black"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl hover:shadow-cyan-500/20 transition duration-500">

          {/* Email */}
          <p className="text-gray-300 text-lg mb-6 tracking-wide">
            📧 <span className="font-semibold text-white">
              thamizhamudhan.arun@gmail.com
            </span>
          </p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/thamizhamudhan-a-459ba3330/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:scale-105 transition duration-300 shadow-lg"
          >
            Connect on LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}

export default ContactSection