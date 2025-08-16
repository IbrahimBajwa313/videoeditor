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
    <section id="portfolio" className="py-24 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-pink-500 rounded-full blur-3xl" />
        <div className="absolute top-64 right-64 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Play className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Featured Work</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              <span className="gradient-text">Creative</span> Portfolio
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover my latest video editing projects showcasing cinematic storytelling, 
              advanced techniques, and creative vision across various genres and platforms.
            </p>

            {/* Enhanced Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative overflow-hidden px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category 
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/25" 
                      : "bg-slate-800/50 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-purple-500/50 hover:text-white backdrop-blur-sm"
                  }`}
                >
                  {selectedCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 animate-pulse" />
                  )}
                  <span className="relative z-10">{category}</span>
                </Button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-slate-700 border-t-purple-500 mx-auto mb-6"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
              </div>
              <p className="text-slate-300 text-lg font-medium">Loading creative works...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Play className="h-12 w-12 text-purple-400" />
                </div>
                <p className="text-slate-300 text-xl mb-4">No projects found in this category</p>
                <p className="text-slate-400 mb-8">Check back soon for new creative works!</p>
              </div>
              <Link href="/adminmalaikasundus">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  Add Projects (Admin)
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={project._id} className="group relative overflow-hidden bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2">
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
                  
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.imageUrl || "/placeholder.svg?height=300&width=400"}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500 film-strip"
                    />
                    
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex gap-3">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 rounded-full px-6 py-2 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                            onClick={() => project.videoUrl && setActiveVideo(project.videoUrl)}
                          >
                            <Play className="h-4 w-4 mr-2" />
                            Play
                          </Button>
                          {project.videoUrl && (
                            <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-slate-900/50 backdrop-blur-sm rounded-full px-4 py-2 transition-all duration-300 hover:scale-105"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white border-0 backdrop-blur-sm px-3 py-1 font-medium">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-slate-900/50 border-slate-600 text-slate-300 backdrop-blur-sm">
                        {new Date(project.createdAt).toISOString().split("T")[0]}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-6 line-clamp-2 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="text-xs bg-slate-700/50 border-slate-600 text-slate-400 hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-300"
                          style={{ animationDelay: `${tagIndex * 0.1}s` }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Index */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </CardContent>

                  {/* Film Strip Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-purple-300 transition-colors duration-300 z-10 bg-slate-800/50 rounded-full p-2 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl" />
              
              {/* Embed YouTube or show native video */}
              {activeVideo.includes("youtube.com") || activeVideo.includes("youtu.be") ? (
                <iframe
                  src={convertToEmbedURL(activeVideo)}
                  className="w-full aspect-video rounded-2xl relative z-10"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video 
                  controls 
                  autoPlay 
                  muted 
                  className="w-full h-auto rounded-2xl relative z-10 bg-slate-900"
                >
                  <source src={activeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              
              {/* Film Strip Effect */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>

            {/* Modal Info */}
            <div className="mt-4 text-center">
              <p className="text-slate-400 text-sm">Press ESC to close or click outside the video</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
