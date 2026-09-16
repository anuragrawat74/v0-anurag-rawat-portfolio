import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cpu, Layout, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Robotic Car",
      description:
        "Developed a phone-controlled robotic car using Arduino with ultrasonic sensors and Bluetooth connectivity for obstacle detection and remote control.",
      technologies: ["Arduino", "C++", "Bluetooth", "Sensors"],
      outcome: "Successfully demonstrated real-time mobile control with autonomous obstacle avoidance capabilities.",
      outcomeLink: "https://v0-rawat-krishi-farm.vercel.app/",
      icon: Cpu,
      images: [
        {
          src: "/images/project-team-1.jpg",
          alt: "Team working on robotic car with laptops outdoors",
        },
        {
          src: "/images/project-team-2.jpg",
          alt: "Team celebration at robotics competition in Agra",
        },
        {
          src: "/images/project-team-3.jpg",
          alt: "Team building robotic car with electronics and sensors",
        },
      ],
    },
    {
      title: "Portfolio Website Mockup",
      description:
        "Designed and developed a responsive portfolio website focusing on UX/UI principles and modern design trends.",
      technologies: ["HTML", "CSS", "Figma", "JavaScript"],
      outcome: "Improved user experience and visual design understanding with responsive layouts.",
      icon: Layout,
      images: [],
    },
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#f8f6f0] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#0a1628]">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c9a227] to-[#e8c547] mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore my work showcasing innovation, technical skills, and creative problem-solving
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <Card
                  key={project.title}
                  className="border-[#c9a227]/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Gallery */}
                    {project.images.length > 0 && (
                      <div className="relative bg-[#0a1628] p-8">
                        <div className="grid grid-cols-2 gap-4">
                          {project.images.map((image, idx) => (
                            <div
                              key={idx}
                              className={`relative overflow-hidden rounded-lg ${
                                idx === 0 ? "col-span-2 h-80" : "h-48"
                              }`}
                            >
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <CardContent
                      className={`p-8 lg:p-12 flex flex-col justify-center ${!project.images.length ? "lg:col-span-2" : ""}`}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#c9a227] to-[#e8c547] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                        <Icon className="h-7 w-7 text-[#0a1628]" />
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">{project.title}</h3>

                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                      <div className="space-y-6">
                        <div>
                          <p className="text-sm font-bold text-[#0a1628] mb-3 uppercase tracking-wide">
                            Technologies Used
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                className="bg-gradient-to-r from-[#0a1628] to-[#1a365d] text-white px-4 py-1.5 text-sm font-medium hover:from-[#1a365d] hover:to-[#0a1628] transition-all"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="border-l-4 border-[#c9a227] pl-4 bg-[#f8f6f0] p-4 rounded-r-lg">
                          <p className="text-sm font-bold text-[#0a1628] mb-2 uppercase tracking-wide">
                            Project Outcome
                          </p>
                          <p className="text-base text-slate-700 leading-relaxed mb-3">{project.outcome}</p>
                          {project.outcomeLink && (
                            <Button
                              asChild
                              className="bg-[#c9a227] hover:bg-[#b8922a] text-[#0a1628] font-semibold"
                            >
                              <a href={project.outcomeLink} target="_blank" rel="noopener noreferrer">
                                View Live Project
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
