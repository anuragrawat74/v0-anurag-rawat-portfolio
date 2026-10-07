"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function Resume() {

  return (
    <section id="resume" className="py-32 bg-gradient-to-b from-[#f8f6f0] to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c9a227_1px,transparent_1px),linear-gradient(to_bottom,#c9a227_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0a1628] to-[#1a365d] rounded-3xl mb-8 shadow-xl">
              <FileText className="h-10 w-10 text-[#c9a227]" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[#0a1628] tracking-tight">Resume</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#c9a227] to-[#e8c547] mx-auto mb-8 rounded-full" />
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Complete professional profile with qualifications and achievements
            </p>
            <Button
              size="lg"
              className="bg-[#c9a227] hover:bg-[#b8922a] text-[#0a1628] font-semibold shadow-xl hover:shadow-2xl transition-all px-8 py-6 text-lg rounded-xl"
              asChild
            >
              <a href="/Anurag_Rawat_Resume.pdf" download="Anurag_Rawat_Resume.pdf">
                <Download className="mr-3 h-6 w-6" />
                Download Resume PDF
              </a>
            </Button>
          </div>

          <div className="mb-16 rounded-2xl border-2 border-[#c9a227]/30 bg-white p-3 shadow-2xl">
            <iframe
              src="/Anurag_Rawat_Resume.pdf#view=FitH"
              title="Anurag Rawat resume"
              className="h-[720px] w-full rounded-xl"
            />
          </div>

          {/* Project Photos Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#0a1628] text-center mb-8">Project Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-[#c9a227]/20 hover:border-[#c9a227] transition-all">
                <Image
                  src="/images/project-team-1.jpg"
                  alt="Team working on robotic car with laptops outdoors"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-[#c9a227]/20 hover:border-[#c9a227] transition-all">
                <Image
                  src="/images/project-team-2.jpg"
                  alt="Team celebration at robotics competition in Agra"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg border-2 border-[#c9a227]/20 hover:border-[#c9a227] transition-all">
                <Image
                  src="/images/project-team-3.jpg"
                  alt="Team building robotic car with electronics and sensors"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Resume Pages */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-[#c9a227]/30 shadow-2xl overflow-hidden bg-white hover:shadow-3xl transition-all duration-500">
              <div className="relative bg-gradient-to-br from-[#f8f6f0] to-white p-6">
                <Image
                  src="/images/resume-page-1.jpg"
                  alt="Anurag Rawat resume"
                  width={1200}
                  height={1600}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-[#f8f6f0] to-white border-t-4 border-[#c9a227]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-[#0a1628] mb-1">Updated Resume</p>
                    <p className="text-sm text-slate-600">Profile, education, skills, projects and interests</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227] flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-[#0a1628]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="border-2 border-[#c9a227]/20 shadow-lg hover:shadow-xl hover:border-[#c9a227] transition-all bg-white p-8">
              <CardContent className="p-0">
                <div className="text-5xl font-bold text-[#c9a227] mb-3">MCA</div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Pursuing Master of Computer Applications at RBS Management Technical Campus
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a227]/20 shadow-lg hover:shadow-xl hover:border-[#c9a227] transition-all bg-white p-8">
              <CardContent className="p-0">
                <div className="text-5xl font-bold text-[#c9a227] mb-3">2024-29</div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Expected graduation year for MCA degree program
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#c9a227]/20 shadow-lg hover:shadow-xl hover:border-[#c9a227] transition-all bg-white p-8">
              <CardContent className="p-0">
                <div className="text-5xl font-bold text-[#c9a227] mb-3">Fresher</div>
                <p className="text-base text-slate-700 leading-relaxed">
                  Eager to start professional career as a software developer
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
