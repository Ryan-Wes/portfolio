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
    heroRole: '<strong>Full-Stack</strong> Developer | Data & <strong>AI Automation</strong>',
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
    heroRole: 'Développeur <strong>Full-Stack</strong> | Données & <strong>Automatisation par IA</strong>',
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
    heroRole: 'Desarrollador <strong>Full-Stack</strong> | Datos & <strong>Automatización con IA</strong>',
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








(async () => {
  const svgEl = document.querySelector(".icon-n8n");
  if (!svgEl) return;

  try {
    // Simple Icons: retorna o SVG cru do ícone
    const res = await fetch("https://cdn.simpleicons.org/n8n");
    const svgText = await res.text();

    // Pega o <path ...> de dentro do SVG e coloca no seu <svg>
    const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
    const inner = doc.querySelector("svg")?.innerHTML;

    if (inner) {
      svgEl.setAttribute("viewBox", "0 0 24 24");
      svgEl.innerHTML = inner;

      // força o preenchimento seguir o currentColor
      svgEl.querySelectorAll("[fill]").forEach(el => el.removeAttribute("fill"));
      svgEl.querySelectorAll("path, circle, rect, polygon").forEach(el => {
        el.setAttribute("fill", "currentColor");
      });
    }
  } catch (err) {
    // se der ruim, o ícone só não aparece — sem quebrar o resto
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
    density: 12000,         // menor = mais pontos (ajuste fino)
    maxLinkDist: 140,      // distância máxima das conexões
    speed: 0.35,           // velocidade dos pontos
    pointSize: 3.5         // tamanho do ponto
  };

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;

    canvas.width = Math.floor(w * DPR);
    canvas.height = Math.floor(h * DPR);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    // Recria pontos proporcionalmente à área
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

    // Pega sua cor principal do CSS (var --main-color)
    const mainColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--main-color")
      .trim() || "#b005ff";

    // Move pontos
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

      // quica nas bordas
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    // Linhas (conexões)
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
          // Se você quiser obedecer totalmente sua --main-color, use isso:
          // ctx.strokeStyle = hexToRgba(mainColor, 0.22 * alpha);

          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y - scrollOffset);
          ctx.lineTo(b.x, b.y - scrollOffset);
          ctx.stroke();
        }
      }
    }

    // Pontos
    ctx.fillStyle = `rgba(176, 5, 255, 0.50)`;
    // ou: ctx.fillStyle = hexToRgba(mainColor, 0.65);

    for (const p of points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y - scrollOffset, SETTINGS.pointSize, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  // (Opcional) se quiser usar sua --main-color em hex corretamente:
  // function hexToRgba(hex, a){
  //   const h = hex.replace("#","").trim();
  //   if (h.length !== 6) return `rgba(176,5,255,${a})`;
  //   const r = parseInt(h.slice(0,2),16);
  //   const g = parseInt(h.slice(2,4),16);
  //   const b = parseInt(h.slice(4,6),16);
  //   return `rgba(${r},${g},${b},${a})`;
  // }

  window.addEventListener("resize", resize);
  resize();
  step();
})();




 


/* =========================
   AI CHAT BOT
========================= */

const bot = document.getElementById("ai-bot");
const chat = document.getElementById("ai-chat");
const closeBtn = document.getElementById("chat-close")

const input = document.getElementById("chat-input");
const send = document.getElementById("chat-send");
const messages = document.getElementById("chat-messages");




/* abrir / fechar chat */

closeBtn.addEventListener("click", () => {
  chat.style.display = "none"
})

bot.addEventListener("click", () => {

  if(chat.style.display === "flex"){
    chat.style.display = "none";
  }else{
    chat.style.display = "flex";
    input.focus();
  }

});


/* responder mensagem fake (por enquanto) */

send.addEventListener("click", () => {

  const text = input.value;

  if(!text) return;

  messages.innerHTML += `<div><b>You:</b> ${text}</div>`;

  input.value = "";

  setTimeout(() => {

    messages.innerHTML += `<div><b>AI:</b> I'm Suzy, Ryan's AI assistant. Soon I'll be powered by real AI 🚀</div>`;

    messages.scrollTop = messages.scrollHeight;

  },500);

});




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

  const bot = document.getElementById("ai-bot");

  bot.addEventListener("mouseenter", () => {
    hover = true;
  });

  bot.addEventListener("mouseleave", () => {
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

