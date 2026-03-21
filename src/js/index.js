// MENU LANGUAGE
const translations = {
  pt: {
    home: "Home",
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",

    heroGreeting: "Olá! Eu sou o",
    heroRole: 'Desenvolvedor <strong>Full-Stack</strong> | Dados & <strong>Automação de IA</strong>',
    heroTagline:
      'Transformando ideias em soluções, dados em decisões e <strong>processos em automações inteligentes</strong>',

    aboutTitle: 'Sobre <strong>Mim</strong>',
    aboutSubtitle: "Olá, pode me chamar de <strong>Ryan</strong>.",
    aboutText: `
Sou <strong>Data Analyst</strong> e <strong>Desenvolvedor Full Stack</strong> com foco em resolver problemas reais através de tecnologia.
<br /><br />
Mais do que apenas desenvolver interfaces, meu objetivo é construir soluções completas: aplicações web bem estruturadas, processos automatizados e sistemas orientados por dados que realmente gerem valor.
<br /><br />
Atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong>, mas minha evolução vem principalmente da prática — criando projetos, enfrentando problemas reais e buscando constantemente formas mais eficientes de resolver cada desafio.
<br /><br />
Minha stack principal inclui <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong> e <strong>SQL</strong>. Também atuo com automação e análise de dados utilizando <strong>n8n</strong>, <strong>Excel</strong> e <strong>Power BI</strong>, sempre com foco em eliminar tarefas repetitivas e transformar dados em decisões claras.
<br /><br />
Minha experiência profissional como Analista Técnico de Engenharia em uma empresa internacional reforçou minha capacidade de lidar com pressão, me comunicar com diferentes áreas e tomar decisões baseadas em contexto real.
<br /><br />
Costumo dizer que o que ainda não sei, me esforço ao máximo para aprender o mais rápido possível.
`,

    skillsTitle: 'Minhas <strong>Habilidades</strong>',
    dataAnalysis: "Análise de Dados",

    projectsTitle: 'Últimos <strong>Projetos</strong>',

    mentalHealthDesc: `
Aplicação web responsiva desenvolvida para oferecer recursos de apoio emocional e orientação personalizada.
Construída com <strong>HTML, CSS e JavaScript</strong>, prioriza acessibilidade e experiência do usuário.
`,

    pokedexDesc: `
Pokédex interativa desenvolvida com <strong>React</strong>, incluindo rotas dinâmicas e integração com API externa.
Demonstra gerenciamento de estado e organização de componentes.
`,

    expocarDesc: `
Website de apresentação de carros de alta performance desenvolvido com <strong>HTML, CSS e JavaScript</strong>.
Implementa troca dinâmica de conteúdo e interações de interface.
`,

    snakeDesc: `
Jogo em navegador desenvolvido com <strong>JavaScript</strong>, incluindo persistência de pontuação via localStorage.
Demonstra estruturação lógica e manipulação do DOM.
`,

    githubApiDesc: `
Aplicação web que consome a API do GitHub para exibir dados de perfil e repositórios.
Desenvolvida com requisições <strong>fetch</strong> e renderização dinâmica.
`,

    devFriendsDesc: `
Projeto interativo inspirado na série Friends, recriando personagens como desenvolvedores.
Construído com <strong>HTML, CSS e JavaScript</strong>, com manipulação de eventos.
`,

    downloadCV: "Download CV",
    codeBtn: "Código",
    projectBtn: "Projeto",
    contactTitle: "Contate<strong>-me!</strong>",
    fullName: "Nome completo",
    emailAddress: "Endereço de email",
    phoneNumber: "Número de celular",
    subject: "Assunto",
    message: "Sua mensagem",
    sendMessage: "Enviar mensagem",

    chatTyping: "Suzy está digitando",

    ai: "IA",
    aiTitle: 'Converse com minha <strong>IA</strong>',
    aiBadge: "Assistente inteligente integrada ao portfólio",
    aiHeading: 'Conheça a <strong>Suzy</strong>, minha assistente virtual',
    aiDescription1: 'A Suzy foi integrada ao meu portfólio para responder perguntas em tempo real sobre <strong>minha experiência</strong>, <strong>tecnologias</strong>, <strong>projetos</strong> e <strong>formas de contato</strong>.',
    aiDescription2: 'Ela utiliza uma arquitetura com <strong>frontend em JavaScript</strong>, <strong>workflow no n8n</strong>, <strong>OpenAI</strong>, <strong>memória de conversa</strong> e recuperação de contexto do próprio site.',
    aiOpenChat: "Abrir chat",
    aiViewProjects: "Ver projetos",
    aiCardTitle: "Suzy AI",
    aiCardLabel: "Exemplos do que você pode perguntar:",
    aiQuestion1: "Quem é o Ryan?",
    aiQuestion2: "Quais tecnologias ele usa?",
    aiQuestion3: "Quais são os principais projetos?",
    aiQuestion4: "Como posso entrar em contato?",

    chatWelcome:
      "Olá, eu sou a Suzy, assistente de IA do Ryan. Você pode me perguntar sobre projetos, tecnologias, experiência e formas de contato.",
  },

  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",

    heroGreeting: "Hi! I am",
    heroRole: '<strong>Full-Stack</strong> Developer | Data & <strong>AI Automation</strong>',
    heroTagline: 'Transforming ideas into solutions, data into decisions and <strong>processes into intelligent automations</strong>',

    aboutTitle: '<strong>About</strong> Me',
    aboutSubtitle: "Hi, you can call me <strong>Ryan</strong>.",
    aboutText: `
I am a <strong>Data Analyst</strong> and <strong>Full Stack Developer</strong> focused on solving real-world problems through technology.
<br /><br />
More than just building interfaces, my goal is to create complete solutions: well-structured web applications, automated processes and data-driven systems that truly generate value.
<br /><br />
I am currently studying <strong>Systems Analysis and Development</strong>, but my growth comes mainly from practice — building projects, facing real problems and constantly seeking more efficient ways to solve each challenge.
<br /><br />
My main stack includes <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong> and <strong>SQL</strong>. I also work with automation and data analysis using <strong>n8n</strong>, <strong>Excel</strong> and <strong>Power BI</strong>, always focused on eliminating repetitive tasks and turning data into clear decisions.
<br /><br />
My professional experience as an Engineering Technical Analyst in an international company strengthened my ability to handle pressure, communicate with different teams and make decisions based on real-world context.
<br /><br />
I usually say that what I don’t know yet, I make my best effort to learn as quickly as possible.
`,

    skillsTitle: 'My <strong>Skills</strong>',
    dataAnalysis: "Data Analysis",

    projectsTitle: 'Latest <strong>Projects</strong>',

    mentalHealthDesc: `
A responsive web application designed to provide emotional support resources.
Built with <strong>HTML, CSS, and JavaScript</strong>, focusing on accessibility and user experience.
`,

    pokedexDesc: `
An interactive Pokédex built with <strong>React</strong>, featuring dynamic routing and API integration.
Demonstrates state management and component architecture.
`,

    expocarDesc: `
A high-performance car showcase website developed with <strong>HTML, CSS, and JavaScript</strong>.
Implements dynamic content switching and interactive UI elements.
`,

    snakeDesc: `
A browser-based game developed using <strong>JavaScript</strong>, featuring score persistence with localStorage.
Demonstrates logic structuring and DOM manipulation.
`,

    githubApiDesc: `
A web application that consumes the GitHub API to display profile data and repositories.
Built using <strong>fetch</strong> and dynamic content rendering.
`,

    devFriendsDesc: `
An interactive project inspired by the TV series Friends, reimagining characters as developers.
Built with <strong>HTML, CSS, and JavaScript</strong>.
`,

    downloadCV: "Download CV",
    codeBtn: "Code",
    projectBtn: "Live Demo",
    contactTitle: "Contact <strong>Me!</strong>",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    subject: "Subject",
    message: "Your Message",
    sendMessage: "Send Message",

    chatTyping: "Suzy is typing",

    ai: "AI",
    aiTitle: 'Talk to my <strong>AI</strong>',
    aiBadge: "Intelligent assistant integrated into the portfolio",
    aiHeading: 'Meet <strong>Suzy</strong>, my virtual assistant',
    aiDescription1: 'Suzy was integrated into my portfolio to answer real-time questions about <strong>my experience</strong>, <strong>technologies</strong>, <strong>projects</strong> and <strong>contact information</strong>.',
    aiDescription2: 'It uses an architecture with <strong>JavaScript frontend</strong>, <strong>n8n workflow</strong>, <strong>OpenAI</strong>, <strong>conversation memory</strong> and context retrieval from the portfolio itself.',
    aiOpenChat: "Open chat",
    aiViewProjects: "View projects",
    aiCardTitle: "Suzy AI",
    aiCardLabel: "Examples of what you can ask:",
    aiQuestion1: "Who is Ryan?",
    aiQuestion2: "What technologies does he use?",
    aiQuestion3: "What are his main projects?",
    aiQuestion4: "How can I contact him?",

    chatWelcome:
      "Hi, I’m Suzy, Ryan’s AI assistant. You can ask me about projects, tech stack, experience, and contact information.",
  },

  fr: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",

    heroGreeting: "Salut ! Je suis",
    heroRole: 'Développeur <strong>Full-Stack</strong> | Données & <strong>Automatisation par IA</strong>',
    heroTagline: 'Transformer des idées en solutions, des données en décisions et des <strong>processus en automatisations intelligentes</strong>',

    aboutTitle: 'À propos de <strong>moi</strong>',
    aboutSubtitle: "Bonjour, vous pouvez m’appeler <strong>Ryan</strong>.",
    aboutText: `
Je suis <strong>Data Analyst</strong> et <strong>développeur Full Stack</strong>, avec un focus sur la résolution de problèmes réels grâce à la technologie.
<br /><br />
Au-delà du développement d’interfaces, mon objectif est de créer des solutions complètes : des applications web bien structurées, des processus automatisés et des systèmes orientés par les données qui génèrent réellement de la valeur.
<br /><br />
Je suis actuellement en formation en <strong>Analyse et Développement de Systèmes</strong>, mais ma progression vient principalement de la pratique — en construisant des projets, en faisant face à des problèmes réels et en recherchant constamment des solutions plus efficaces.
<br /><br />
Ma stack principale inclut <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong> et <strong>SQL</strong>. Je travaille également avec l’automatisation et l’analyse de données en utilisant <strong>n8n</strong>, <strong>Excel</strong> et <strong>Power BI</strong>, avec pour objectif d’éliminer les tâches répétitives et de transformer les données en décisions claires.
<br /><br />
Mon expérience professionnelle en tant qu’Analyste Technique en ingénierie dans une entreprise internationale a renforcé ma capacité à travailler sous pression, à communiquer avec différentes équipes et à prendre des décisions basées sur un contexte réel.
<br /><br />
J’ai l’habitude de dire que ce que je ne sais pas encore, je fais de mon mieux pour l’apprendre le plus rapidement possible.

`,

    skillsTitle: 'Mes <strong>Compétences</strong>',
    dataAnalysis: "Analyse de Données",

    projectsTitle: 'Derniers <strong>Projets</strong>',

    mentalHealthDesc: `
Application web responsive développée avec <strong>HTML, CSS et JavaScript</strong>.
Conçue pour offrir des ressources de soutien émotionnel.
`,

    pokedexDesc: `
Pokédex interactive développée avec <strong>React</strong> et intégration API.
`,

    expocarDesc: `
Site vitrine développé avec <strong>HTML, CSS et JavaScript</strong>.
`,

    snakeDesc: `
Jeu navigateur développé en <strong>JavaScript</strong>.
`,

    githubApiDesc: `
Application utilisant l’API GitHub avec requêtes <strong>fetch</strong>.
`,

    devFriendsDesc: `
Projet interactif inspiré de la série Friends.
`,

    downloadCV: "Télécharger CV",
    codeBtn: "Code",
    projectBtn: "Voir le Projet",
    contactTitle: "Contactez<strong>-moi !</strong>",
    fullName: "Nom complet",
    emailAddress: "Adresse e-mail",
    phoneNumber: "Numéro de téléphone",
    subject: "Sujet",
    message: "Votre message",
    sendMessage: "Envoyer le message",

    chatTyping: "Suzy est en train d’écrire",

    ai: "IA",
    aiTitle: 'Discutez avec mon <strong>IA</strong>',
    aiBadge: "Assistante intelligente intégrée au portfolio",
    aiHeading: 'Découvrez <strong>Suzy</strong>, mon assistante virtuelle',
    aiDescription1: 'Suzy a été intégrée à mon portfolio pour répondre en temps réel à des questions sur <strong>mon expérience</strong>, <strong>mes technologies</strong>, <strong>mes projets</strong> et <strong>mes contacts</strong>.',
    aiDescription2: 'Elle utilise une architecture avec <strong>frontend en JavaScript</strong>, <strong>workflow n8n</strong>, <strong>OpenAI</strong>, <strong>mémoire de conversation</strong> et récupération de contexte depuis le site lui-même.',
    aiOpenChat: "Ouvrir le chat",
    aiViewProjects: "Voir les projets",
    aiCardTitle: "Suzy AI",
    aiCardLabel: "Exemples de questions possibles :",
    aiQuestion1: "Qui est Ryan ?",
    aiQuestion2: "Quelles technologies utilise-t-il ?",
    aiQuestion3: "Quels sont ses principaux projets ?",
    aiQuestion4: "Comment puis-je le contacter ?",

    chatWelcome:
      "Bonjour, je suis Suzy, l’assistante IA de Ryan. Vous pouvez me poser des questions sur ses projets, ses technologies, son expérience et ses contacts.",
  },

  es: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",

    heroGreeting: "Hola! Soy",
    heroRole: 'Desarrollador <strong>Full-Stack</strong> | Datos & <strong>Automatización con IA</strong>',
    heroTagline: 'Transformando ideas en soluciones, datos en decisiones y <strong>procesos en automatizaciones inteligentes</strong>',

    aboutTitle: 'Sobre <strong>mí</strong>',
    aboutSubtitle: "Hola, puedes llamarme <strong>Ryan</strong>.",
    aboutText: `
Soy <strong>Data Analyst</strong> y <strong>Desarrollador Full Stack</strong>, enfocado en resolver problemas reales a través de la tecnología.
<br /><br />
Más allá de desarrollar interfaces, mi objetivo es construir soluciones completas: aplicaciones web bien estructuradas, procesos automatizados y sistemas orientados por datos que realmente generen valor.
<br /><br />
Actualmente estudio <strong>Análisis y Desarrollo de Sistemas</strong>, pero mi evolución viene principalmente de la práctica — creando proyectos, enfrentando problemas reales y buscando constantemente formas más eficientes de resolver cada desafío.
<br /><br />
Mi stack principal incluye <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong> y <strong>SQL</strong>. También trabajo con automatización y análisis de datos utilizando <strong>n8n</strong>, <strong>Excel</strong> y <strong>Power BI</strong>, siempre enfocado en eliminar tareas repetitivas y transformar datos en decisiones claras.
<br /><br />
Mi experiencia profesional como Analista Técnico de Ingeniería en una empresa internacional fortaleció mi capacidad para trabajar bajo presión, comunicarme con diferentes áreas y tomar decisiones basadas en contextos reales.
<br /><br />
Suelo decir que lo que aún no sé, me esfuerzo al máximo para aprenderlo lo más rápido posible.
`,

    skillsTitle: 'Mis <strong>Habilidades</strong>',
    dataAnalysis: "Análisis de Datos",

    projectsTitle: 'Últimos <strong>Proyectos</strong>',

    mentalHealthDesc: `
Aplicación web responsiva desarrollada con <strong>HTML, CSS y JavaScript</strong>.
`,

    pokedexDesc: `
Pokédex interactiva desarrollada con <strong>React</strong> e integración API.
`,

    expocarDesc: `
Sitio web desarrollado con <strong>HTML, CSS y JavaScript</strong>.
`,

    snakeDesc: `
Juego en navegador desarrollado con <strong>JavaScript</strong>.
`,

    githubApiDesc: `
Aplicación que consume la API de GitHub.
`,

    devFriendsDesc: `
Proyecto interactivo inspirado en la serie Friends.
`,

    downloadCV: "Descargar CV",
    codeBtn: "Código",
    projectBtn: "Ver Proyecto",
    contactTitle: "Contácta<strong>-me!</strong>",
    fullName: "Nombre completo",
    emailAddress: "Correo electrónico",
    phoneNumber: "Número de teléfono",
    subject: "Asunto",
    message: "Tu mensaje",
    sendMessage: "Enviar mensaje",

    chatTyping: "Suzy está escribiendo",

    ai: "IA",
    aiTitle: 'Habla con mi <strong>IA</strong>',
    aiBadge: "Asistente inteligente integrada al portafolio",
    aiHeading: 'Conoce a <strong>Suzy</strong>, mi asistente virtual',
    aiDescription1: 'Suzy fue integrada a mi portafolio para responder preguntas en tiempo real sobre <strong>mi experiencia</strong>, <strong>tecnologías</strong>, <strong>proyectos</strong> y <strong>formas de contacto</strong>.',
    aiDescription2: 'Utiliza una arquitectura con <strong>frontend en JavaScript</strong>, <strong>workflow en n8n</strong>, <strong>OpenAI</strong>, <strong>memoria de conversación</strong> y recuperación de contexto desde el propio sitio.',
    aiOpenChat: "Abrir chat",
    aiViewProjects: "Ver proyectos",
    aiCardTitle: "Suzy AI",
    aiCardLabel: "Ejemplos de lo que puedes preguntar:",
    aiQuestion1: "¿Quién es Ryan?",
    aiQuestion2: "¿Qué tecnologías usa?",
    aiQuestion3: "¿Cuáles son sus principales proyectos?",
    aiQuestion4: "¿Cómo puedo contactarlo?",

    chatWelcome:
      "Hola, soy Suzy, la asistente de IA de Ryan. Puedes preguntarme sobre proyectos, tecnologías, experiencia y formas de contacto.",
  },
};

