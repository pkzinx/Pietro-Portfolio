export const navItems = [
  { key: "about", name: "About", link: "#about" },
  { key: "projects", name: "Projects", link: "#projects" },
  { key: "testimonials", name: "Testimonials", link: "#testimonials" },
  { key: "contact", name: "Contact", link: "#contact" },
] as const satisfies { key: NavKey; name: string; link: string }[];

export const i18n = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      prefix: "Transforming concepts into",
      suffixes: [
        "optimized flows.",
        "digital experiences.",
        "immersive designs.",
        "engaging screens.",
      ],
      tagline: "Dynamic Web Magic with Next.js",
      subtitle: "I'm Kaio, a full-stack developer from Brazil transforming ideas into fluid websites and apps.",
      showWork: "Show my work",
    },
    sections: {
      recent: {
        heading1: "A small selection of",
        heading2: "recent projects",
        cta: "Check Live Site",
      },
      clients: {
        heading1: "Kind words from",
        heading2: "satisfied clients",
      },
      experience: {
        heading: "My work experience",
      },
      approach: {
        heading1: "My",
        heading2: "approach",
        phase: "Phase",
        cards: [
          {
            title: "Planning & Strategy",
            des:
              "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
          },
          {
            title: "Development & Progress Update",
            des:
              "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
          },
          {
            title: "Development & Launch",
            des:
              "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
          },
        ],
      },
      footer: {
        heading:
          "Ready to take your digital presence to the next level?",
        sub:
          "Reach out to me today and let's discuss how I can help you achieve your goals.",
        button: "Let's get in touch",
        copyright: "Copyright © 2025 Kaio Pietro",
      },
      bento: {
        copyIdle: "Copy my email address",
        copyDone: "Email is Copied!",
      },
      aboutMe: {
        title: "Full‑stack developer",
        heading: "About me",
        text:
          "I'm a full‑stack developer focused on building fast, fluid web experiences with Next.js, React, and Python. I love combining design and engineering to deliver clear, well‑documented products that are easy to evolve.",
      },
      about: {
        item1Title: "I prioritize client collaboration, fostering open communication",
        item2Title: "I'm very flexible with time zone communications",
        item3Title: "My tech stack",
        item3Desc: "I constantly try to improve",
        item4Title: "Tech enthusiast with a passion for development.",
        item5Title: "Currently building a JS Animation library",
        item5Desc: "The Inside Scoop",
        item6Title: "Do you want to start a project together?",
        techLeft: ["ReactJS", "Express", "Typescript"],
        techRight: ["VueJS", "NuxtJS", "GraphQL"],
      },
      modal: {
        title: "You are leaving this site",
        message: "You will be redirected to another tab to open:",
        accept: "Accept",
        later: "Leave for later",
      },
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      testimonials: "Depoimentos",
      contact: "Contato",
    },
    hero: {
      prefix: "Transformando conceitos em",
      suffixes: [
        "fluxos otimizados.",
        "experiências digitais.",
        "designs imersivos.",
        "telas envolventes.",
      ],
      tagline: "Magia Web Dinâmica com Next.js",
      subtitle:
        "Sou o Kaio, desenvolvedor full-stack do Brasil transformando ideias em sites e apps fluidos.",
      showWork: "Mostrar meu trabalho",
    },
    sections: {
      recent: {
        heading1: "Uma pequena seleção de",
        heading2: "projetos recentes",
        cta: "Ver site ao vivo",
      },
      clients: {
        heading1: "Palavras gentis de",
        heading2: "clientes satisfeitos",
      },
      experience: {
        heading: "Minha experiência de trabalho",
      },
      approach: {
        heading1: "Minha",
        heading2: "abordagem",
        phase: "Fase",
        cards: [
          {
            title: "Planejamento & Estratégia",
            des:
              "Vamos colaborar para mapear os objetivos do site, público-alvo e funcionalidades. Discutiremos estrutura, navegação e requisitos de conteúdo.",
          },
          {
            title: "Desenvolvimento & Progresso",
            des:
              "Com o plano definido, começo o desenvolvimento. Dos rascunhos ao código final, mantenho você atualizado em cada etapa.",
          },
          {
            title: "Desenvolvimento & Lançamento",
            des:
              "É aqui que a mágica acontece! Com o design aprovado, vou traduzir tudo para código funcional, construindo seu site do zero.",
          },
        ],
      },
      footer: {
        heading:
          "Pronto para levar sua presença digital ao próximo nível?",
        sub:
          "Fale comigo hoje e vamos discutir como posso ajudar a alcançar seus objetivos.",
        button: "Entrar em contato",
        copyright: "Copyright © 2025 Kaio Pietro",
      },
      bento: {
        copyIdle: "Copiar meu e-mail",
        copyDone: "E-mail copiado!",
      },
      aboutMe: {
        title: "Desenvolvedor full‑stack",
        heading: "Sobre mim",
        text:
          "Sou desenvolvedor full‑stack focado em criar experiências web rápidas e fluidas com Next.js, React e Python. Gosto de unir design e engenharia para entregar produtos claros, bem documentados e fáceis de evoluir.",
      },
      about: {
        item1Title: "Eu priorizo a colaboração com o cliente, promovendo comunicação aberta",
        item2Title: "Sou muito flexível com comunicação entre fusos horários",
        item3Title: "Minha stack de tecnologia",
        item3Desc: "Busco melhorar constantemente",
        item4Title: "Entusiasta de tecnologia com paixão por desenvolvimento.",
        item5Title: "Atualmente construindo uma biblioteca de animações JS",
        item5Desc: "Por dentro",
        item6Title: "Quer começar um projeto comigo?",
        techLeft: ["ReactJS", "Express", "Typescript"],
        techRight: ["VueJS", "NuxtJS", "GraphQL"],
      },
      modal: {
        title: "Você está saindo do site",
        message: "Você será redirecionado para outra aba para abrir:",
        accept: "Aceito",
        later: "Deixar para depois",
      },
    },
  },
};

