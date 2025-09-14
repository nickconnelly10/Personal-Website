import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "GitHub Actions", "Vercel", "Terraform", "Kubernetes"]
    },
    {
      category: "Medical",
      items: ["Clinical Research", "Evidence-Based Medicine", "Health Informatics", "Medical Education"]
    },
    {
      category: "Finance",
      items: ["DeFi Protocols", "Bitcoin", "Financial Modeling", "Risk Assessment"]
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "Figma", "Notion", "Slack", "Jira"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center mb-16">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            A comprehensive toolkit for building innovative solutions across technology, medicine, and finance
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gold-100 text-gold-800 text-sm font-medium rounded-full"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
