"use client"

import { Button } from "@/components/ui/button"
import { Play, Download, ArrowDown, Film, Camera, Edit3, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`
        }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30" />

      {/* Floating Gradient Elements - Enhanced for visual interest */}
      <div className="absolute top-10 left-4 w-16 h-16 md:top-20 md:left-10 md:w-24 md:h-24 rounded-full cinema-gradient opacity-20 md:opacity-25 blur-xl float" />
      <div className="absolute top-20 right-4 w-12 h-12 md:top-40 md:right-20 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 md:opacity-35 blur-lg float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-4 w-14 h-14 md:bottom-32 md:left-20 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-pink-400 to-red-500 opacity-25 md:opacity-30 blur-xl float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-10 right-4 w-20 h-20 md:bottom-20 md:right-10 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 md:opacity-25 blur-2xl pulse-glow" />
      
      {/* Additional Floating Elements for Visual Depth */}
      <div className="absolute top-1/3 left-1/4 w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 opacity-15 md:opacity-20 blur-lg float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-violet-400 to-purple-500 opacity-18 md:opacity-23 blur-xl float" style={{ animationDelay: '3s' }} />

      {/* Main Content - Improved responsive layout */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Professional Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-8 neon-border">
          <Sparkles className="h-4 w-4 text-yellow-400" />
          <span className="text-sm font-medium text-purple-200">Professional Video Editor</span>
          <Film className="h-4 w-4 text-purple-400" />
        </div> */}

        <div className="mb-8 mt-16 md:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 leading-tight md:leading-none">
            <span 
              className="gradient-text neon-glow block"
              data-text="CINEMATIC"
            >
              Malaika Sundus
            </span>
            <span className="text-white/90 block mt-1 md:mt-2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">VIDEO EDITOR</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-6 md:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed font-light px-2">
              Transforming raw footage into <span className="gradient-text font-semibold">compelling visual narratives</span> through 
              precision editing, motion graphics, and cinematic storytelling
            </p>
          </div>

          {/* Expertise Tags - Responsive */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 px-2">
            {['Motion Graphics', 'Color Grading', 'Sound Design', 'VFX', 'Storytelling'].map((skill, index) => (
              <span 
                key={skill}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-800/50 border border-purple-500/20 text-purple-200 text-xs md:text-sm font-medium backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced Action Buttons - Responsive */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 px-2">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 neon-border w-full sm:w-auto"
            onClick={scrollToPortfolio}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <Play className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-pulse" />
            View Portfolio
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="group relative overflow-hidden border-2 border-slate-600 text-slate-300 hover:text-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg font-semibold rounded-full bg-slate-800/30 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Download className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:animate-bounce" />
            Download Reel
          </Button>
        </div>

        {/* Enhanced Scroll Indicator - Responsive */}
        <div className="relative hidden sm:block">
          <div className="animate-bounce cursor-pointer group" onClick={scrollToPortfolio}>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs md:text-sm text-slate-400 group-hover:text-purple-300 transition-colors duration-300">Explore My Work</span>
              <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-slate-600 rounded-full flex justify-center group-hover:border-purple-400 transition-colors duration-300">
                <div className="w-0.5 md:w-1 h-2 md:h-3 bg-slate-400 rounded-full mt-1.5 md:mt-2 animate-pulse group-hover:bg-purple-400" />
              </div>
              <ArrowDown className="h-4 w-4 md:h-5 md:w-5 text-slate-400 group-hover:text-purple-300 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Corner Elements - Responsive */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full blur-3xl" />
      
      {/* Cinema Equipment Icons - Hidden on mobile, responsive on desktop */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 opacity-5 md:opacity-10 hidden sm:block">
        <Camera className="h-12 w-12 md:h-16 md:w-16 text-purple-400 float" />
      </div>
      <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 opacity-5 md:opacity-10 hidden sm:block">
        <Edit3 className="h-8 w-8 md:h-12 md:w-12 text-pink-400 float" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  )
}
