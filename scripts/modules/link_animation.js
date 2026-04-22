// === Анимация перехода по ссылкам ===
const transitionOverlay = document.querySelector('.page-transition__overlay');
const transitionDuration = 400; // длительность анимации в мс (должна совпадать с CSS)

const animateTransition = (callback) => {
    if (!transitionOverlay) {
        callback?.();
        return;
    }

    // Показываем оверлей
    transitionOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Ждём завершения анимации и выполняем переход
    setTimeout(() => {
        callback?.();
    }, transitionDuration);
};

// Перехват кликов по ссылкам
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');

    // Пропускаем, если:
    // - нет ссылки
    // - внешняя ссылка (_blank или другой домен)
    // - якорь на той же странице
    // - ссылка с классом no-transition
    if (!link) return;
    if (link.target === '_blank') return;
    if (link.hostname !== window.location.hostname) return;
    if (link.hash && link.pathname === window.location.pathname) return;
    if (link.classList.contains('no-transition')) return;

    e.preventDefault();

    const href = link.href;

    animateTransition(() => {
        window.location.href = href;
    });
});

// Обработка кнопки "Назад" в браузере
window.addEventListener('popstate', () => {
    if (transitionOverlay?.classList.contains('active')) {
        transitionOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
});