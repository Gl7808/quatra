// ===== ДАННЫЕ ИГР =====
const GAMES_DATA = [
    {
        id: 'cs2',
        title: 'Counter-Strike 2',
        genre: 'Тактический шутер',
        description: 'Легендарный командный шутер с обновлённой графикой. Соревнуйся с друзьями в режиме 5×5, отрабатывай стратегии и доминируй на карте.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg',
        background: 'https://i.pinimg.com/originals/f5/9e/3f/f59e3f17732a55513adc16575210f35c.jpg'
    },
    {
        id: 'dota2',
        title: 'Dota 2',
        genre: 'MOBA',
        description: 'Эпическая битва на арене 5×5. Выбирай героя, прокачивай навыки, координируйся с командой и разрушай трон противника.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg',
        background: 'https://i.pinimg.com/originals/e2/ac/19/e2ac19a7b09ce14968ee4d91f9e2c5e1.jpg'
    },
    {
        id: 'fifa24',
        title: 'EA Sports FC 24',
        genre: 'Спортивный симулятор',
        description: 'Реалистичный футбол с лицензированными командами и игроками. Играй один или с друзьями в локальном мультиплеере.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg',
        background: 'https://img.ggsel.net/102134415/original/AUTOxAUTO/1b0f7a230e109074c2f5bea4fa7acd88.webp'
    },
    {
        id: 'valorant',
        title: 'VALORANT',
        genre: 'Тактический шутер',
        description: 'Командный шутер 5×5 с уникальными агентами и способностями. Точность, стратегия и тайминги — основа победы.',
        preview: 'https://mega-plakat.ru/wp-content/uploads/2025/04/valorant_1-720x1024.png',
        background: 'https://cdnb.artstation.com/p/assets/images/images/065/797/831/large/valencia-irawan-neon.jpg?1691376650'
    },
    {
        id: 'apex',
        title: 'Apex Legends',
        genre: 'Королевская битва',
        description: 'Динамичный баттл-роял с героями-легендами. Собирай лут, используй способности и стань последним отрядом на арене.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg',
        background: 'https://avatars.mds.yandex.net/i?id=e939392854a36414b5064e58ccc5d03d_l-5704334-images-thumbs&n=13'
    },
    {
        id: 'minecraft',
        title: 'Minecraft',
        genre: 'Песочница / Выживание',
        description: 'Строй, исследуй, выживай. Бесконечные миры, кооператив до 10 игроков и режимы от выживания до мини-игр.',
        preview: 'https://i.pinimg.com/736x/f5/8b/5f/f58b5fd2233d444e1bfb857036d8bc7d.jpg',
        background: 'https://avatars.mds.yandex.net/get-mpic/12511153/2a0000019934df6b1204ec6e1f23e8f50898/orig'
    },
    {
        id: 'gta5',
        title: 'GTA V',
        genre: 'Action / Открытый мир',
        description: 'Лос-Сантос в твоём распоряжении. Свобода действий, онлайн-миссии и безграничные возможности для веселья с друзьями.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
        background: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700670229.jpg'
    },
    {
        id: 'rocketleague',
        title: 'Rocket League',
        genre: 'Спортивный аркадный',
        description: 'Футбол на ракетных машинах! Быстро, зрелищно, азартно. Идеально для турниров и дружеских матчей 2×2 или 3×3.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg',
        background: 'https://avatars.mds.yandex.net/i?id=4a3a5b6a04a74d7b060183eb6f2bf9ed_l-4592782-images-thumbs&n=13'
    },
    {
        id: 'tekken8',
        title: 'Tekken 8',
        genre: 'Файтинг',
        description: 'Легендарная серия файтингов в новом поколении. Зрелищные комбо, онлайн-баттлы и турнирный режим для настоящих бойцов.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/header.jpg',
        background: 'https://i.pinimg.com/originals/c6/f7/4c/c6f74ce29772841d7c907e98f65153f8.jpg'
    },
    {
        id: 'sf6',
        title: 'Street Fighter 6',
        genre: 'Файтинг',
        description: 'Новая глава культовой серии. Уникальная боевая система, режимы для новичков и профи, кроссплатформенные поединки.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg',
        background: 'https://avatars.mds.yandex.net/i?id=dcbab69fa8723a0781639dca33d0224f_l-8325116-images-thumbs&n=13'
    },
    {
        id: 'codmw3',
        title: 'Call of Duty: MW III',
        genre: 'FPS / Экшен',
        description: 'Интенсивные перестрелки, зомби-режим и мультиплеер с десятками карт. Быстрый экшен для фанатов серии.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2519060/header.jpg',
        background: 'https://xbox-store-checker.com/assets/upload/game/2023/08/optimize/9n60vm7tsq36-background.jpg'
    },
    {
        id: 'pubg',
        title: 'PUBG: BATTLEGROUNDS',
        genre: 'Королевская битва',
        description: 'Классика жанра баттл-роял. 100 игроков, одна карта, один победитель. Тактика, стрельба и выживание в чистом виде.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg',
        background: 'https://avatars.mds.yandex.net/i?id=c148220a80b8488fa7b534e3dc001ddbe7e1f6d2-11003753-images-thumbs&n=13'
    },
    {
        id: 'r6siege',
        title: 'Rainbow Six Siege',
        genre: 'Тактический шутер',
        description: 'Разрушаемые локации, уникальные операторы и командная тактика. Штурм или защита — каждый раунд как новая операция.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg',
        background: 'https://staticg.sportskeeda.com/editor/2023/02/638f1-16771634136282-1920.jpg'
    }
];

