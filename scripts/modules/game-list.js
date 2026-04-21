// Бегущая строка игр через GSAP
document.querySelectorAll('.game__list').forEach(list => {
    if (!window.gsap) return;

    // Создаём трек
    const track = document.createElement('div');
    track.className = 'game__list-track';

    // Клонируем контент
    const items = Array.from(list.querySelectorAll('.game__item'));
    items.forEach(item => {
        track.appendChild(item.cloneNode(true));
    });
    items.forEach(item => {
        track.appendChild(item.cloneNode(true)); // дубликат
    });

    // Заменяем структуру
    list.innerHTML = '';
    list.appendChild(track);

    // Анимация
    const tween = window.gsap.to(track, {
        xPercent: -50,
        ease: 'none',
        duration: 130,
        repeat: -1,
    });

    // Замедление при наведении (70%)
    list.addEventListener('mouseenter', () => {
        tween.timeScale(0.3);
    });

    list.addEventListener('mouseleave', () => {
        tween.timeScale(1);
    });
});