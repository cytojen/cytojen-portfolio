import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { SiLinkedin, SiGithub, SiDatacamp } from "react-icons/si"

export default function Contact() {
  return (
    // Wrapper section for spacing and layout
    <section className="relative overflow-hidden py-12 pb-28">
      <div className="container relative z-10 mx-auto px-4">

        {/* Section header and desc */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="mb-12 text-gray-400 text-lg">
            Interested in collaborating on data projects or discussing opportunities in data analytics? Let's build
            something amazing with data.
          </p>
          
          {/* Social media, contact buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

          {/* Email button */}
          <motion.a
            href="https://mail.google.com/mail/u/4/?view=cm&fs=1&to=jenpatricknataba311@gmail.com&su=Hello&body=I saw your portfolio and wanted to connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            
            <Mail className="h-5 w-5" />
            Email Me
          </motion.a>


            {/* LinkedIn button */}
            <motion.a
              href="https://linkedin.com/in/cytojen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiLinkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>

            {/* GitHub button */}
            <motion.a
              href="https://github.com/cytojen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-900 hover:to-black rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-black/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiGithub className="w-5 h-5" />
              GitHub
            </motion.a>
            
            {/* DataCamp button */}
            <motion.a
              href="https://www.datacamp.com/portfolio/oxyjen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiDatacamp className="w-5 h-5" />
              DataCamp
            </motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
