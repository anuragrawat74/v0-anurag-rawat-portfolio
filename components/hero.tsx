import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Code2, Palette, Briefcase } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1e36] to-[#0a1628]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a365d_1px,transparent_1px),linear-gradient(to_bottom,#1a365d_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227] rounded-full blur-[150px] opacity-15" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1a365d] rounded-full blur-[150px] opacity-30" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#c9a227] to-[#1a365d] rounded-full blur-2xl opacity-40" />
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#c9a227]/50 shadow-2xl">
                  <Image
                    src="/images/anurag-profile.jpg"
                    alt="Anurag Rawat"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left text-white space-y-8">
              <div className="inline-block">
                <span className="text-[#c9a227] font-mono text-sm md:text-base tracking-wider border border-[#c9a227]/50 px-6 py-3 rounded-full bg-[#c9a227]/10 backdrop-blur-sm">
                  Web Designer & Developer
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance tracking-tight">
                  Anurag <span className="text-[#c9a227]">Rawat</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                  Creating elegant digital experiences through code and design
                </p>
              </div>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl text-pretty">
                Specializing in clean, responsive, and user-friendly web solutions. Skilled in{" "}
                <span className="text-[#c9a227] font-semibold">C++, Java, HTML/CSS</span>, and{" "}
                <span className="text-[#c9a227] font-semibold">UX/UI design</span>.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#c9a227] hover:bg-[#b8922a] text-[#0a1628] font-semibold shadow-xl hover:shadow-2xl transition-all group px-8 py-6 text-lg rounded-xl"
                  asChild
                >
                  <a href="#projects">
                    View My Projects
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#c9a227]/50 bg-transparent hover:bg-[#c9a227]/10 text-white backdrop-blur-sm hover:border-[#c9a227] transition-all px-8 py-6 text-lg rounded-xl"
                  asChild
                >
                  <a href="#resume">
                    <Download className="mr-3 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 max-w-4xl mx-auto">
            <div className="bg-[#0d1e36]/80 backdrop-blur-sm border-2 border-[#1a365d] rounded-2xl p-8 hover:border-[#c9a227]/50 transition-all">
              <Code2 className="h-10 w-10 text-[#c9a227] mb-4 mx-auto" />
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-slate-400">Skills Mastered</div>
            </div>

            <div className="bg-[#0d1e36]/80 backdrop-blur-sm border-2 border-[#1a365d] rounded-2xl p-8 hover:border-[#c9a227]/50 transition-all">
              <Palette className="h-10 w-10 text-[#c9a227] mb-4 mx-auto" />
              <div className="text-3xl font-bold text-white mb-2">2+</div>
              <div className="text-sm text-slate-400">Projects Done</div>
            </div>

            <div className="bg-[#0d1e36]/80 backdrop-blur-sm border-2 border-[#1a365d] rounded-2xl p-8 hover:border-[#c9a227]/50 transition-all">
              <Briefcase className="h-10 w-10 text-[#c9a227] mb-4 mx-auto" />
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-slate-400">Dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
