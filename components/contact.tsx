"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        <div className="absolute top-60 right-40 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Mail className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Let's Connect</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              <span className="gradient-text">Get In</span> Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your vision into compelling visual stories? Let's collaborate 
              and create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                      <p className="text-slate-300 group-hover:text-purple-300 transition-colors duration-300">malaikasundus7@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Phone</h3>
                      <p className="text-slate-300 group-hover:text-cyan-300 transition-colors duration-300">0333 5061354</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Location</h3>
                      <p className="text-slate-300 group-hover:text-yellow-300 transition-colors duration-300">Islamabad</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-white mb-2">
                    <span className="gradient-text">Send a</span> Message
                  </CardTitle>
                  <p className="text-slate-400">Let's discuss your next video project</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20 h-12"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20 h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20 h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <>
                          <Send className="mr-3 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
