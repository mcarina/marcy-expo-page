import { Folder, Code2, FileCode2, Container, Gamepad2 } from "lucide-react"

const Filter = ({ filter, setFilter }) => {
  return (
        <div className="mb-6 flex gap-2">
            <button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className="button"
            >
                <Folder className="mr-2 h-6 w-4" />
                todos
            </button>
            <button
                variant={filter === "frontend" ? "default" : "outline"}
                onClick={() => setFilter("frontend")}
                className="button"
            >
                <Code2 className="mr-2 h-6 w-4" />
                frontend
            </button>
            <button
                variant={filter === "backend" ? "default" : "outline"}
                onClick={() => setFilter("backend")}
                className="button"
            >
                <FileCode2 className="mr-2 h-5 w-4" />
                backend
            </button>
            <button
                variant={filter === "DevOps" ? "default" : "outline"}
                onClick={() => setFilter("DevOps")}
                className="button"
            >
                <Container className="mr-2 h-6 w-4" />
                DevOps
            </button>
            <button
                variant={filter === "Utilitários e Jogos" ? "default" : "outline"}
                onClick={() => setFilter("Utilitários e Jogos")}
                className="button"
            >
                <Gamepad2 className="mr-2 h-6 w-4" />
                Utilitários e Jogos
            </button>
        </div>

  )
}

export default Filter