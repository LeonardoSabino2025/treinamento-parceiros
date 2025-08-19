document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission animation (optional)
    const form = document.getElementById('partnership-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Candidatura enviada! Entraremos em contato em breve.');
        form.reset();
    });
});