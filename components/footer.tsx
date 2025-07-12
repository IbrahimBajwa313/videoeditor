import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Video Editor Pro
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Professional video editing services that bring your stories to life. Creating compelling visual
                narratives for brands and creators worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Video Editing</li>
                <li>Motion Graphics</li>
                <li>Color Correction</li>
                <li>Audio Enhancement</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Instagram</li>
                <li>YouTube</li>
                <li>LinkedIn</li>
                <li>Behance</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Video Editor Pro
            </p>
            <p className="text-gray-500 text-sm mt-2">© 2025 Video Editor Pro. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
