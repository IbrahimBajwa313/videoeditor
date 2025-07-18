import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Star } from "lucide-react"

export function About() {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "150+" },
    { icon: Users, label: "Happy Clients", value: "80+" },
    { icon: Clock, label: "Years Experience", value: "5+" },
    { icon: Star, label: "Client Rating", value: "4.9/5" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate video editor with over 3 years of experience in creating compelling visual narratives.
              From corporate videos to creative content, I bring technical expertise and artistic vision to every
              project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/malaika.png?height=500&width=600"
                alt="Video Editor at Work"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                Started as a freelance editor in 2022, I've worked with brands, agencies, and content creators to
                produce high-quality video content. My expertise spans across various genres including commercials,
                documentaries, social media content, and corporate videos.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I’m a passionate video editor who creates music-free video edits that focus on storytelling, clarity, and emotion. I use CapCut and InShot to bring ideas to life with smooth cuts, clean transitions, and creative visuals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <stat.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
