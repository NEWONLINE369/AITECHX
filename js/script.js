document.addEventListener('DOMContentLoaded', () => {
    // Simple animation for service cards
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