const cvLinks = {
  pt: "https://drive.google.com/uc?export=download&id=16nexuhG6HBn7XGsdwgUjCv70PcwPYgE8",
  en: "https://drive.google.com/uc?export=download&id=161Fw5jZp5sTATWdRJbs5c0DP924QeuyN",
  fr: "https://drive.google.com/uc?export=download&id=161Fw5jZp5sTATWdRJbs5c0DP924QeuyN",
  es: "https://drive.google.com/uc?export=download&id=161Fw5jZp5sTATWdRJbs5c0DP924QeuyN"
};

// Helpers (pra não quebrar se algum elemento não existir)
function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function setHTML(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = value;
}

function setIdText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setIdHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

function setIdPlaceholder(id, value) {
  const el = document.getElementById(id);
  if (el) el.placeholder = value;
}

function setIdValue(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value;
}

function getCurrentLanguage() {
  return localStorage.getItem("language") || "pt";
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;

  const t = translations[lang] || translations.pt;

  // MENU
  setText('.navbar a[href="#home"]', t.home);
  setText('.navbar a[href="#about"]', t.about);
  setText('.navbar a[href="#services"]', t.skills);
  setText('.navbar a[href="#portfolio"]', t.projects);
  setText('.navbar a[href="#contact"]', t.contact);

  // HERO
  setText(".home-content h3", t.heroGreeting);
  setHTML(".home-content h2", t.heroRole);
  setHTML(".home-content p", t.heroTagline);

  // ABOUT
  setHTML(".about .heading", t.aboutTitle);
  setHTML(".about-content h3", t.aboutSubtitle);
  setHTML(".about-content p", t.aboutText);

  // SKILLS
  setHTML(".services .heading", t.skillsTitle);
  setIdText("skill-data-analysis", t.dataAnalysis);

  // PROJECTS
  setHTML(".portfolio .heading", t.projectsTitle);

  // DOWNLOAD CV
  setIdText("download-cv-btn", t.downloadCV);

  // CONTATO + FORM
  setIdHTML("contact-title", t.contactTitle);
  setIdPlaceholder("input-name", t.fullName);
  setIdPlaceholder("input-email", t.emailAddress);
  setIdPlaceholder("input-phone", t.phoneNumber);
  setIdPlaceholder("input-subject", t.subject);
  setIdPlaceholder("input-message", t.message);
  setIdValue("submit-btn", t.sendMessage);

  const cvBtn = document.getElementById("download-cv-btn");
  if (cvBtn) {
    cvBtn.href = cvLinks[lang] || cvLinks.pt;
  }

  // AI SECTION
  setText('.navbar a[href="#ai"]', t.ai);
  setHTML("#ai .heading", t.aiTitle);
  setText(".ai-badge", t.aiBadge);
  setHTML(".ai-section-content h3", t.aiHeading);

  const aiDescriptions = document.querySelectorAll(".ai-section-description");
  if (aiDescriptions[0]) aiDescriptions[0].innerHTML = t.aiDescription1;
  if (aiDescriptions[1]) aiDescriptions[1].innerHTML = t.aiDescription2;

  const openChatBtn = document.querySelector(".open-ai-chat-btn");
  if (openChatBtn) openChatBtn.textContent = t.aiOpenChat;

  const aiProjectsBtn = document.querySelector(".ai-section-actions .btn-secondary");
  if (aiProjectsBtn) aiProjectsBtn.textContent = t.aiViewProjects;

  const aiCardTitle = document.querySelector(".ai-section-card .ai-status-text");
  if (aiCardTitle) aiCardTitle.textContent = t.aiCardTitle;

  const aiCardLabel = document.querySelector(".ai-card-label");
  if (aiCardLabel) aiCardLabel.textContent = t.aiCardLabel;

  const aiQuestions = document.querySelectorAll(".ai-example-question");
  if (aiQuestions[0]) aiQuestions[0].textContent = t.aiQuestion1;
  if (aiQuestions[1]) aiQuestions[1].textContent = t.aiQuestion2;
  if (aiQuestions[2]) aiQuestions[2].textContent = t.aiQuestion3;
  if (aiQuestions[3]) aiQuestions[3].textContent = t.aiQuestion4;

  loadProjects();
}

