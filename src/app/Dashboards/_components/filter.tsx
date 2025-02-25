import { BarChart, LineChart, Activity } from "lucide-react"


const FilterDash = ({ filter, setFilter }: FilterProps) => {
  return (
        <div className="mb-6 flex gap-2">
            <button
                onClick={() => setFilter("all")}
                className={`button ${filter === "all" ? "bg-default" : "bg-outline"}`}
            >
                <BarChart className="mr-2 h-6 w-4" />
                todos
            </button>
            <button
                onClick={() => setFilter("frontend")}
                className={`button ${filter === "frontend" ? "bg-default" : "bg-outline"}`}
            >
                <LineChart className="mr-2 h-6 w-4" />
                Python
            </button>
            <button
                onClick={() => setFilter("backend")}
                className={`button ${filter === "backend" ? "bg-default" : "bg-outline"}`}
            >
                <LineChart className="mr-2 h-5 w-4" />
                pb
            </button>
            <button
                onClick={() => setFilter("DevOps")}
                className={`button ${filter === "DevOps" ? "bg-default" : "bg-outline"}`}
            >
                <Activity className="mr-2 h-6 w-4" />
                ls
            </button>

        </div>

    )
}

export default FilterDash