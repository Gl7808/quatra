document.addEventListener('DOMContentLoaded', () => {
    // Проверка, что GSAP и ScrollTrigger загружены
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP или ScrollTrigger не загружены');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // === Синхронизация с Lenis (ОБЯЗАТЕЛЬНО) ===
    if (typeof Lenis !== 'undefined' && window.lenis) {
        window.lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            window.lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    }

    const splitReveal = document.getElementById('splitReveal');
    if (splitReveal) {
        const topHalf = splitReveal.querySelector('.split-reveal__top');
        const bottomHalf = splitReveal.querySelector('.split-reveal__bottom');

        // Предварительно сбрасываем transform, чтобы не было скачка
        gsap.set([topHalf, bottomHalf], { y: 0 });

        gsap.to([topHalf, bottomHalf], {
            y: (i) => i === 0 ? '-100%' : '100%',
            ease: 'none',
            scrollTrigger: {
                trigger: splitReveal,
                start: 'top top',
                end: '+=150%',
                scrub: 0.5,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                // Отключаем на тач-устройствах, если нужно
                enabled: !window.matchMedia('(pointer: coarse)').matches
            }
        });
    }
});