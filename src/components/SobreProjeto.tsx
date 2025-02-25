"use client"

import { useState } from 'react';
import { motion } from "framer-motion"
import { FileDown } from "lucide-react"
import { EstruturaP, aprendizados, projectReasons, RecursosF } from './_componentSP';

export const SobreProjeto = () => {
    const [openProject, setOpenProject] = useState(false)

    const toggleProject = () => {
        setOpenProject(prev => !prev);
    }
    
return (
    <>
    <button onClick={toggleProject} className="p-6 border rounded-2xl group font-mono">
        <span className="text-primary mr-2">&gt;</span>
        ~/Sobre o projetos
    </button>

    {openProject && (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >

            <div className="p-6 border rounded-2xl bg-secondary/20">
                <h2 className="flex items-center gap-2">
                    <FileDown className="w-5 h-5 text-primary" />
                    <span className="text-primary">&gt;</span> Sobre o Projeto
                </h2>

                <div className="space-y-6 text-muted-foreground">
                    <p>Este é um portfólio interativo com um tema inspirado em terminal/CMD, onde apresento
                    <br></br> 
                    meus projetos de forma dinâmica e estilizada.
                    <br></br>
                    Um projeto bem estruturado, componetizado, intuitivo, dinâmico e leve, proporcionando 
                    <br></br>
                    uma experiência fluida para os usuários.</p>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"># Com Next.js e Docker</h3>
                    <pre className="whitespace-pre-wrap">{projectReasons}</pre>
                </div>


                <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"># Aprendizados</h3>
                    <pre className="whitespace-pre-wrap">{aprendizados}</pre>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"># Recursos e Ferramentas</h3>
                    <pre className="whitespace-pre-wrap">{RecursosF}</pre>
                </div>

                <div className="space-y-2">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2"># Estrutura do Projeto</h3>
                    <pre className="p-4 border bg-card text-sm">{EstruturaP}</pre>
                </div>

                <div className="mt-8 pt-4 border-t">
                    <pre className="text-sm text-center">
                    {`/* projeto open source, pode ser usado como referência para aprender Next.js e React */`}
                    </pre>
                </div>
                </div>

            </div>

    </motion.div>

    )}

    </>
)
}