const languageSelector = document.getElementById("language-selector");
if (languageSelector) {
  languageSelector.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "pt";
  if (languageSelector) languageSelector.value = savedLang;
  setLanguage(savedLang);
});

// MENU ICON NAVBAR
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });
}

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`header nav a[href*=${id}]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });

  const header = document.querySelector(".header");
  if (header) header.classList.toggle("sticky", scrollPosition > 100);

  if (menuIcon && navbar) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

// DARK LIGHT MODE
const darkModeIcon = document.querySelector("#darkMode-icon");

if (darkModeIcon) {
  darkModeIcon.addEventListener("click", () => {
    const isSun = darkModeIcon.classList.contains("bx-sun");
    darkModeIcon.classList.toggle("bx-moon", isSun);
    darkModeIcon.classList.toggle("bx-sun", !isSun);
    document.body.classList.toggle("dark-mode");
  });
}

// SCROLL REVEAL
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img img, .services-container, .portfolio-box, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", { origin: "right" });

(async () => {
  const svgEl = document.querySelector(".icon-n8n");
  if (!svgEl) return;

  try {
    const res = await fetch("https://cdn.simpleicons.org/n8n");
    const svgText = await res.text();

    const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
    const inner = doc.querySelector("svg")?.innerHTML;

    if (inner) {
      svgEl.setAttribute("viewBox", "0 0 24 24");
      svgEl.innerHTML = inner;

      svgEl.querySelectorAll("[fill]").forEach(el => el.removeAttribute("fill"));
      svgEl.querySelectorAll("path, circle, rect, polygon").forEach(el => {
        el.setAttribute("fill", "currentColor");
      });
    }
  } catch (err) {
    console.error("Falha ao carregar ícone do n8n:", err);
  }
})();

let mouse = {
  x: null,
  y: null,
  radius: 160
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("scroll", () => {
  scrollOffset = window.scrollY * 0.15;
});

(() => {
  const canvas = document.getElementById("neural-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  let w = 0, h = 0;
  let scrollOffset = 0;
  const points = [];
  const SETTINGS = {
    density: 12000,
    maxLinkDist: 140,
    speed: 0.35,
    pointSize: 3.5
  };

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width = Math.floor(w * DPR);
    canvas.height = Math.floor(h * DPR);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    points.length = 0;
    const count = Math.floor((w * h) / SETTINGS.density);

    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() * 2 - 1) * SETTINGS.speed,
        vy: (Math.random() * 2 - 1) * SETTINGS.speed,
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    const mainColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--main-color")
      .trim() || "#b005ff";

    for (const p of points) {
      p.x += p.vx;
      p.y += p.vy;

      if (mouse.x !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += dx * force * 0.07;
          p.y += dy * force * 0.07;
        }
      }

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    for (let i = 0; i < points.length; i++) {
      const a = points[i];

      for (let j = i + 1; j < points.length; j++) {
        const b = points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);

        if (dist < SETTINGS.maxLinkDist) {
          const alpha = 1 - dist / SETTINGS.maxLinkDist;
          ctx.strokeStyle = `rgba(176, 5, 255, ${0.70 * alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y - scrollOffset);
          ctx.lineTo(b.x, b.y - scrollOffset);
          ctx.stroke();
        }
      }
    }

    ctx.fillStyle = `rgba(176, 5, 255, 0.50)`;

    for (const p of points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y - scrollOffset, SETTINGS.pointSize, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize);
  resize();
  step();
})();

