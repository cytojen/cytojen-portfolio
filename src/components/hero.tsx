import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

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
        {/* Main heading with gradient text */}
        <motion.h1
          className="mb-6 text-6xl font-bold tracking-tighter sm:text-7xl lg:text-8xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
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
          Aspiring Data Analyst
        </motion.p>
        
        {/* Technology tags with staggered animation */}
        <motion.div
          className="mt-8 flex gap-4 text-sm text-green-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {["Python", "Data Science", "Machine Learning", "Tableau"].map((tech, index) => (
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

        {/* Gradient fade at bottom of screen */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  )
}
