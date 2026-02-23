function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-slate-900 to-black py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm tracking-wide">
          © 2026 <span className="text-white font-medium">Thamizhamudhan A</span>. 
          <span className="text-gray-500"> All rights reserved.</span>
        </p>

        {/* Small Tagline */}
        {/* <p className="mt-3 text-xs text-gray-600">
          Built with React & Tailwind CSS
        </p> */}

      </div>
    </footer>
  )
}

export default Footer