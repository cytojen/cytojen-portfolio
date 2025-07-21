import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"

export default function Certifications() {
  // Featured/main certification displayed in a prominent card
  const mainCertification = {
    title: "Certified Associate Data Analyst",
    issuer: "DataCamp",
    link: "https://www.datacamp.com/certificate/DAA0014313414567",
    image: "./images/certified-associate-data-analyst.jpg",
    description: "Professional certification demonstrating proficiency in data analysis and SQL.",
  }

  // Array of other certificates to display in a grid
  const certificates = [
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM via Credly",
      link: "https://www.credly.com/badges/9f76f47f-726c-4405-9a96-23e6be3197e6/public_url",
      image: "./images/ibm-data-science.jpg",
    },
    {
      title: "Lead ML Engineer @ Omdena Local Chapter",
      issuer: "Omdena",
      link: "https://confirm.omdena.com/LC4thxr",
      image: "./images/omdena-certificate.png",
    },
    {
      title: "DataCamp Introduction to Tableau",
      issuer: "DataCamp",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/832da051cfb9fe2cb6ea8466bba81703024c0e08",
      image: "./images/intro-tableau.jpg",
    },
    {
      title: "DataCamp Creating Dashboards in Tableau",
      issuer: "DataCamp",
      link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/6594b1989b76cf4d0a3fe05b0a7e934b8b416629",
      image: "./images/creating-dashboards-tableau.jpg",
    },
    {
      title: "CS50x Puzzle Day 2024",
      issuer: "Harvard University",
      link: "https://cs50.harvard.edu/certificates/38a57797-f6c8-407c-9d29-03051e9e0b2b",
      image: "./images/cs50-puzzle.png",
    },
    {
      title: "CS50P - Introduction to Programming with Python",
      issuer: "Harvard University",
      link: "https://cs50.harvard.edu/certificates/4cc03379-76a6-4fef-90ce-4d851df8c856",
      image: "./images/cs50-python.png",
    },
    {
      title: "CS50x - Introduction to Computer Science",
      issuer: "Harvard University",
      link: "https://cs50.harvard.edu/certificates/d721918e-4d64-4b0e-b324-227539f2251a",
      image: "./images/cs50x.png",
    },
    {
      title: "US-ASEAN STIC Program Certificate of Completion",
      issuer: "US-ASEAN STIC",
      link: "./images/us-asean-stic.jpg",
      image: "images/us-asean-stic.jpg",
    },
  ]

  return (
    // Section wrapper with padding
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section heading with animation */}
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Certifications & Achievements
        </motion.h2>

        {/* Main certification card with animation */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.02, rotateX: 5 }}
        >
          <a
            href={mainCertification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card block bg-gradient-to-r from-green-600/20 to-blue-600/20 border-green-500/50 backdrop-blur-sm hover:shadow-lg transition-all"
          >
            {/* Certificate image */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={mainCertification.image || "/placeholder.svg"}
                alt={mainCertification.title}
                className="w-full object-cover"
              />
            </div>
            {/* Title and issuer */}
            <div className="card-header text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-green-400" />
              </div>
              <h3 className="card-title text-white">{mainCertification.title}</h3>
              <p className="text-green-400">{mainCertification.issuer}</p>
            </div>
            {/* Description and certificate link */}
            <div className="card-content text-center space-y-4">
              <p className="text-gray-300">{mainCertification.description}</p>
              <span className="inline-flex items-center gap-2 text-green-400 group-hover:text-green-300 transition-colors">
                <ExternalLink className="h-4 w-4" />
                View Certificate
              </span>
            </div>
          </a>
        </motion.div>

        {/* Grid of additional certificates */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: -5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Individual certificate card */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card h-full border-gray-700 hover:border-green-500 transition-all duration-300 backdrop-blur-sm group flex flex-col"
              >
                {/* Certificate image */}
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Certificate text content */}
                <div className="card-content flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-white text-sm leading-tight pt-5">{cert.title}</h3>
                    <p className="text-green-400 text-xs">{cert.issuer}</p>
                    <span className="inline-flex items-center gap-1 text-green-400 group-hover:text-green-300 transition-colors text-xs">
                      <ExternalLink className="h-3 w-3" />
                      View
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}