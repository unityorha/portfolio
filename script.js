document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('#menu-icon');
    const navbarCollapse = document.querySelector('.navbar-collapse'); // La partie déroulante
    
    // On crée une instance Bootstrap du menu pour pouvoir le contrôler
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false // On ne l'ouvre pas au chargement
    });

    // 1. GESTION DU CLIC (Pour changer l'icône)
    // On écoute l'événement d'ouverture de Bootstrap
    navbarCollapse.addEventListener('show.bs.collapse', function () {
        menuIcon.classList.add('bx-x'); // Devient une croix
    });

    // On écoute l'événement de fermeture de Bootstrap
    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        menuIcon.classList.remove('bx-x'); // Redevient 3 traits
    });

    // 2. FERMETURE AU SCROLL
    window.onscroll = () => {
        // Si le menu est ouvert (classe 'show'), on le ferme
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide(); // Commande Bootstrap pour fermer avec l'animation fluide
        }
    };
});

const typed = new Typed('.multiple-text', {
      strings: ['cybersécurité', 'réseau',],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });