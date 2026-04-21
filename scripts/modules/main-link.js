document.querySelectorAll('.box__slider').forEach(slider => {
    const track = slider.querySelector('.box__slider-track');
    if (!track || !window.gsap) return;

    // Создаём анимацию
    const tween = window.gsap.to(track, {
        xPercent: -50,
        ease: 'none',
        duration: 25,
        repeat: -1
    });

    slider.addEventListener('mouseenter', () => {
        tween.timeScale(0.5);
    });

    slider.addEventListener('mouseleave', () => {
        tween.timeScale(1);
    });
});