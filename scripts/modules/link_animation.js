const transitionOverlay = document.querySelector('.page-transition__overlay');
const TRANSITION_DURATION = 400;
const INNER_OPACITY_DURATION = 300;
const TRANSITION_FLAG = 'pageTransitionInFlight';

// === Исходящий переход (клик по ссылке) ===
const animateOutgoing = (callback) => {
    if (!transitionOverlay) { callback?.(); return; }

    transitionOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        sessionStorage.setItem(TRANSITION_FLAG, '1');
        callback?.();
    }, TRANSITION_DURATION);
};

// === Входящий переход (загрузка страницы) ===
const animateIncoming = () => {
    if (!sessionStorage.getItem(TRANSITION_FLAG) || !transitionOverlay) return;

    sessionStorage.removeItem(TRANSITION_FLAG);

    // 1. Мгновенно устанавливаем конечное состояние
    transitionOverlay.classList.add('no-transition', 'active');
    document.body.style.overflow = 'hidden';

    // 2. Force reflow
    void transitionOverlay.offsetWidth;

    // 3. Включаем транзишены и запускаем обратную анимацию
    transitionOverlay.classList.remove('no-transition');
    transitionOverlay.classList.remove('active');

    // 4. Cleanup после завершения всех анимаций
    setTimeout(() => {
        document.body.style.overflow = '';
    }, TRANSITION_DURATION + INNER_OPACITY_DURATION);
};

// === Обработчики ===
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    if (link.target === '_blank') return;
    if (link.hostname !== window.location.hostname) return;
    if (link.hash && link.pathname === window.location.pathname) return;
    if (link.classList.contains('no-transition')) return;

    e.preventDefault();
    animateOutgoing(() => {
        window.location.href = link.href;
    });
});

document.addEventListener('DOMContentLoaded', animateIncoming);

window.addEventListener('popstate', () => {
    // Сброс состояния при навигации через кнопки браузера
    if (transitionOverlay?.classList.contains('active')) {
        transitionOverlay.classList.remove('active', 'no-transition');
        document.body.style.overflow = '';
    }
});