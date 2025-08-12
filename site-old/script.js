document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav ul');

    // --- Função para ajustar o padding do main ---
    function adjustMainPadding() {
        if (header && main) {
            const headerHeight = header.offsetHeight;
            main.style.paddingTop = `${headerHeight}px`;
        }
    }

    // --- Lógica para o menu hambúrguer ---
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        // Ajusta o padding após a animação do menu, se houver
        setTimeout(adjustMainPadding, 300); 
    });

    // --- Lógica para animação de scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Opcional: remover a classe se o elemento sair da tela
                // entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do elemento está visível
    });

    // Seleciona os elementos que você quer animar
    const elementsToAnimate = document.querySelectorAll('.card, .hero h1, .hero p, .hero .cta-button, .hero-images img');
    
    // Observa cada elemento
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- Ajustes iniciais e em caso de redimensionamento da tela ---
    adjustMainPadding();
    window.addEventListener('resize', adjustMainPadding);
});
