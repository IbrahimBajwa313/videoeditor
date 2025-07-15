"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, X } from "lucide-react"
import Link from "next/link"

interface Project {
  _id: string
  title: string
  description: string
  category: string
  imageUrl: string
  videoUrl?: string
  tags: string[]
  createdAt: string
}

export function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [hasMounted, setHasMounted] = useState(false)

  const categories = ["All", "Commercial", "Documentary", "Social Media", "Corporate", "Music Video"]

  useEffect(() => {
    setHasMounted(true)
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects")
      if (response.ok) {
        const data = await response.json()
        setProjects(data)
      }
    } catch (error) {
      console.error("Error fetching projects:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  if (!hasMounted) return null

  const convertToEmbedURL = (url: string): string => {
    if (url.includes("youtu.be")) {
      const id = url.split("/").pop()
      return `https://www.youtube.com/embed/${id}`
    }

    if (url.includes("youtube.com")) {
      const urlObj = new URL(url)
      const id = urlObj.searchParams.get("v")
      return `https://www.youtube.com/embed/${id}`
    }

    return url // fallback (for .mp4 etc.)
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore my latest video editing projects and creative works
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading portfolio...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found. Check back soon!</p>
              <Link href="/admin">
                <Button className="mt-4 bg-purple-600 hover:bg-purple-700">Add Projects (Admin)</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project._id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.imageUrl || "/placeholder.svg?height=300&width=400"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="bg-white text-black hover:bg-gray-200"
                          onClick={() => project.videoUrl && setActiveVideo(project.videoUrl)}
                        >
                          <Play className="h-4 w-4 mr-1" />
                          Play
                        </Button>
                        {project.videoUrl && (
                          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {new Date(project.createdAt).toISOString().split("T")[0]}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ✅ Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Embed YouTube or show native video */}
            {activeVideo.includes("youtube.com") || activeVideo.includes("youtu.be") ? (
              <iframe
                src={convertToEmbedURL(activeVideo)}
                className="w-full aspect-video rounded-lg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <video controls autoPlay muted className="w-full h-auto rounded shadow-lg">
                <source src={activeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
