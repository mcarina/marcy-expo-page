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
    // {
    // id: "6",
    // name: "Flask-Restx-Crud",
    // description: "Crud com flask.",
    // tech: ["Python", "flask","gunicorn", "docker", "swagger", "PostgreSql"],
    // type: "backend",
    // status: "completed",
    // githubUrl: "https://github.com/mcarina/Flask-Restx-Crud",
    // longDescription: `Este projeto implementa uma API CRUD utilizando Flask Restx, com 
    // suporte a login e autenticação. Ele é empacotado em um contêiner Docker e possui 
    // documentação gerada pelo Swagger. O projeto foi desenvolvido com Python 3.11 e utiliza 
    // Flask-Migrate para gerenciamento de migrações de banco de dados postgres.`,
    // features: [
    // "CRUD completo de usuario",
    // ],
    // challenges: [
    // "Desenvolvi esse crud para estudos e para poder desenvolver minhas habilidades no trabalho, criar-lo do zero com o migrate foi um desafio e tanto para uma dev iniciante",
    // ],
    // },
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
    {
    id: "9",
    name: "docker c# webApi",
    description: " docker para c# webApi ",
    tech: ["Docker", "C#"],
    type: "DevOps",
    status: "completed",
    githubUrl: "https://github.com/mcarina/docker-c-sharp-webApi.git",
    longDescription: `Docker desenvolvido para c# webApi, em produçao`,
    features: [
    "Containerização de uma aplicação C# WebAPI com Docker",
    "Configuração de Dockerfile otimizado para build;",
    "Uso de docker-compose para orquestração local.",
    "Fácil portabilidade e reprodutibilidade do ambiente",
    ],
    challenges: [
    "Aprender a configurar corretamente o Dockerfile para aplicações C#.",
    "Ajustar dependências e compatibilidade entre SDK e runtime do .NET.",
    ],
    },
    {
    id: "10",
    name: "Web Scraper Selenium",
    description: "como o navegador padrao google/chromer, um campo de buscar e retorno de sites com o resultado da pesquisa ",
    tech: ["Python", "Selenium", "Flask"],
    type: "Utilitários e Jogos",
    status: "completed",
    githubUrl: "https://github.com/mcarina/web-scraper-selenium.git",
    longDescription: `
    O web scraping, ou "raspagem" de dados, é uma técnica que permite a coleta automatizada de informações diretamente de sites. 
    Ele pode ser utilizado para diversas finalidades, como comparar preços, extrair dados de pesquisas ou monitorar tendências.`,
    features: [
    "Busca automatizada no Google/Chrome usando Selenium.",
    "Retorno de links de sites relacionados à pesquisa.",
    "Interface simples com campo de busca via Flask.",
    "Suporte a páginas dinâmicas carregadas com JavaScript."
    ],
    challenges: [
    "Tratar o carregamento dinâmico de conteúdo em sites diferentes.",
    "Gerenciar esperas implícitas e explícitas para evitar erros na coleta.",
    "Lidar com possíveis bloqueios ou captchas durante a automação."
    ],
    },
    {
    id: "11",
    name: "Java Crud",
    description: "Projeto Jornada Extensionista - Faculdade Marta Falcão",
    tech: ["Java", "MySql"],
    type: "backend",
    status: "completed",
    githubUrl: "https://github.com/mcarina/Java-Puro-Crud.git",
    longDescription: `Este projeto foi desenvolvido no programa Jornada Extensionista da 
    Faculdade Marta Falcão e consiste em uma aplicação em Java puro integrada ao MySQL. 
    O sistema implementa operações CRUD (Create, Read, Update, Delete) para gerenciamento 
    de usuários, permitindo cadastro, listagem, atualização e exclusão de registros. 
    O objetivo principal foi praticar a conexão entre Java e banco de dados, 
    estruturando consultas SQL e construindo uma solução funcional de administração de usuários.`,
    features: [
    "Implementação completa das operações CRUD (Create, Read, Update, Delete).",
    "Cadastro e gerenciamento de usuários em banco MySQL.",
    "Estrutura em Java puro, sem frameworks adicionais."
    ],
    challenges: [
    "Configuração da conexão entre Java e MySQL.",
    "Implementação manual do CRUD sem o uso de ORM",
    "Organização do código para manter clareza e escalabilidade.",
    "Aprendizado prático no desenvolvimento de sistemas acadêmicos com Java puro."
    ],
    },
    {
    id: "12",
    name: "Laravel 11 Crud",
    description: "Api crud elaborado com Laravel 11, com Docker Container e Swagger",
    tech: ["Docker", "Php", "Laravel", "Swagger", "Postgres"],
    type: "backend",
    status: "completed",
    githubUrl: "https://github.com/mcarina/Crud-com-Laravel11.git",
    longDescription: `Este projeto é uma API desenvolvida com Laravel 11, 
    focada em um CRUD (Create, Read, Update, Delete). Ele tem como objetivo demonstrar minhas habilidades com o Laravel e o 
    desenvolvimento de APIs RESTful. O foco é na simplicidade e nas operações CRUD`,
    features: [
    "Implementação completa das operações CRUD (Create, Read, Update, Delete).",
    "Cadastro e gerenciamento de usuários em banco PostgreSQL.",
    "Integração do Swagger para documentar e testar a API."
    ],
    challenges: [
    "Garantir boas práticas no desenvolvimento de uma API RESTful."
    ],
    },
    {
    id: "13",
    name: "WebApi com C# + Angular.js",
    description: "Api desenvolvida com c# e cocumentado com swagger com integraçao no frontend Angular.js",
    tech: ["Docker", "C#", "Angular.js", "Swagger", "Postgres"],
    type: "backend",
    status: "completed",
    githubUrl: "https://github.com/mcarina/webApi-c-sharp-angularjs.git",
    longDescription: `Este projeto consiste em uma aplicação completa com backend em C# (Web API) e frontend 
    em Angular.js. A API foi documentada com Swagger, possui autenticação via JWT e integra-se ao banco PostgreSQL. 
    O sistema é totalmente containerizado com Docker, permitindo fácil configuração e execução em diferentes ambientes. 
    O frontend se comunica diretamente com a API, possibilitando a gestão de usuários e rotas protegidas.`,
    features: [
    "Implementação de backend em C# com Web API.",
    "Integração de frontend em Angular.js com consumo da API.",
    "Autenticação via JWT token.",
    "Documentação da API utilizando Swagger.",
    "Configuração de banco de dados PostgreSQL.",
    "Execução simplificada com Docker e Docker Compose."
    ],
    challenges: [
    "Configuração do ambiente Docker para rodar frontend e backend integrados.",
    "Integração entre Angular.js e a API em C# garantindo comunicação estável.",
    "Implementação de autenticação JWT no backend e consumo no frontend.",
    "Documentação detalhada da API utilizando Swagger.",
    "Gerenciamento de variáveis de ambiente (.env) e conexão com o banco PostgreSQL."
    ],
    },
]