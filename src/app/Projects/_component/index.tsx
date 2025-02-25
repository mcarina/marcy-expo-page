export const projects: Project[] = [
    {
        id: "1",
        name: "Receita-Next-app",
        description: "App de Receitas, com next.js e docker container.",
        tech: ["Next.js", "Docker", "TypeScript"],
        type: "frontend",
        status: "in-progress",
    //   demoUrl: "https://demo-ecommerce.example.com",
        githubUrl: "https://github.com/mcarina/Receita-Next-app",
        longDescription: `Este projeto foi desenvolvido com o objetivo de estudar e praticar o Next.js 14,
        explorando suas melhores práticas e recursos mais modernos. A estrutura foi cuidadosamente planejada 
        para ser eficiente, rápida e bem organizada. Codígo Limpo`,
        features: [
        "Cadastro e autenticação de usuários",
        "Read e Create de receitas",
        "Sistema de busca",
        "Containerização com Docker",
        ],
        challenges: [
        "Componentização limpa e reutilizavel",
        ],
    },
    {
        id: "2",
        name: "Boole-Bots-Pygames",
        description: "Boole-Bots-Pygames Marcy's version.",
        tech: ["Python", "Pygames"],
        type: "Utilitários e Jogos",
        status: "in-progress",
        //   demoUrl: "https://tasks.example.com",
        githubUrl: "https://github.com/mcarina/Boole-Bots-Pygames",
        longDescription: `Boole Bots é um jogo baseado em lógica booleana, onde bots se movem aleatoriamente 
        por uma arena e colidem entre si. A cada colisão, uma operação booleana (AND, OR, NOT) é aplicada para 
        determinar o vencedor. O jogo ajuda a entender a lógica booleana de forma divertida e interativa.`,
        features: [
        "Classificação de pontuação",
        "Contagem de vitórias e perdas",
        "O usuário pode pausar o jogo",
        "O usuário pode adicionar um nome ao seu bot",
        ],
        challenges: [
        "Aprender a mexer com um novo tipo de codagem, totalmente diferente de programação web",
        ],
    },
    {
        id: "3",
        name: "Calculadora Tkinter",
        description: "Calculadora com Tkinter 2025.",
        tech: ["Python", "Tkinter"],
        type: "Utilitários e Jogos",
        status: "completed",
        githubUrl: "https://github.com/mcarina/Calculadora-com-Tkinter",
        longDescription: `Calculadora simples feita com Python e Tkinter, criada para fins de estudo.`,
        features: [
        "Operações basicas (+, -, x, /)",
        ],
        challenges: [
        "Desenvolvido para estudos fora do mundo web developer",
        ],
    },
    {
        id: "4",
        name: "Receitas-Backend",
        description: "Com Laravel 11 para a aplicação Receitas-Next-App.",
        tech: ["Laravel", "swagger", "Docker", "Nginx", "PostgreSql"],
        type: "backend",
        status: "in-progress",
        githubUrl: "https://github.com/mcarina/Receitas-Next-Backend-Laravel",
        longDescription: `Este projeto é uma API desenvolvida com Laravel 11, 
        focada em um CRUD (Create, Read, Update, Delete). Ele tem como objetivo 
        demonstrar minhas habilidades com o Laravel e o desenvolvimento de APIs RESTful.
        Nem todas as funcionalidades desse backend existe no frontend (Receitas-Next-App)`,
        features: [
        "CRUD completo de usuario",
        "CRUD completo de receitas",
        "Metodo 'salvar' receita",
        ],
        challenges: [
        "O grande dessafio desse projeto foi desenhar uma tabela para o metodo 'salvar', como desenvolvi sozinha, não foi uma tarefa facil",
        ],
    },
    {
    id: "5",
    name: "Nextjs-Docker",
    description: "iniciando Next.js com Docker container para desenvolvimento dev e produção.",
    tech: ["Dockerfile", "docker-compose"],
    type: "DevOps",
    status: "completed",
    githubUrl: "https://github.com/mcarina/Nextjs-Docker-Container",
    longDescription: `Desenvolvido para iniciar meus projetos em next.js, sem a necessidade de fazer todo instalação no meu pc`,
    features: [
    "dev.Dockerfile",
    "prod.Dockerfile",
    ],
    challenges: [
    "Criar um dockerfile desse projeto não foi facil, atá 2024, procurar conteudo sobre docker do next.js é excasso, procurar o que cada linha deve ter para funcionar o dockerfile, e ainda sim, descobrir que o docker de produção é diferente do docker de desenvolvimento",
    ],
    },
    {
    id: "6",
    name: "Flask-Restx-Crud",
    description: "Crud com flask.",
    tech: ["Python", "flask","gunicorn", "docker", "swagger", "PostgreSql"],
    type: "backend",
    status: "completed",
    githubUrl: "https://github.com/mcarina/Flask-Restx-Crud",
    longDescription: `Este projeto implementa uma API CRUD utilizando Flask Restx, com 
    suporte a login e autenticação. Ele é empacotado em um contêiner Docker e possui 
    documentação gerada pelo Swagger. O projeto foi desenvolvido com Python 3.11 e utiliza 
    Flask-Migrate para gerenciamento de migrações de banco de dados postgres.`,
    features: [
    "CRUD completo de usuario",
    ],
    challenges: [
    "Desenvolvi esse crud para estudos e para poder desenvolver minhas habilidades no trabalho, criar-lo do zero com o migrate foi um desafio e tanto para uma dev iniciante",
    ],
    },
    {
    id: "7",
    name: "Django-Rest-full",
    description: "Crud com django rest framewokr.",
    tech: ["Python", "Django", "PostgreSql"],
    type: "backend",
    status: "completed",
    githubUrl: "https://github.com/mcarina/Django-Rest-Framework-Crud",
    longDescription: `Este é um projeto que demonstra a funcionalidade de um CRUD (Create, Read, Update, Delete) 
    implementado em Django version 5.`,
    features: [
    "CRUD completo de usuario",
    ],
    challenges: [
    "Aprender um novo framework não é facil, ainda mais sem um orientador, esse projeto foi o inicio de um novo caminho que posso optar escolher no meu futuro",
    ],
    },
    {
    id: "8",
    name: "Nodejs-e-express",
    description: "tudo que aprendi sobre node e express basico.",
    tech: ["Node.js", "Express", "MongoDb"],
    type: "backend",
    status: "planned",
    githubUrl: "https://github.com/mcarina/Nodejs-e-express",
    },
]