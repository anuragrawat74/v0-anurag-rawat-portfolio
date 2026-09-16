import { GraduationCap, Palette, Code2, Target } from "lucide-react"
import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 tracking-tight">About Me</h2>
            <div className="w-32 h-1.5 bg-slate-900 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Passionate about technology and creative problem-solving
            </p>
          </div>

          <Card className="mb-20 p-12 md:p-16 bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 shadow-xl">
            <p className="text-slate-700 text-xl md:text-2xl leading-relaxed text-pretty text-center">
              I am currently pursuing <span className="font-bold text-slate-900">MCA (Integrated, 4th Semester)</span>{" "}
              with a strong passion for programming and web design. I enjoy crafting digital solutions that are not only
              functional but also visually appealing. With hands-on experience in{" "}
              <span className="font-bold text-slate-900">C++</span> and basic{" "}
              <span className="font-bold text-slate-900">Java</span>, along with web technologies like{" "}
              <span className="font-bold text-slate-900">HTML and CSS</span>, I aim to combine programming with design
              to deliver engaging user experiences.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="flex flex-col items-center text-center p-10 bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-900 transition-all duration-300">
              <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Education</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                MCA (Integrated)
                <br />
                4th Semester
              </p>
            </Card>

            <Card className="flex flex-col items-center text-center p-10 bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-900 transition-all duration-300">
              <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <Palette className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Interests</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Robotics, UI/UX Design, Web Dev</p>
            </Card>

            <Card className="flex flex-col items-center text-center p-10 bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-900 transition-all duration-300">
              <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <Code2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Focus</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Programming + Design Excellence</p>
            </Card>

            <Card className="flex flex-col items-center text-center p-10 bg-white border-2 border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-900 transition-all duration-300">
              <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Goal</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Creating Engaging Digital Experiences</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
