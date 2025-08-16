import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Scissors, Palette, Music, Zap, Globe, Film, Monitor, Sparkles, Clock } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Video,
      title: "Cinematic Editing",
      description: "Professional video editing with cinematic techniques, seamless transitions, and storytelling focus for maximum impact.",
      color: "from-purple-500 to-pink-500",
      features: ["4K/8K Support", "Color Grading", "Advanced Cuts"]
    },
    {
      icon: Scissors,
      title: "Post-Production",
      description: "Complete post-production pipeline including color correction, audio mixing, visual effects, and final delivery.",
      color: "from-cyan-500 to-blue-500",
      features: ["VFX Integration", "Audio Mixing", "Final Mastering"]
    },
    {
      icon: Palette,
      title: "Motion Graphics",
      description: "Dynamic motion graphics, title sequences, and visual effects that enhance your brand identity and storytelling.",
      color: "from-yellow-500 to-orange-500",
      features: ["2D/3D Animation", "Title Design", "Brand Integration"]
    },
    {
      icon: Music,
      title: "Sound Design",
      description: "Professional audio editing, sound effects, and mixing to create immersive and emotionally engaging experiences.",
      color: "from-green-500 to-emerald-500",
      features: ["Audio Cleanup", "Sound Effects", "Music Sync"]
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Rapid turnaround times without compromising quality. Rush projects completed within 24-48 hours when needed.",
      color: "from-red-500 to-pink-500",
      features: ["24h Rush", "Quick Revisions", "Priority Support"]
    },
    {
      icon: Globe,
      title: "Multi-Platform",
      description: "Content optimized for various platforms including YouTube, Instagram, TikTok, LinkedIn, and broadcast television.",
      color: "from-indigo-500 to-purple-500",
      features: ["Platform Specs", "Format Variants", "Aspect Ratios"]
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Film className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Professional Services</span>
              <Sparkles className="h-4 w-4 text-purple-400" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              <span className="gradient-text">Expert</span> Services
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive video editing and post-production services designed to transform your vision 
              into compelling visual narratives that captivate and engage your audience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-900/20" />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`} />
                
                <CardHeader className="text-center pb-6 relative z-10">
                  {/* Icon Container */}
                  <div className={`mx-auto mb-6 p-4 bg-gradient-to-r ${service.color} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10 px-6 pb-8">
                  <p className="text-slate-300 text-center leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                        style={{ animationDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} animate-pulse`} />
                  </div>
                </CardContent>
                
                {/* Film Strip Effect */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700">
              <Clock className="h-5 w-5 text-purple-400" />
              <span className="text-slate-300 font-medium">Ready to bring your vision to life?</span>
              <Monitor className="h-5 w-5 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