/* =========================
   AI CHAT BOT
========================= */

const bot = document.getElementById("ai-bot");
const chat = document.getElementById("ai-chat");
const closeBtn = document.getElementById("chat-close");

const input = document.getElementById("chat-input");
const send = document.getElementById("chat-send");
const messages = document.getElementById("chat-messages");

if (closeBtn && chat) {
  closeBtn.addEventListener("click", () => {
    chat.style.display = "none";
  });
}

if (bot && chat) {
  bot.addEventListener("click", () => {
    if (chat.style.display === "flex") {
      chat.style.display = "none";
    } else {
      openChat();
    }
  });
}

function openChat() {
  if (!chat || !input) return;

  chat.style.display = "flex";
  showSuzyWelcomeMessage();
  input.focus();
}

const aiSectionOpenBtn = document.querySelector(".open-ai-chat-btn");
if (aiSectionOpenBtn) {
  aiSectionOpenBtn.addEventListener("click", openChat);
}

document.querySelectorAll(".ai-example-question").forEach((button) => {
  button.addEventListener("click", () => {
    openChat();

    const question = button.textContent.trim();
    if (input) {
      input.value = question;
      input.focus();
    }
  });
});

/* =========================
   SUZY AI CHAT
========================= */

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatMessageText(text) {
  const safeText = escapeHTML(text);

  const withLinks = safeText.replace(
    /(https?:\/\/[^\s<]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  return withLinks.replace(/\n/g, "<br>");
}

function addChatMessage(text, sender) {
  if (!messages) return document.createElement("div");

  const message = document.createElement("div");
  message.classList.add("chat-message", sender);

  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble");
  bubble.innerHTML = formatMessageText(text);

  message.appendChild(bubble);
  messages.appendChild(message);

  messages.scrollTop = messages.scrollHeight;

  return message;
}

function addTypingMessage() {
  const lang = getCurrentLanguage();
  const typingText = translations[lang]?.chatTyping || translations.pt.chatTyping;

  const message = document.createElement("div");
  message.classList.add("chat-message", "suzy");

  const bubble = document.createElement("div");
  bubble.classList.add("chat-bubble", "typing-bubble");
  bubble.innerHTML = `
    <span class="typing-text">${typingText}</span>
    <span class="typing-dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  `;

  message.appendChild(bubble);
  messages.appendChild(message);

  messages.scrollTop = messages.scrollHeight;

  return message;
}

function showSuzyWelcomeMessage() {
  const lang = getCurrentLanguage();
  const welcomeText = translations[lang]?.chatWelcome || translations.pt.chatWelcome;

  if (!messages) return;

  const alreadyHasWelcome = messages.querySelector(".chat-message.suzy.welcome-message");
  if (alreadyHasWelcome) return;

  const welcomeMessage = addChatMessage(welcomeText, "suzy");
  welcomeMessage.classList.add("welcome-message");
}

async function sendMessage() {
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  addChatMessage(text, "user");
  input.value = "";

  const typingMessage = addTypingMessage();

  try {
    const response = await fetch("https://wryan.app.n8n.cloud/webhook/suzy-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: text
      })
    });

    const data = await response.json();

    typingMessage.remove();
    addChatMessage(data.reply || "Sorry, I couldn't answer right now.", "suzy");
  } catch (error) {
    typingMessage.remove();
    addChatMessage("Connection error.", "suzy");
    console.error(error);
  }
}

