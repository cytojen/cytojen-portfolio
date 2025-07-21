import Hero from "./components/hero"
import Projects from "./components/projects"
import Certifications from "./components/certifications"
import Contact from "./components/contact"
import "./index.css"

export default function App() {
  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/3 via-blue-900/3 to-transparent" />
      </div>

      <Hero />

      <div className="bg-gradient-to-b from-black/80 via-gray-900/60 to-gray-800/40">
        <Projects />
      </div>

      <div className="bg-gradient-to-b from-gray-800/40 via-gray-900/60 to-black/80">
        <Certifications />
      </div>

      <div className="bg-gradient-to-b from-black/80 to-black">
        <Contact />
      </div>
    </main>
  )
}
