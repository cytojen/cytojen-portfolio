import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, BarChart3, Code } from "lucide-react"
import { SiGithub } from "react-icons/si"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Category for filters
  const categories = ["all", "notebooks", "dashboards", "repositories"]

  // List of project entries with category, tech, and link
  const projects = [
    {
      id: 1,
      title: "Air Quality Under the Lens: Ozone Pollution in California",
      category: "notebooks",
      description: "Visualizing and analyzing California's 2024 ozone data.",
      link: "https://www.datacamp.com/datalab/w/719b0ac2-28f8-4cbc-9bea-baba55129639",
      icon: <Code className="h-6 w-6" />,
      tech: ["Python", "Pandas", "Plotly"],
    },
    {
      id: 2,
      title: "The Price of Innovation: Global Smartphone Launch Trends and Market Insights",
      category: "notebooks",
      description: "Global smartphone pricing trends and brand strategies across regions.",
      link: "https://colab.research.google.com/drive/1ZhQhJEZ2NgUi8_ujZKY9xR5aBFKVkbND?usp=sharing",
      icon: <Code className="h-6 w-6" />,
      tech: ["Python", "Plotly", "Pandas"],
    },
    {
      id: 3,
      title: "Where Ozone Hits Hardest – California 2024",
      category: "dashboards",
      description: "Interactive Tableau dashboard analyzing ozone pollution patterns in California",
      link: "https://public.tableau.com/app/profile/jen.patrick.nataba/viz/WhereOzoneHitsHardest-California2024DataCampEntry/Dashboard1",
      icon: <BarChart3 className="h-6 w-6" />,
      tech: ["Tableau", "Data Visualization", "Environmental Data"],
    },
    {
      id: 4,
      title: "Omdena AQI Prediction",
      category: "repositories",
      description: "Machine learning model for air quality index prediction in Mexico",
      link: "https://github.com/OmdenaAI/Omdena_MexicoChapter_AirQualityPrediction",
      icon: <SiGithub className="h-6 w-6" />,
      tech: ["Python", "ML", "Environmental Science"],
    },
    {
      id: 5,
      title: "Document Request System",
      category: "repositories",
      description: "Full-stack application for managing document requests and approvals",
      link: "https://github.com/cytojen/document-request-system",
      icon: <SiGithub className="h-6 w-6" />,
      tech: ["Python", "Flask", "Database"],
    },
  ]

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory,
  )

  return (
    <section className="relative py-15 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Projects & Work
        </motion.h2>

        {/* Category filter buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn text-sm capitalize ${selectedCategory === category ? "btn-primary" : "btn-outline"}`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="min-h-[600px] flex items-start justify-center">
          <motion.div layout className="flex flex-wrap gap-8 justify-center w-full max-w-6xl">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: filteredProjects.indexOf(project) * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="w-80 h-80"
                >
                  {/* Project card */}
                  <div className="card h-full w-full border-gray-700 hover:border-green-500 transition-all duration-300 backdrop-blur-sm flex flex-col">
                    
                    {/* Card header with icon and title */}
                    <div className="card-header flex-shrink-0">
                      <div className="flex items-center gap-3">
                        <div className="text-green-400">{project.icon}</div>
                        <h3 className="text-white text-lg leading-tight font-semibold">{project.title}</h3>
                      </div>
                    </div>

                    {/* Card content: description, tech tags, and link */}
                    <div className="card-content flex-1 flex flex-col justify-between space-y-4">
                      <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>

                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                      
                      {/* External project link */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
