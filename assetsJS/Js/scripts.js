

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.navbar-right li a');

    function toggleMenu() {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
    }

    menuIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('click', toggleMenu);

    // Adiciona evento de clique para cada item do menu
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            if (window.innerWidth <= 1000) {
                toggleMenu();
            }
        });
    });
});




