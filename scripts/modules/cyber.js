gsap.registerPlugin(ScrollTrigger);

function initPinnedStack() {
    const panels = gsap.utils.toArray('.pinned-panel');

    panels.forEach((panel) => {
        ScrollTrigger.create({
            trigger: panel,
            start: 'top top',
            end: '+=100%',
            pin: true,
            pinSpacing: false,
            // Отключаем на мобильных для обычной прокрутки
            disabled: window.innerWidth <= 768
        });
    });
}

// Инициализация
document.addEventListener('DOMContentLoaded', initPinnedStack);

// Рефреш при ресайзе
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
        // Пересоздаём триггеры при смене брейкпоинта
        ScrollTrigger.getAll().forEach(t => {
            if (window.innerWidth <= 768) {
                if (t.vars.pin) t.disable();
            } else {
                if (t.vars.pin) t.enable();
            }
        });
    }, 200);
});