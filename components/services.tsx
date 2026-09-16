import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code, Users, Briefcase } from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Custom Web Design & Development",
      description: "Creating responsive and visually appealing websites tailored to your needs.",
      icon: Code,
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      title: "UX/UI Design",
      description: "Designing intuitive user interfaces for websites and applications.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "C++ and Java Programming",
      description: "Providing programming support and solutions for college and personal projects.",
      icon: Briefcase,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Project Development Assistance",
      description: "Helping with college and personal project development from concept to completion.",
      icon: Users,
      gradient: "from-blue-500 to-indigo-500",
    },
  ]

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900">What I Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6" />
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive services to bring your digital projects to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.title}
                  className="border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`} />
                  <CardHeader className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-slate-900 mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base text-slate-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
