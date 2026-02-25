// MENU LANGUAGE
const translations = {
  pt: {
    home: "Home",
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    contact: "Contato",

    heroGreeting: "Olá! Eu sou o",
    heroRole: 'Data <strong>Analyst</strong> e Desenvolvedor <strong>Full Stack</strong>',
    heroTagline:
      'Transformando ideias em sites, dados em decisões e <strong>automações inteligentes</strong>',

    aboutTitle: 'Sobre <strong>Mim</strong>',
    aboutSubtitle: "Olá, pode me chamar de <strong>Ryan</strong>.",
    aboutText: `
Sou <strong>Data Analyst e Desenvolvedor Full Stack</strong>, focado na criação de soluções web escaláveis e sistemas orientados por dados.

Atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> e fortaleço continuamente minha base técnica através de projetos práticos e resolução de problemas reais.

Minha stack principal inclui <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong> e <strong>SQL</strong>, sempre aplicando boas práticas para desenvolver aplicações eficientes, responsivas e acessíveis.

Também atuo com <strong>automação de processos</strong> e <strong>análise de dados</strong>, utilizando ferramentas como <strong>n8n</strong>, <strong>Excel</strong> e <strong>Power BI</strong> para transformar dados em decisões estratégicas.

Minha experiência como <strong>Analista Técnico</strong> em uma empresa internacional fortaleceu habilidades como comunicação, pensamento crítico, adaptabilidade e gestão de tempo.
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
  },

  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",

    heroGreeting: "Hi! I am",
    heroRole: '<strong>Data Analyst</strong> and <strong>Full Stack Developer</strong>',
    heroTagline: 'Building scalable web solutions and <strong>intelligent automations</strong>',

    aboutTitle: '<strong>About</strong> Me',
    aboutSubtitle: "Hi, you can call me <strong>Ryan</strong>.",
    aboutText: `
I am a <strong>Data Analyst and Full Stack Developer</strong> focused on building scalable web solutions and data-driven systems.

Currently pursuing a degree in <strong>Systems Analysis and Development</strong>, I continuously refine my technical foundation through hands-on projects.

My core stack includes <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong>, and <strong>SQL</strong>.

I also work with <strong>process automation</strong> and <strong>data analytics</strong> using tools such as <strong>n8n</strong>, <strong>Excel</strong>, and <strong>Power BI</strong>.

My experience as a <strong>Technical Analyst</strong> strengthened my communication and critical thinking skills.
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
  },

  fr: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",

    heroGreeting: "Salut ! Je suis",
    heroRole: '<strong>Analyste de Données</strong> et <strong>Développeur Full Stack</strong>',
    heroTagline: 'Solutions web évolutives et <strong>automatisations intelligentes</strong>',

    aboutTitle: 'À propos de <strong>moi</strong>',
    aboutSubtitle: "Bonjour, vous pouvez m’appeler <strong>Ryan</strong>.",
    aboutText: `
Je suis <strong>Analyste de Données et Développeur Full Stack</strong>, spécialisé dans la création de solutions web évolutives.

Je travaille avec <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Python</strong> et <strong>SQL</strong>.

Je développe également des solutions d’automatisation et d’analyse de données.
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
  },

  es: {
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",

    heroGreeting: "Hola! Soy",
    heroRole: '<strong>Analista de Datos</strong> y <strong>Desarrollador Full Stack</strong>',
    heroTagline: 'Soluciones web escalables y <strong>automatizaciones inteligentes</strong>',

    aboutTitle: 'Sobre <strong>mí</strong>',
    aboutSubtitle: "Hola, puedes llamarme <strong>Ryan</strong>.",
    aboutText: `
Soy <strong>Analista de Datos y Desarrollador Full Stack</strong> enfocado en crear soluciones web escalables.

Trabajo con <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Python</strong> y <strong>SQL</strong>.

También desarrollo soluciones de automatización y análisis de datos.
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

  // PROJECTS (título + descrições)
  setHTML(".portfolio .heading", t.projectsTitle);
  setIdHTML("project-mental-health-desc", t.mentalHealthDesc);
  setIdHTML("project-pokedex-desc", t.pokedexDesc);
  setIdHTML("project-expocar-desc", t.expocarDesc);
  setIdHTML("project-snake-desc", t.snakeDesc);
  setIdHTML("project-github-api-desc", t.githubApiDesc);
  setIdHTML("project-dev-friends-desc", t.devFriendsDesc);

  // DOWNLOAD CV
  setIdText("download-cv-btn", t.downloadCV);

  // BOTÕES PROJETOS
  document.querySelectorAll(".btn-code").forEach((btn) => (btn.textContent = t.codeBtn));
  document.querySelectorAll(".btn-project").forEach((btn) => (btn.textContent = t.projectBtn));

  // CONTATO + FORM
  setIdHTML("contact-title", t.contactTitle);
  setIdPlaceholder("input-name", t.fullName);
  setIdPlaceholder("input-email", t.emailAddress);
  setIdPlaceholder("input-phone", t.phoneNumber);
  setIdPlaceholder("input-subject", t.subject);
  setIdPlaceholder("input-message", t.message);
  setIdValue("submit-btn", t.sendMessage);

  // DOWNLOAD CV
setIdText("download-cv-btn", t.downloadCV);

const cvBtn = document.getElementById("download-cv-btn");
if (cvBtn) {
  cvBtn.href = cvLinks[lang] || cvLinks.pt;
}
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

  // STICKY NAVBAR
  const header = document.querySelector(".header");
  if (header) header.classList.toggle("sticky", scrollPosition > 100);

  // REMOVE MENU ICON NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
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