if (send) {
  send.addEventListener("click", sendMessage);
}

if (input) {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
}

/* =========================
   NEURAL BOT MASCOT
========================= */

(() => {
  const canvas = document.getElementById("bot-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  const size = 120;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const cx = size / 2;
  const cy = size / 2;

  let hover = false;
  let time = 0;

  const nodes = Array.from({ length: 6 }, (_, i) => ({
    angle: (Math.PI * 2 * i) / 6,
    radius: 28 + Math.random() * 8,
    size: 3 + Math.random() * 2,
    speed: 0.008 + Math.random() * 0.004
  }));

  const botElement = document.getElementById("ai-bot");
  if (!botElement) return;

  botElement.addEventListener("mouseenter", () => {
    hover = true;
  });

  botElement.addEventListener("mouseleave", () => {
    hover = false;
  });

  function drawCore(pulse) {
    const gradient = ctx.createRadialGradient(cx, cy, 4, cx, cy, 22);
    gradient.addColorStop(0, "rgba(220,180,255,0.95)");
    gradient.addColorStop(0.35, "rgba(176,5,255,0.9)");
    gradient.addColorStop(1, "rgba(176,5,255,0.08)");

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(cx, cy, 16 + pulse, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.arc(cx, cy, 5 + pulse * 0.25, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawRing(pulse) {
    ctx.beginPath();
    ctx.strokeStyle = hover
      ? "rgba(176,5,255,0.55)"
      : "rgba(176,5,255,0.28)";
    ctx.lineWidth = hover ? 1.8 : 1.2;
    ctx.arc(cx, cy, 30 + pulse * 1.2, 0, Math.PI * 2);
    ctx.stroke();
  }

  function drawNodes() {
    const positions = [];

    for (const node of nodes) {
      node.angle += hover ? node.speed * 1.9 : node.speed;

      const orbitRadius = hover ? node.radius + 2 : node.radius;
      const x = cx + Math.cos(node.angle) * orbitRadius;
      const y = cy + Math.sin(node.angle) * orbitRadius;

      positions.push({ x, y });

      ctx.beginPath();
      ctx.fillStyle = hover
        ? "rgba(210,150,255,0.95)"
        : "rgba(176,5,255,0.8)";
      ctx.arc(x, y, node.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = hover
        ? "rgba(176,5,255,0.35)"
        : "rgba(176,5,255,0.18)";
      ctx.lineWidth = 1;
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    for (let i = 0; i < positions.length; i++) {
      const a = positions[i];
      const b = positions[(i + 1) % positions.length];

      ctx.beginPath();
      ctx.strokeStyle = hover
        ? "rgba(176,5,255,0.25)"
        : "rgba(176,5,255,0.12)";
      ctx.lineWidth = 0.9;
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }

  function drawParticles() {
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8 + time * 0.01;
      const r = 40 + Math.sin(time * 0.03 + i) * 3;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      ctx.beginPath();
      ctx.fillStyle = "rgba(176,5,255,0.18)";
      ctx.arc(x, y, 1.3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function animate() {
    time += 1;
    ctx.clearRect(0, 0, size, size);

    const pulse = Math.sin(time * 0.06) * 1.4 + (hover ? 1.5 : 0);

    drawParticles();
    drawRing(pulse);
    drawNodes();
    drawCore(pulse);

    requestAnimationFrame(animate);
  }

  animate();
})();

const GITHUB_USERNAME = "Ryan-Wes";

const featuredRepos = [
  "botflix",
  "calculo-de-rescisao",
  "guia-de-saude-mental",
  "pokedex-api-com-react",
  "expo-car",
  "jogoDaCobrinha-JS"
];

const projectsDisplay = {
  botflix: {
    title: "BotFlix",
    description: {
      pt: "Assistente inteligente que recomenda filmes e séries com base no perfil do usuário, entregando sugestões rápidas e personalizadas.",
      en: "Intelligent assistant that recommends movies and TV shows based on user profile, delivering fast and personalized suggestions.",
      fr: "Assistant intelligent qui recommande films et séries selon le profil de l’utilisateur, avec des suggestions rapides et personnalisées.",
      es: "Asistente inteligente que recomienda películas y series según el perfil del usuario, ofreciendo sugerencias rápidas y personalizadas."
    }
  },

  "calculo-de-rescisao": {
    title: "Calculadora de Rescisão",
    description: {
      pt: "Ferramenta que automatiza o cálculo de rescisões de estágio, tornando o processo mais rápido, claro e confiável.",
      en: "Tool that automates internship termination calculations, making the process faster, clearer and more reliable.",
      fr: "Outil qui automatise les calculs de fin de stage, rendant le processus plus rapide, clair et fiable.",
      es: "Herramienta que automatiza cálculos de finalización de prácticas, haciendo el proceso más rápido, claro y confiable."
    }
  },

  "pokedex-api-com-react": {
    title: "Pokédex com React",
    description: {
      pt: "Aplicação interativa para explorar dados de Pokémon, com navegação dinâmica e experiência fluida para o usuário.",
      en: "Interactive application to explore Pokémon data, with dynamic navigation and a smooth user experience.",
      fr: "Application interactive pour explorer les données Pokémon, avec navigation dynamique et expérience fluide.",
      es: "Aplicación interactiva para explorar datos de Pokémon, con navegación dinámica y experiencia fluida."
    }
  },

  "expo-car": {
    title: "ExpoCar",
    description: {
      pt: "Landing page interativa que apresenta carros de alta performance, focada em impacto visual e experiência envolvente.",
      en: "Interactive landing page showcasing high-performance cars, focused on visual impact and engaging experience.",
      fr: "Landing page interactive présentant des voitures haute performance, axée sur l’impact visuel et l’expérience immersive.",
      es: "Landing page interactiva que presenta autos de alto rendimiento, enfocada en impacto visual y experiencia envolvente."
    }
  },

  "guia-de-saude-mental": {
    title: "Guia de Saúde Mental",
    description: {
      pt: "Aplicação voltada ao apoio emocional, oferecendo uma experiência acessível e acolhedora para o usuário.",
      en: "Application focused on emotional support, providing an accessible and welcoming user experience.",
      fr: "Application dédiée au soutien émotionnel, offrant une expérience accessible et accueillante.",
      es: "Aplicación enfocada en apoyo emocional, ofreciendo una experiencia accesible y acogedora."
    }
  },

  "jogoDaCobrinha-JS": {
    title: "Jogo da Cobrinha",
    description: {
      pt: "Recriação do clássico jogo da cobrinha, demonstrando lógica de programação, controle de eventos e interatividade.",
      en: "Recreation of the classic snake game, demonstrating programming logic, event handling and interactivity.",
      fr: "Recréation du jeu classique du serpent, mettant en avant logique, gestion d’événements et interactivité.",
      es: "Recreación del clásico juego de la serpiente, demostrando lógica de programación, manejo de eventos e interactividad."
    }
  }
};

async function loadProjects() {
  try {
    const container = document.querySelector(".portfolio-container");
    if (!container) return;

    container.innerHTML = "";

    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      }
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar repositórios");
    }

    const repos = await response.json();

    const selectedRepos = featuredRepos
      .map(name => repos.find(repo => repo.name === name))
      .filter(Boolean);

    const lang = getCurrentLanguage();
    const t = translations[lang] || translations.pt;

    selectedRepos.forEach(repo => {
      const projectTitle = projectsDisplay[repo.name]?.title || repo.name;

      const projectDescription =
        projectsDisplay[repo.name]?.description?.[lang] ||
        repo.description ||
        "Projeto disponível no GitHub.";

      const topics = repo.topics || [];

      const badgesHTML = topics
        .map(topic => `<span class="tech-badge">${topic}</span>`)
        .join("");

      const codeUrl = repo.html_url;

      const projectUrl =
        repo.homepage && repo.homepage.trim() !== ""
          ? repo.homepage
          : null;

      const projectHTML = `
    <div class="portfolio-box">
      <img 
        src="https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/assets/preview.gif" 
        alt="Preview do projeto ${projectTitle}"
        loading="lazy"
      />

      <div class="portfolio-layer">
        <h4>${projectTitle}</h4>

        <div class="tech-badges">${badgesHTML}</div>

        <p>${projectDescription}</p>

        <div class="icons">
          <a class="btn-hover-effect-4782fghj btn-code" href="${codeUrl}" target="_blank" rel="noopener noreferrer">
            ${t.codeBtn}
          </a>

          ${projectUrl
          ? `<a class="btn-hover-effect-4782fghj btn-project" href="${projectUrl}" target="_blank" rel="noopener noreferrer">
                   ${t.projectBtn}
                 </a>`
          : ""
        }
        </div>
      </div>
    </div>
  `;

      container.insertAdjacentHTML("beforeend", projectHTML);
    });

  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
  }
}