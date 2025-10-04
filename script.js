document.addEventListener('DOMContentLoaded', function() {
    // 🟢 CAMBIO CLAVE: Cambiar 'once: true' a 'once: false'
    AOS.init({
        // Opciones globales (puedes ajustarlas)
        duration: 1000,      // duración de la animación en milisegundos (1 segundo)
        once: false          // ¡AHORA ES FALSE! La animación se repetirá cada vez que se haga scroll.
    });


    // 1. Funcionalidad para el Menú de Hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            // Alterna la clase 'active' para mostrar/ocultar el menú (definida en CSS)
            navLinks.classList.toggle('active');
            // Cambia el icono de hamburguesa a 'x' y viceversa
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times'); 
        });

        // Ocultar el menú al hacer clic en un enlace (solo en móvil)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                // Comprueba si está en vista móvil (mismo breakpoint que en el CSS)
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    // Vuelve el icono a hamburguesa
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. Efecto sutil para el Navbar al hacer scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)'; // Fondo semitransparente al bajar
            navbar.style.borderBottom = '1px solid #eee';
        } else {
            navbar.style.backgroundColor = 'var(--color-fondo)'; // Fondo normal al subir
            navbar.style.borderBottom = 'none';
        }
    });
});