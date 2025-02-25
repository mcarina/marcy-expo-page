declare interface FilterProps {
    filter: FilterType;
    setFilter: (filter: FilterType) => void;
}

declare interface Project {
    id: string;
    name: string;
    description: string; // Adicionando description ao tipo
    longDescription?: string;
    tech: string[];
    type: "frontend" | "backend" | "fullstack" | "DevOps" | "Utilitários e Jogos";
    status: "completed" | "in-progress" | "planned";
    demoUrl?: string; // Se for opcional
    githubUrl: string;
    features?: string[]; // Se for opcional
    challenges?: string[]; // Se for opcional
};