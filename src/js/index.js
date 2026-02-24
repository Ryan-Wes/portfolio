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
        heroTagline: 'Transformando ideias em sites, dados em decisões e <strong>automações inteligentes</strong>',

        aboutTitle: 'Sobre <strong>Mim</strong>',
        aboutSubtitle: "Olá, pode me chamar de <strong>Ryan</strong>.",
        aboutText: `
Sou <strong>Data Analyst e Desenvolvedor Full Stack</strong>, focado em criar soluções web escaláveis e sistemas orientados por dados.

Atualmente curso <strong>Análise e Desenvolvimento de Sistemas</strong> e reforço continuamente minha base técnica através de projetos práticos e resolução de problemas reais.

Minha stack principal inclui <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong> e <strong>SQL</strong>, sempre aplicando boas práticas para desenvolver aplicações <strong>eficientes</strong>, <strong>responsivas</strong>, <strong>acessíveis</strong> e <strong>visualmente bem construídas</strong>.

Também venho expandindo minha atuação para <strong>automação de processos</strong> e <strong>análise de dados</strong>, utilizando ferramentas como <strong>n8n</strong>, <strong>Excel</strong> e <strong>Power BI</strong> para transformar dados em decisões estratégicas.

Minha experiência como <strong>Analista Técnico</strong> em uma empresa internacional fortaleceu habilidades como <strong>comunicação</strong>, <strong>pensamento crítico</strong>, <strong>adaptabilidade</strong> e <strong>gestão de tempo</strong>.
`,
        skillsTitle: 'Minhas <strong>Habilidades</strong>',
        dataAnalysis: "Análise de Dados",
    },

    en: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",

        heroGreeting: "Hi! I am",
        heroRole: '<strong>Data Analyst</strong> and <strong>Full Stack Developer</strong>',
        heroTagline: 'Building scalable web solutions, data-driven insights and <strong>intelligent automations</strong>',

        aboutTitle: '<strong>About</strong> Me',
        aboutSubtitle: "Hi, you can call me <strong>Ryan</strong>.",
        aboutText: `
I am a <strong>Data Analyst and Full Stack Developer</strong> focused on building scalable web solutions and data-driven systems.

Currently pursuing a degree in <strong>Systems Analysis and Development</strong>, I continuously refine my technical foundation through hands-on projects and real-world problem solving.

My core stack includes <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong>, and <strong>SQL</strong>. I apply best practices to create applications that are <strong>efficient</strong>, <strong>responsive</strong>, <strong>accessible</strong>, and <strong>visually refined</strong>.

I have expanded into <strong>process automation</strong> and <strong>data analytics</strong>, using tools such as <strong>n8n</strong>, <strong>Excel</strong>, and <strong>Power BI</strong> to optimize workflows and transform raw data into actionable insights.

My experience as a <strong>Technical Analyst</strong> in an international company strengthened my skills in <strong>communication</strong>, <strong>critical thinking</strong>, <strong>adaptability</strong>, and <strong>time management</strong>.
`,
        skillsTitle: 'My <strong>Skills</strong>',
        dataAnalysis: "Data Analysis",
    },

    fr: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",

        heroGreeting: "Salut ! Je suis",
        heroRole: '<strong>Analyste de Données</strong> et <strong>Développeur Full Stack</strong>',
        heroTagline: 'Création de solutions web évolutives et <strong>automatisations intelligentes</strong>',

        aboutTitle: 'À propos de <strong>moi</strong>',
        aboutSubtitle: "Salut, vous pouvez m’appeler <strong>Ryan</strong>.",

        aboutText: `
Je suis <strong>Analyste de Données et Développeur Full Stack</strong>, spécialisé dans la création de solutions web évolutives et de systèmes basés sur les données.

Actuellement étudiant en <strong>Analyse et Développement des Systèmes</strong>, je renforce mes compétences techniques à travers des projets concrets et la résolution de problèmes réels.

Je travaille principalement avec <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong> et <strong>SQL</strong>, en appliquant les meilleures pratiques pour développer des applications performantes et modernes.

Je développe également des solutions d’<strong>automatisation des processus</strong> et d’<strong>analyse de données</strong> avec <strong>n8n</strong>, <strong>Excel</strong> et <strong>Power BI</strong>.

Mon expérience professionnelle m’a permis de développer de solides compétences en communication, adaptabilité et pensée critique.
`,
        skillsTitle: 'Mes <strong>Compétences</strong>',
        dataAnalysis: "Analyse de Données",
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
Soy <strong>Analista de Datos y Desarrollador Full Stack</strong>, enfocado en crear soluciones web escalables y sistemas basados en datos.

Actualmente estudio <strong>Análisis y Desarrollo de Sistemas</strong> y fortalezco mis habilidades técnicas mediante proyectos prácticos y resolución de problemas reales.

Trabajo con <strong>JavaScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Next.js</strong>, <strong>Python</strong> y <strong>SQL</strong>, aplicando buenas prácticas para desarrollar aplicaciones eficientes y modernas.

También desarrollo soluciones de <strong>automatización de procesos</strong> y <strong>análisis de datos</strong> utilizando <strong>n8n</strong>, <strong>Excel</strong> y <strong>Power BI</strong>.

Mi experiencia profesional fortaleció habilidades como comunicación, adaptabilidad y pensamiento crítico.
`,
        skillsTitle: 'Mis <strong>Habilidades</strong>',
        dataAnalysis: "Análisis de Datos",
    }
};

function setLanguage(lang) {
    localStorage.setItem("language", lang);

    // MENU
    document.querySelector('.navbar a[href="#home"]').textContent = translations[lang].home;
    document.querySelector('.navbar a[href="#about"]').textContent = translations[lang].about;
    document.querySelector('.navbar a[href="#services"]').textContent = translations[lang].skills;
    document.querySelector('.navbar a[href="#portfolio"]').textContent = translations[lang].projects;
    document.querySelector('.navbar a[href="#contact"]').textContent = translations[lang].contact;

    // HERO
    document.querySelector('.home-content h3').textContent = translations[lang].heroGreeting;
    document.querySelector('.home-content h2').innerHTML = translations[lang].heroRole;
    document.querySelector('.home-content p').innerHTML = translations[lang].heroTagline;

    // ABOUT
    document.querySelector('.about .heading').innerHTML = translations[lang].aboutTitle;
    document.querySelector('.about-content h3').innerHTML = translations[lang].aboutSubtitle;
    document.querySelector('.about-content p').innerHTML = translations[lang].aboutText;
    document.querySelector('.services .heading').innerHTML = translations[lang].skillsTitle;
    document.getElementById("skill-data-analysis").textContent =
        translations[lang].dataAnalysis;
}

const languageSelector = document.getElementById("language-selector");

languageSelector.addEventListener("change", (e) => {
    setLanguage(e.target.value);

    document.documentElement.lang = lang;
});

// MENU ICON NAVBAR
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // STICKY NAVBAR    
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollPosition > 100);

    // REMOVE MENU ICON NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// DARK LIGHT MODE
const darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener('click', () => {
    const isSun = darkModeIcon.classList.contains('bx-sun');
    darkModeIcon.classList.toggle('bx-moon', isSun);
    darkModeIcon.classList.toggle('bx-sun', !isSun);
    document.body.classList.toggle('dark-mode');
});

// SCROLL REVEAL
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "pt";
    languageSelector.value = savedLang;
    setLanguage(savedLang);
});