export type NavKey = keyof typeof i18n["en"]["nav"];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Dlux Barbearia",
    desEn:
      "Integrated platform for barbershops, unifying website, bookings, financial management, and operations in a single system.",
    desPt:
      "Plataforma integrada para barbearias, unindo site, agendamentos, gestão financeira e operações em um único sistema.",
    img: "/Dlux.png",
    iconLists: ["/re.svg", "/py.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://dluxbarbearia.shop/#home",
  },
  {
    id: 2,
    title: "Jcuts",
    desEn:
      "Professional website built to showcase the portfolio of a German editor specializing in high-performance video.",
    desPt:
      "Website profissional desenvolvido para apresentar o portfólio de um editor alemão especializado em vídeos de alta performance.",
    img: "/Jcuts.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://jcuts.io/",
  },
  {
    id: 3,
    title: "Postaê Web",
    desEn:
      "Automated Python system for managing, producing, and efficiently publishing journalistic news.",
    desPt:
      "Sistema automatizado em Python para gestão, produção e publicação eficiente de notícias jornalísticas.",
    img: "/postaeweb.png",
    iconLists: ["/re.svg", "/py.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://www.postaeweb.com/",
  },
  {
    id: 4,
    title: "Magic Portfolio",
    desEn:
      "Complete solution for creating and managing professional portfolios, built for the U.S. market.",
    desPt:
      "Solução completa para criação e gerenciamento de portfólios profissionais, desenvolvida para o mercado norte-americano.",
    img: "/magic.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://magic-portfolio.com/",
  },
];

export const testimonials = [
  {
    name: "Alafy Lima",
    title: "Fundador da Dlux Barbearia",
    quotePt:
      "O Kaio entregou uma plataforma moderna para a barbearia, com agendamentos e finanças integrados. O fluxo ficou simples para a equipe e para os clientes.",
    quoteEn:
      "Kaio delivered a modern barbershop platform with integrated bookings and finances. The flow is simple for our staff and clients.",
    image: "/alafy.JPEG",
  },
  {
    name: "Justin Rudi",
    title: "Video Editor, Jcuts",
    quotePt:
      "O site ficou rápido, bem organizado e mostrou meu trabalho de forma profissional. A comunicação foi sempre clara e objetiva.",
    quoteEn:
      "The website is fast, well-structured, and presents my work professionally. Communication was clear and on point.",
    image: "/Justin.png",
  },
  {
    name: "Redação Postaê Web",
    title: "Equipe de Produto",
    quotePt:
      "Automatizamos a produção e publicação de notícias com Python e IA. Economizamos horas e mantemos qualidade.",
    quoteEn:
      "We automated news production and publishing with Python and AI. It saves hours while keeping quality high.",
    image: "/redacao.png",
  },
  {
    name: "Mara Collins",
    title: "Product Lead, Magic Portfolio",
    quotePt:
      "Lançamos portfólios em minutos com ótima performance e UX polida. Entrega consistente e atenção aos detalhes.",
    quoteEn:
      "We launch portfolios in minutes with great performance and polished UX. Consistent delivery and attention to detail.",
    image: "/mara.png",
  },
  {
    name: "James Walker",
    title: "Head de Operações",
    quotePt:
      "Domínio técnico sólido em React/Next e Python. Entrega confiável e documentação clara para o time.",
    quoteEn:
      "Strong technical command in React/Next and Python. Reliable delivery and clear documentation for the team.",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    titlePt: "Estagiário de Frontend",
    descPt: "Auxiliou no desenvolvimento de uma plataforma web com React.js, aprimorando a interatividade.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    titlePt: "Desenvolvedor de Apps Mobile - JSM Tech",
    descPt: "Concebeu e desenvolveu app móvel para iOS e Android usando React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    titlePt: "Projeto Freelance de App",
    descPt: "Liderou o desenvolvimento de um aplicativo móvel, do conceito ao lançamento nas lojas.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    titlePt: "Líder de Frontend",
    descPt: "Desenvolveu e manteve funcionalidades voltadas ao usuário com tecnologias modernas de frontend.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/pkzinx",
  },
  {
    id: 2,
    img: "/insta.svg",
    href: "https://instagram.com/kaio.pietroxx",
  },
  {
    id: 3,
    img: "/wha.svg",
    href: "https://wa.me/5562994584520",
  },
];
