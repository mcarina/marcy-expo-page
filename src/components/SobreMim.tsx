"use client"

import Link from 'next/link'
import { useState } from "react"
import { commands } from "@/app/Sobre-Mim/_component"

export default function SobreMim() {
    const [commandHistory, setCommandHistory] = useState<Array<{ command: string; output: string }>>([
        { command: "help", output: commands.help },
    ])

    const [currentCommand, setCurrentCommand] = useState("")

    const executeCommand = (cmd: string) => {
        const command = cmd.toLowerCase().trim()
        if (command === "cls") {setCommandHistory([]) 
        return}
    
        const output = commands[command as keyof typeof commands] || 'Comando não reconhecido. Digite "help" para ver comandos disponíveis.'
    
        setCommandHistory((prev) => [...prev, { command, output }])
        setCurrentCommand("")
    }


  return (
    <section className="container">
        <div className="border p-4 mb-8">
        <p className="text-muted-foreground mt-2 text-center">
            +-------------+  marcyexpo_terminal v1.0.0  +-------------+
        </p>
        </div>

        <div className="about-container2">
            <div className="space-y-4">

                {commandHistory.map((entry, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-primary">&gt;</span>
                            <span>{entry.command}</span>
                        </div>
                        <pre>{entry.output}</pre>
                    </div>
                    ))}
                    
                    <div className="flex items-center gap-2">
                        <span className="text-primary">&gt;</span>
                        <input
                            type="text"
                            value={currentCommand}
                            onChange={(e) => setCurrentCommand(e.target.value)}
                            onKeyDown={(e) => {
                            if (e.key === "Enter" && currentCommand) {
                                executeCommand(currentCommand)
                            }
                            }}
                            className="bg-transparent border-none outline-none flex-1 focus:ring-0"
                            placeholder="Digite um dos comandos acima para saber mais sobre mim ou digite 'help'"
                            spellCheck="false"
                        />
                    </div>
            </div>
        </div>

        <footer className="footer">
        <Link href="https://github.com/mcarina" className=" flex justify-center" target="_blank" rel="noopener noreferrer">
            <pre> {`/* visite meus projetos no github */`} </pre>
        </Link>
        </footer>
    </section>
)
}
