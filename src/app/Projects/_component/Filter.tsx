import { Folder, Code2, FileCode2, Container, Gamepad2 } from "lucide-react"

const Filter = ({ filter, setFilter }: FilterProps) => {
  return (
        <div className="mb-8 grid grid-cols-2 gap-2 sm:flex sm:gap-4 sm:flex-wrap">
            <button
                onClick={() => setFilter("all")}
                className={`button ${filter === "all" ? "bg-default" : "bg-outline"}`}
            >
                <Folder className="mr-2 h-6 w-4" />
                todos
            </button>
            <button
                onClick={() => setFilter("frontend")}
                className={`button ${filter === "frontend" ? "bg-default" : "bg-outline"}`}
            >
                <Code2 className="mr-2 h-6 w-4" />
                frontend
            </button>
            <button
                onClick={() => setFilter("backend")}
                className={`button ${filter === "backend" ? "bg-default" : "bg-outline"}`}
            >
                <FileCode2 className="mr-2 h-5 w-4" />
                backend
            </button>
            <button
                onClick={() => setFilter("DevOps")}
                className={`button ${filter === "DevOps" ? "bg-default" : "bg-outline"}`}
            >
                <Container className="mr-2 h-6 w-4" />
                DevOps
            </button>
            <button
                onClick={() => setFilter("Utilitários e Jogos")}
                className={`button ${filter === "Utilitários e Jogos" ? "bg-default" : "bg-outline"}`}
            >
                <Gamepad2 className="mr-2 h-6 w-4" />
                Utilitários e Jogos
            </button>
        </div>

  )
}

export default Filter