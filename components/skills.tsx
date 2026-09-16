"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "C++", level: "Advanced", percentage: 90, color: "from-blue-500 to-cyan-500", icon: "💻" },
    { name: "Java", level: "Basic Knowledge", percentage: 50, color: "from-orange-500 to-red-500", icon: "☕" },
    { name: "HTML / CSS", level: "Intermediate", percentage: 75, color: "from-pink-500 to-rose-500", icon: "🎨" },
    {
      name: "Web Design & Development",
      level: "Intermediate",
      percentage: 70,
      color: "from-teal-500 to-emerald-500",
      icon: "🌐",
    },
    {
      name: "UX/UI Design",
      level: "Intermediate",
      percentage: 75,
      color: "from-purple-500 to-indigo-500",
      icon: "✨",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-30 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Continuously expanding my technical expertise across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className="p-6 bg-white border-slate-200 shadow-lg hover:shadow-2xl hover:border-teal-400/50 transition-all duration-300 group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease-out ${index * 100}ms`,
                }}
              >
                <div className="space-y-4">
                  {/* Icon and Name */}
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{skill.icon}</div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{skill.name}</h3>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{skill.level}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{
                          width: isVisible ? `${skill.percentage}%` : "0%",
                          transitionDelay: `${index * 100 + 200}ms`,
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className="h-1 w-0 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full group-hover:w-full transition-all duration-300" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
