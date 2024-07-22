// MENU ICON NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// SCROLL SECTIONS ACTIVE LINK
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


// STICKY NAVBAR    
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

// REMOVE MENU ICON NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

// DARK LIGHT MODE
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    if(darkModeIcon.classList.contains('bx-sun')){
        darkModeIcon.classList.add('bx-moon')
        darkModeIcon.classList.remove('bx-sun')
    } else {
        darkModeIcon.classList.add('bx-sun')
        darkModeIcon.classList.remove('bx-moon')
    }
    document.body.classList.toggle('dark-mode');
};

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

function leiaMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Leia Mais";
    }else{
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Leia Menos";
    }
}


