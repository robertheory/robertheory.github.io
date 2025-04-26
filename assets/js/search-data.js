// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "Sobre",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-livros",
          title: "Livros",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projetos",
          title: "Projetos",
          description: "Projetos pessoais e que tive participação.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositórios",
          title: "Repositórios",
          description: "Projetos de destaque no meu github",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-currículo",
          title: "Currículo",
          description: "Experiência profissional, formação acadêmica e habilidades técnicas",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-simplificando-indexeddb",
      
        title: "Simplificando IndexedDB",
      
      description: "Aprenda a usar IndexedDB de forma simples e prática",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/simplificando-indexed-db/";
        
      },
    },{id: "post-sistemas-numéricos-na-computação-introdução-e-binário",
      
        title: "Sistemas Numéricos na Computação - Introdução e Binário",
      
      description: "Neste post, vamos explorar os sistemas numéricos na computação, com foco no sistema binário.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/sistemas-numericos-computacao/";
        
      },
    },{id: "post-redux-101-gerenciadores-de-estados-simplificados",
      
        title: "Redux 101 - gerenciadores de estados simplificados",
      
      description: "Aprenda de forma simples e prática como usar Redux para gerenciar estados complexos em aplicações ReactJS.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/redux-101/";
        
      },
    },{id: "post-solid-no-frontend",
      
        title: "SOLID no Frontend",
      
      description: "Como usar os princípios SOLID no frontend para criar aplicações escaláveis e de fácil manutenção.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/solid-no-frontend/";
        
      },
    },{id: "books-entendendo-algoritmos",
          title: 'Entendendo Algoritmos',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/entendendo_algoritmos/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-asteroids-arena",
          title: 'Asteroids Arena',
          description: "Um jogo em tempo real, competitivo, multiplayer, onde os jogadores controlam naves espaciais e competem uns contra os outros em um campo.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/asteroids-arena/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%74%61%74%6F@%72%6F%62%65%72%74%68%65%6F%72%79.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/robertheory", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/robertheory", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/robertheory", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@robertheory", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://dev.to/robertheory", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
