const initLoungeScroll = () => {
    const section = document.querySelector('.lounge');
    const track = section?.querySelector('.lounge__track');
    if (!track || window.innerWidth < 1024) return;

    const scrollDistance = track.scrollWidth - window.innerWidth;
    // Добавляем 50% ширины экрана к длине скролла для "усаживания" последнего слайда
    const extraScroll = window.innerWidth * 1.5;

    gsap.to(track, {
        x: () => -scrollDistance, // Доезжаем ровно до последнего слайда
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => '+=' + (scrollDistance + extraScroll), // Скроллим на 50% дальше
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });
};

window.addEventListener('load', () => {
    initLoungeScroll();
    ScrollTrigger.refresh();
});

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
});