let gamesSwiper = null;
let currentGameId = null;
let isAnimating = false;
let lastClickTime = 0;

// ===== Рендер слайдов =====
function renderGames() {
    const track = document.getElementById('gamesTrack');
    const isMobile = window.innerWidth <= 768;

    if (!track) return;
    track.innerHTML = '';

    GAMES_DATA.forEach((game, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        // data-swiper-slide-index нужен для realIndex в loop-режиме
        slide.dataset.swiperSlideIndex = index;

        slide.innerHTML = `
            <div class="games-sec__item ${index === 0 ? 'active' : ''}" data-id="${game.id}">
                <div class="games-sec__item-preview">
                    <img src="${game.preview}" alt="${game.title}" loading="lazy">
                </div>
                <div class="games-sec__item-meta">
                    <strong>${game.title}</strong>
                    <span>${game.genre}</span>
                </div>
            </div>
        `;
        track.appendChild(slide);
    });

    if (GAMES_DATA[0]) {
        currentGameId = GAMES_DATA[0].id;
        updateGlobalBg(GAMES_DATA[0]);
        if (!isMobile) updateStageContent(GAMES_DATA[0]);
    }

    initSwiper(isMobile);
}

// ===== Инициализация Swiper =====
function initSwiper(isMobile) {
    if (gamesSwiper) {
        gamesSwiper.destroy(true, true);
        gamesSwiper = null;
    }

    const swiperContainer = document.querySelector('.games-swiper');
    if (!swiperContainer) return;

    if (isMobile) {
        swiperContainer.style.display = 'block';
        return;
    }

    swiperContainer.style.display = '';

    gamesSwiper = new Swiper('.games-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        grabCursor: true,
        freeMode: true,
        loop: true,
        loopedSlides: GAMES_DATA.length,
        mousewheel: { enabled: true, sensitivity: 1 },
        keyboard: { enabled: true, onlyInViewport: true },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        // Отключаем встроенный click, чтобы не конфликтовал с нашим
        on: {
            slideChange: function () {
                const realIndex = this.realIndex;
                const game = GAMES_DATA[realIndex];
                if (game?.id && game.id !== currentGameId) {
                    handleGameSelect(game.id);
                }
            },
        },
    });

    // === Нативный клик-делегирование (надёжнее, чем on.click в Swiper) ===
    swiperContainer.addEventListener('click', onSlideClick);
}

// ===== Обработчик клика по слайду =====
function onSlideClick(e) {
    // Защита от двойных кликов и драга
    const now = Date.now();
    if (now - lastClickTime < 200) return;
    lastClickTime = now;

    if (gamesSwiper?.dragging) return;

    const slide = e.target.closest('.swiper-slide');
    if (!slide) return;

    // Получаем реальный индекс из data-атрибута (работает и с клонами)
    const slideIndex = parseInt(slide.dataset.swiperSlideIndex, 10);
    if (isNaN(slideIndex)) return;

    const game = GAMES_DATA[slideIndex];
    if (game?.id && game.id !== currentGameId) {
        // Если слайд уже активен — не делаем ничего
        if (gamesSwiper?.realIndex === slideIndex) return;

        handleGameSelect(game.id);
    }
}

// ===== Обработка выбора игры =====
function handleGameSelect(id) {
    if (isAnimating) return;
    if (id === currentGameId) return;

    const game = GAMES_DATA.find(g => g.id === id);
    if (!game) return;

    playTransition(() => {
        updateGlobalBg(game);
        updateStageContent(game);
        currentGameId = id;
    });
}

// ===== Анимация перехода =====
function playTransition(callback) {
    const overlay = document.getElementById('gamesTransition');
    if (!overlay) {
        callback();
        return;
    }

    isAnimating = true;
    overlay.classList.add('active');

    setTimeout(() => {
        callback();
        setTimeout(() => {
            overlay.classList.remove('active');
            isAnimating = false;
        }, 300);
    }, 450);
}

// ===== Обновление фона =====
function updateGlobalBg(game) {
    const globalBg = document.getElementById('gamesGlobalBg');
    if (globalBg) {
        globalBg.style.transition = 'opacity 0.3s ease';
        globalBg.style.opacity = '0.85';

        setTimeout(() => {
            globalBg.style.backgroundImage = `url(${game.background})`;
            globalBg.style.opacity = '1';
        }, 150);
    }
}

// ===== Обновление контента =====
function updateStageContent(game) {
    const genreEl = document.getElementById('gamesGenre');
    const titleEl = document.getElementById('gamesTitle');
    const descEl = document.getElementById('gamesDesc');

    if (genreEl) genreEl.textContent = game.genre;
    if (titleEl) titleEl.textContent = game.title;
    if (descEl) descEl.textContent = game.description;

    document.querySelectorAll('.games-sec__item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === game.id);
    });
}

// ===== Инициализация =====
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Swiper !== 'undefined') {
        renderGames();
    } else {
        document.addEventListener('swiper:ready', renderGames);
        setTimeout(() => {
            if (typeof Swiper !== 'undefined' && !gamesSwiper) {
                renderGames();
            }
        }, 500);
    }
});

// ===== Resize Handler =====
let resizeTimerGames;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimerGames);
    resizeTimerGames = setTimeout(() => {
        const isMobile = window.innerWidth <= 768;
        const track = document.getElementById('gamesTrack');
        if (track) {
            track.innerHTML = '';
            renderGames();
        }
    }, 200);
});