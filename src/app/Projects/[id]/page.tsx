"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { projects } from "../_component";

const PageId = () => {
    const params = useParams();
    const projectId = params.id;
    const project = projects.find((p) => p.id === projectId);

    const getStatusColor = (status: Project["status"]) => {
      switch (status) {
        case "completed":
          return "text-green-500"
        case "in-progress":
          return "text-yellow-500"
        case "planned":
          return "text-blue-500"
        default:
          return "text-muted-foreground"
      }
    }

    
  return (
    <section className="container">
      <div className="border p-8">
        <main>
          <div className="flex">
            <h1>
              {project.name}
            </h1>
            <span className={`ml-auto ${getStatusColor(project.status)}`}>{project.status}</span>
          </div>
          <p>{project.longDescription}</p>
        </main>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 ml-6 space-y-4">

        {project.tech && (
            <div className="mt-2">
              <h3 className="text-primary mb-2">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <p key={tech} variant="outline" className="badge">
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          )}

          {project.features && (
            <div>
              <h3 className="text-primary mb-2">Features:</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.challenges && (
            <div>
              <h3 className="text-primary mb-2">Desafios:</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {project.challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}


          <div className="flex gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <ExternalLink className="mr-1 h-4 w-4" /> Demo
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                <Github className="mr-1 h-4 w-4" /> GitHub
              </a>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
export default PageId;