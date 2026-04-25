const overlay = document.querySelector('.page-transition__overlay');
const OUT_DURATION = 400; // ширина
const IN_DURATION = 900;  // 0.4s ширина + 0.6s задержка + 0.3s inner

// 🔽 Переход при клике
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link || link.target === '_blank' || link.hostname !== location.hostname ||
        (link.hash && link.pathname === location.pathname) || link.classList.contains('no-transition')) return;

    e.preventDefault();
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => location.href = link.href, OUT_DURATION);
});

// 🔼 Обратная анимация при загрузке (вкл. кнопку "Назад")
window.addEventListener('pageshow', () => {
    if (!overlay?.classList.contains('active')) return;

    // Фиксируем начальное состояние перед запуском CSS-транзишена
    void overlay.offsetWidth;
    overlay.classList.remove('active');

    // Разблокируем скролл после завершения всех анимаций
    setTimeout(() => document.body.style.overflow = '', IN_DURATION);
});