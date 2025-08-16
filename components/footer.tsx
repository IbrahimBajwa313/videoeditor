import { Heart, Film, Instagram, Youtube, Linkedin, Camera, Sparkles, Code2 } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
                  <Film className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-black gradient-text">
                  Cinematic Editor
                </h3>
              </div>
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed text-lg">
                Professional video editing services that transform raw footage into compelling visual narratives. 
                Specializing in cinematic storytelling for brands and creators worldwide.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span>Crafting stories that captivate and inspire</span>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Camera className="h-5 w-5 text-purple-400" />
                Services
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="hover:text-purple-300 transition-colors duration-300 cursor-pointer">Cinematic Editing</li>
                <li className="hover:text-purple-300 transition-colors duration-300 cursor-pointer">Motion Graphics</li>
                <li className="hover:text-purple-300 transition-colors duration-300 cursor-pointer">Color Grading</li>
                <li className="hover:text-purple-300 transition-colors duration-300 cursor-pointer">Sound Design</li>
                <li className="hover:text-purple-300 transition-colors duration-300 cursor-pointer">Post-Production</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Connect</h4>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-pink-300 transition-colors duration-300 group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-600 transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                  </div>
                  Instagram
                </a>
                <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-red-300 transition-colors duration-300 group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                    <Youtube className="h-5 w-5" />
                  </div>
                  YouTube
                </a>
                <a href="#" className="flex items-center gap-3 text-slate-300 hover:text-blue-300 transition-colors duration-300 group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 flex items-center gap-2">
                Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by a passionate video editor
              </p>
              <div className="flex items-center gap-6 text-slate-500 text-sm">
                <span>© 2025 Cinematic Editor</span>
                <span>•</span>
                <span>All rights reserved</span>
                <span>•</span>
                <span className="text-purple-400">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center text-xs text-rose-600 dark:text-rose-400 border-t border-rose-200 dark:border-rose-700 pt-2 mt-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-3">
              <div className="flex items-center gap-1">
                <Code2 className="w-3 h-3" />
                <span> 2025 Malaika Sundus. All rights reserved.</span>
              </div>
              <span className="hidden sm:inline-block">|</span>
              <span>
                Developed by{" "}
                <Link
                  href="https://www.techcognify.com/"
                  target="_blank"
                  className="hover:underline underline-offset-2 text-rose-600 dark:text-rose-300 font-medium transition-colors"
                >
                  TECHCOGNIFY
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
