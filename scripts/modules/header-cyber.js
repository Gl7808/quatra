document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    // ⚠️ Замени на реальный класс/ID секции, после которой скрывать
    const section = document.querySelector('#target-section');

    if (!header || !section) {
        console.warn('Header или секция не найдены. Проверь селекторы.');
        return;
    }

    const observer = new IntersectionObserver(([entry]) => {
        // top < 0 означает, что секция ушла ВВЕРХ за границу экрана
        const isAboveViewport = entry.boundingClientRect.top < 1;
        header.classList.toggle('is-hidden', isAboveViewport);

        // Для отладки (удали после проверки)
        console.log('Section top:', entry.boundingClientRect.top, 'Hide:', isAboveViewport);
    }, { threshold: 0 });

    observer.observe(section);
});