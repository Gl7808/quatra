document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const section = document.querySelector('#target-section');

    if (!header || !section) {
        console.warn('Header или секция не найдены. Проверь селекторы.');
        return;
    }

    const observer = new IntersectionObserver(([entry]) => {
        const isAboveViewport = entry.boundingClientRect.top < 1;
        header.classList.toggle('is-hidden', isAboveViewport);

    }, { threshold: 0 });

    observer.observe(section);
});