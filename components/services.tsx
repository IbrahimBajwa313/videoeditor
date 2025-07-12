import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Scissors, Palette, Music, Zap, Globe } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description:
        "Professional video editing for all types of content including commercials, documentaries, and social media videos.",
    },
    {
      icon: Scissors,
      title: "Post-Production",
      description: "Complete post-production services including color correction, audio mixing, and visual effects.",
    },
    {
      icon: Palette,
      title: "Motion Graphics",
      description: "Eye-catching motion graphics and animations to enhance your video content and brand identity.",
    },
    {
      icon: Music,
      title: "Audio Enhancement",
      description: "Professional audio editing, mixing, and sound design to create immersive audio experiences.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality. Rush projects available with 24-48 hour turnaround.",
    },
    {
      icon: Globe,
      title: "Social Media Content",
      description:
        "Optimized content for various social media platforms including Instagram, TikTok, YouTube, and LinkedIn.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive video editing and post-production services tailored to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
