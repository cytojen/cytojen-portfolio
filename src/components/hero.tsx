import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FileText, ArrowDown } from "lucide-react"

export default function Hero() {
  // Create a ref for the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Effect for the binary rain animation
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to full viewport
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Array to store all binary strings
    const binaryStrings: BinaryString[] = []
    // Calculate number of columns based on screen width
    const columnCount = Math.floor(canvas.width / 20)

    // Binary string class definition
    class BinaryString {
      x: number
      y: number
      speed: number
      binary: string
      opacity: number

      constructor(x: number) {
        this.x = x
        this.y = Math.random() * canvas.height
        this.speed = Math.random() * 2 + 1
        this.binary = Math.random() > 0.5 ? "1" : "0" 
        this.opacity = Math.random() * 0.5 + 0.3 
      }

      update() {
        this.y += this.speed
        // Reset to top when reaching bottom
        if (this.y > canvas.height) {
          this.y = -20
          this.binary = Math.random() > 0.5 ? "1" : "0"
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(0, 255, 65, ${this.opacity})`
        ctx.font = "14px monospace"
        ctx.fillText(this.binary, this.x, this.y)
      }
    }

    // Create binary strings for each column
    for (let i = 0; i < columnCount; i++) {
      binaryStrings.push(new BinaryString(i * 20))
    }

    // Animation loop
    function animate() {
      if (!ctx) return
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw each binary string
      for (const binaryString of binaryStrings) {
        binaryString.update()
        binaryString.draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll animations
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToProjects = (event: React.MouseEvent<HTMLButtonElement>) => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
    event.currentTarget.blur()
  }

  return (
    // Full viewport container
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Binary rain canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      
      {/* Content container with scroll effects */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
        style={{ y, opacity }}
      >
      {/* Main heading with sleek monochrome text */}
      <motion.h1
        className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl text-zinc-100 drop-shadow-[0_6px_18px_rgba(255,255,255,0.14)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        JEN PATRICK NATABA
      </motion.h1>
      
      {/* Subtitle */}
      <motion.p
        className="max-w-[600px] text-lg text-gray-300 sm:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Aspiring Data Engineer
      </motion.p>
      
      {/* Technology tags with staggered animation */}
      <motion.div
        className="mt-8 flex gap-4 text-sm text-green-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {["Python", "Data", "SQL", "Analysis"].map((tech, index) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            {tech}
            {/* Add separator dot except for last item */}
            {index < 3 && <span className="ml-4">•</span>}
          </motion.span>
        ))}
      </motion.div>
        
      {/* Resume Button */}
      <motion.a
        href="https://drive.google.com/file/d/1dXsEzZeJpeyL2wcixNeCCt61Fs_t1OSr/view"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold tracking-wide text-zinc-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/80 hover:bg-white hover:text-black hover:shadow-[0_12px_32px_rgba(255,255,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FileText className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" />
        View Resume
      </motion.a>  
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </motion.div>

      {/* UX, indicate scrollability */}
      <motion.button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/5 
        text-white hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-white/20 z-20"        
        initial={{ opacity: 0.7 }} 
        animate={{
          y: [0, 10, 0],
          transition: {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.button>
    </div>
  )
}
