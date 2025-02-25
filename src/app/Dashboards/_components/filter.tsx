import { BarChart, LineChart, Activity } from "lucide-react"


const FilterDash = ({ filter, setFilter }) => {
  return (
        <div className="mb-6 flex gap-2">
            <button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className="button"
            >
                <BarChart className="mr-2 h-6 w-4" />
                todos
            </button>
            <button
                variant={filter === "frontend" ? "default" : "outline"}
                onClick={() => setFilter("frontend")}
                className="button"
            >
                <LineChart className="mr-2 h-6 w-4" />
                Python
            </button>
            <button
                variant={filter === "backend" ? "default" : "outline"}
                onClick={() => setFilter("backend")}
                className="button"
            >
                <LineChart className="mr-2 h-5 w-4" />
                pb
            </button>
            <button
                variant={filter === "DevOps" ? "default" : "outline"}
                onClick={() => setFilter("DevOps")}
                className="button"
            >
                <Activity className="mr-2 h-6 w-4" />
                ls
            </button>

        </div>

    )
}

export default FilterDash