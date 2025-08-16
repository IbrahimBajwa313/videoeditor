import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Star, Play, Palette, Zap, Target } from "lucide-react"

export function About() {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "150+", color: "from-purple-500 to-pink-500" },
    { icon: Users, label: "Happy Clients", value: "80+", color: "from-cyan-500 to-blue-500" },
    { icon: Clock, label: "Years Experience", value: "5+", color: "from-yellow-500 to-orange-500" },
    { icon: Star, label: "Client Rating", value: "4.9/5", color: "from-green-500 to-emerald-500" },
  ]

  const skills = [
    { icon: Play, title: "Video Editing", description: "Advanced editing techniques with precision timing and seamless transitions", progress: 95 },
    { icon: Palette, title: "Color Grading", description: "Professional color correction and cinematic grading for visual impact", progress: 90 },
    { icon: Zap, title: "Motion Graphics", description: "Dynamic animations and visual effects that enhance storytelling", progress: 85 },
    { icon: Target, title: "Sound Design", description: "Audio mixing and sound effects for immersive experiences", progress: 88 },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-300 text-sm font-medium">About Me</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              <span className="gradient-text">Creative</span> Professional
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transforming concepts into compelling visual stories through innovative editing techniques, 
              cutting-edge technology, and an unwavering commitment to excellence.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative overflow-hidden rounded-2xl neon-border">
                <img
                  src="/malaika.png?height=600&width=700"
                  alt="Professional Video Editor"
                  className="w-full h-auto object-cover film-strip group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                    <p className="text-white font-medium">Professional Video Editor</p>
                    <p className="text-purple-300 text-sm">Specializing in Cinematic Storytelling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                  My Creative Journey
                </h3>
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    Since 2022, I've been crafting visual narratives that captivate audiences and drive results. 
                    My journey began with a passion for storytelling and evolved into mastery of cutting-edge 
                    editing techniques and industry-standard tools.
                  </p>
                  <p>
                    Specializing in <span className="gradient-text font-semibold">music-free video editing</span>, 
                    I focus on pure storytelling through precise cuts, seamless transitions, and emotional pacing. 
                    Using professional tools like CapCut and InShot, I transform raw footage into compelling visual experiences.
                  </p>
                  <p>
                    From corporate presentations to creative content, documentary films to social media campaigns, 
                    I bring technical expertise and artistic vision to every project, ensuring each story resonates 
                    with its intended audience.
                  </p>
                </div>
              </div>

              {/* Skills Progress */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white mb-4">Core Expertise</h4>
                {skills.map((skill, index) => (
                  <div key={skill.title} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-5 w-5 text-purple-400" />
                      <span className="text-white font-medium">{skill.title}</span>
                      <span className="text-purple-300 text-sm ml-auto">{skill.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.progress}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                    </div>
                    <p className="text-slate-400 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
