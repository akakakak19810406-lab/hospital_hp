document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Logic
    const hamburger = document.getElementById('js-hamburger');
    const mobileMenu = document.getElementById('js-mobile-menu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');

    function toggleMenu() {
        hamburger.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');

        // Accessibility
        const isExpanded = hamburger.classList.contains('is-active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    }

    hamburger.addEventListener('click', toggleMenu);

    // Close mobile menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
