declare interface FilterProps {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
}

declare interface Project {
    id: string;
    name: string;
    status: "completed" | "in-progress" | "planned";
    longDescription: string;
    tech?: string[];
    features?: string[];
    challenges?: string[];
    demoUrl: string;
    githubUrl: string;
}