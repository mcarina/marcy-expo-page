"use client"

import { useState } from 'react';
import { motion } from "framer-motion"
import Link from 'next/link'
import { projects } from '@/app/Projects/_component';
import { Folder } from "lucide-react"
import Filter from '@/app/Projects/_component/Filter';

export default function CardProjects() {
const [filter, setFilter] = useState<"all" | "frontend" | "backend" | "fullstack">("all")
const filteredProjects = projects.filter((project) => (filter === "all" ? true : project.type === filter))

  return (
    <section className="m-8 p-8">

            <div className="border p-4 mb-8">
                <p className="p-projects">
                        {`Total de projetos: ${filteredProjects.length} `}
                </p>
                <p className="p-projects">
                    {`Tipo: ${filter === "all" ? "todos" : filter}`}
                </p>
            </div>

            <Filter filter={filter} setFilter={setFilter}/>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-1 max-w-1xl mx-auto"
            >
            {filteredProjects.map((project)=>(
                <div key={project.id} className="card-project-containers">
                    <Link href={`/Projects/${project.id}`}>
                        <pre>
                            <div key={project.id}>
                                <div className="flex">
                                <Folder className="mr-2 h-8 w-6 text-primary" />
                                
                                <h3>{project.name}</h3>

                                </div>
                                <div className="space-y-2">
                                    <p>{project.description}</p>
                                    <p>
                                        <strong>Tech Stack: {project.tech.join(", ")}</strong>
                                    </p>
                                </div>
                            </div>
                        </pre>
                    </Link>
                </div>

            ))}
        
            </motion.div>

    </section>
  )
}