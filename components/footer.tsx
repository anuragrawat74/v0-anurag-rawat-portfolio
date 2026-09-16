export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm">© 2025 Anurag Rawat. All Rights Reserved.</p>
            </div>

            <nav className="flex gap-6">
              <a href="#home" className="text-sm hover:text-teal-400 transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm hover:text-teal-400 transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm hover:text-teal-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm hover:text-teal-400 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
