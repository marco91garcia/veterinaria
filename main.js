document.addEventListener('DOMContentLoaded', function() {
    // Menú
    const menuButton = document.getElementById('menu-button');
    const menuOptions = document.querySelector('.menu-options');

    menuButton.addEventListener('click', function() {
        menuOptions.classList.toggle('active');
    });

    // Carrusel de "Sobre Nosotros"
    const prevButton = document.getElementById('prev-section');
    const nextButton = document.getElementById('next-section');
    const sections = document.querySelectorAll('.about-section');
    let currentSection = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            section.style.display = i === index ? 'flex' : 'none';
        });
    }

    nextButton.addEventListener('click', function() {
        currentSection = (currentSection + 1) % sections.length;
        showSection(currentSection);
    });

    prevButton.addEventListener('click', function() {
        currentSection = (currentSection - 1 + sections.length) % sections.length;
        showSection(currentSection);
    });

    showSection(currentSection); // Mostrar la primera sección al cargar
});
