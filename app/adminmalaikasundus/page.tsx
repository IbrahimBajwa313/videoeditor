"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Save, X } from "lucide-react"

interface Project {
  _id?: string
  title: string
  description: string
  category: string
  imageUrl: string
  videoUrl?: string
  tags: string[]
  createdAt?: string
}

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [formData, setFormData] = useState<Project>({
    title: "",
    description: "",
    category: "",
    imageUrl: "",
    videoUrl: "",
    tags: [],
  })
  const [tagInput, setTagInput] = useState("")
  const [loading, setLoading] = useState(false)

  const categories = ["Commercial", "Documentary", "Social Media", "Corporate", "Music Video"]

  useEffect(() => {
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
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = editingProject ? `/api/projects/${editingProject._id}` : "/api/projects"
      const method = editingProject ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        await fetchProjects()
        resetForm()
        setIsDialogOpen(false)
      } else {
        alert("Error saving project")
      }
    } catch (error) {
      console.error("Error saving project:", error)
      alert("Error saving project")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await fetchProjects()
      } else {
        alert("Error deleting project")
      }
    } catch (error) {
      console.error("Error deleting project:", error)
      alert("Error deleting project")
    }
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setFormData(project)
    setIsDialogOpen(true)
  }

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: "",
      imageUrl: "",
      videoUrl: "",
      tags: [],
    })
    setTagInput("")
    setEditingProject(null)
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }))
      setTagInput("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm} className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Project Title"
                      value={formData.title}
                      onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Project Description"
                      value={formData.description}
                      onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Input
                      placeholder="Image URL"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Video URL (optional)"
                      value={formData.videoUrl}
                      onChange={(e) => setFormData((prev) => ({ ...prev, videoUrl: e.target.value }))}
                    />
                  </div>
                  <div>
                    <div className="flex gap-2 mb-2">
                      <Input
                        placeholder="Add tag"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                      />
                      <Button type="button" onClick={addTag} variant="outline">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="cursor-pointer"
                          onClick={() => removeTag(tag)}
                        >
                          {tag} <X className="ml-1 h-3 w-3" />
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </div>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        {editingProject ? "Update Project" : "Save Project"}
                      </>
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project._id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={project.imageUrl || "/placeholder.svg?height=200&width=300"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    <Button size="sm" variant="secondary" onClick={() => handleEdit(project)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(project._id!)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.category}</Badge>
                    <span className="text-sm text-gray-500">
                      {project.createdAt && new Date(project.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects yet. Add your first project!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
