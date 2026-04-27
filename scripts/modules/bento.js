// // ===== Bento Gallery Flip Animation =====
// if (document.querySelector('#gallery-bento')) {
//     gsap.registerPlugin(Flip);
//
//     let flipCtx;
//
//     const initBentoGallery = () => {
//         const gallery = document.querySelector('#gallery-bento');
//         if (!gallery) return;
//
//         const isMobile = window.innerWidth < 1024 || navigator.maxTouchPoints > 1;
//
//         // На мобильных — только статичная сетка, без анимации
//         if (isMobile) {
//             // Убиваем все триггеры, связанные с этой галереей
//             ScrollTrigger.getAll()
//                 .filter(t => t.trigger?.closest?.('#gallery-bento'))
//                 .forEach(t => t.kill());
//
//             // Сбрасываем стили элементов
//             gsap.set(gallery.querySelectorAll('.gallery-bento__item'), {
//                 clearProps: 'all'
//             });
//
//             // Убираем класс финального состояния, если был
//             gallery.classList.remove('gallery-bento__grid--final');
//             return;
//         }
//
//         // ===== Десктоп: запускаем Flip-анимацию =====
//         const items = gallery.querySelectorAll('.gallery-bento__item');
//
//         if (flipCtx) flipCtx.revert();
//         gallery.classList.remove('gallery-bento__grid--final');
//
//         flipCtx = gsap.context(() => {
//             // Фиксируем финальное состояние
//             gallery.classList.add('gallery-bento__grid--final');
//             const state = Flip.getState(items);
//             gallery.classList.remove('gallery-bento__grid--final');
//
//             // Создаём анимацию
//             const flip = Flip.to(state, {
//                 simple: true,
//                 ease: 'expoScale(1, 5)',
//                 duration: 1
//             });
//
//             // Привязываем к скроллу
//             const tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: gallery,
//                     start: 'center center',
//                     end: '+=100%',
//                     scrub: true,
//                     pin: gallery.closest('.gallery-bento'),
//                     anticipatePin: 1,
//                     // Отключаем на тач-устройствах динамически
//                     enabled: !isMobile
//                 }
//             });
//
//             tl.add(flip, 0);
//
//             return () => gsap.set(items, { clearProps: 'all' });
//         }, gallery);
//     };
//
// // Инициализация
//     initBentoGallery();
//
// // Ресайз с дебаунсом
//     let resizeTimer;
//     window.addEventListener('resize', () => {
//         clearTimeout(resizeTimer);
//         resizeTimer = setTimeout(() => {
//             ScrollTrigger.refresh();
//             initBentoGallery();
//         }, 250);
//     })}