document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('#menu-icon');
    const navbarCollapse = document.querySelector('.navbar-collapse'); // la partie déroulante
    
    // on crée une instance Bootstrap du menu pour pouvoir le contrôler
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false // on ne l'ouvre pas au chargement
    });

    // gestion du clic (Pour changer l'icône)
    // on écoute l'événement d'ouverture de Bootstrap
    navbarCollapse.addEventListener('show.bs.collapse', function () {
        menuIcon.classList.add('bx-x'); // = deviens une croix
    });

    // on écoute l'événement de fermeture de Bootstrap
    navbarCollapse.addEventListener('hide.bs.collapse', function () {
        menuIcon.classList.remove('bx-x'); // = redevient 3 traits
    });

    // fermeture au scroll
    window.onscroll = () => {
        // Si le menu est ouvert (classe 'show') on le ferme
        if (navbarCollapse.classList.contains('show')) {
            bsCollapse.hide(); // ocmmande Bootstrap pour fermer avec l'animation fluide
        }
    };
});

const typed = new Typed('.multiple-text', {
      strings: ['cybersécurité', 'infrastructure réseau','administration système',],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1200,
      loop: true,
    });