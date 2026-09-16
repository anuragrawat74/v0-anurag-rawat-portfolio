"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-400 mb-12" />

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-900">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <a
                        href="mailto:anuragrawat7457@gmail.com"
                        className="text-slate-600 hover:text-teal-600 transition-colors"
                      >
                        anuragrawat7457@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <a href="tel:+919837157936" className="text-slate-600 hover:text-teal-600 transition-colors">
                        +91 9837157936
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Location</p>
                      <p className="text-slate-600">Raja Bal, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-slate-900">Connect With Me</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/anurag-rawat-552bb3350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-900 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href="https://github.com/anuragrawat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-900 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              <div>
                <Button size="lg" className="bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-slate-900">Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
