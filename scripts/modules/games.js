// ===== ДАННЫЕ ИГР (без rating) =====
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
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg',
        background: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0f87c5c0f8e7c5e5/641f7b5c6b8c6e0a7c8e5c5e/valorant-background.jpg'
    },
    {
        id: 'apex',
        title: 'Apex Legends',
        genre: 'Королевская битва',
        description: 'Динамичный баттл-роял с героями-легендами. Собирай лут, используй способности и стань последним отрядом на арене.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg',
        background: 'https://assets2.opencritic.com/images/7350/o/apex-legends.jpg'
    },
    {
        id: 'minecraft',
        title: 'Minecraft',
        genre: 'Песочница / Выживание',
        description: 'Строй, исследуй, выживай. Бесконечные миры, кооператив до 10 игроков и режимы от выживания до мини-игр.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg',
        background: 'https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft-KeyArt-1.jpg'
    },
    {
        id: 'gta5',
        title: 'GTA V',
        genre: 'Action / Открытый мир',
        description: 'Лос-Сантос в твоём распоряжении. Свобода действий, онлайн-миссии и безграничные возможности для веселья с друзьями.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
        background: 'https://media-rockstargames-com.akamaized.net/titles/5/gtav/images/gtav_social_1920x1080.jpg'
    },
    {
        id: 'rocketleague',
        title: 'Rocket League',
        genre: 'Спортивный аркадный',
        description: 'Футбол на ракетных машинах! Быстро, зрелищно, азартно. Идеально для турниров и дружеских матчей 2×2 или 3×3.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg',
        background: 'https://cdn2.unrealengine.com/rocketleague-keyart-1920x1080-1920x1080-1.jpg'
    },
    {
        id: 'tekken8',
        title: 'Tekken 8',
        genre: 'Файтинг',
        description: 'Легендарная серия файтингов в новом поколении. Зрелищные комбо, онлайн-баттлы и турнирный режим для настоящих бойцов.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1778820/header.jpg',
        background: 'https://assets.bandainamcoent.eu/tekken8/tekken8-key-visual-desktop.jpg'
    },
    {
        id: 'sf6',
        title: 'Street Fighter 6',
        genre: 'Файтинг',
        description: 'Новая глава культовой серии. Уникальная боевая система, режимы для новичков и профи, кроссплатформенные поединки.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1364780/header.jpg',
        background: 'https://www.capcom-unity.com/images/sf6/key-art/sf6-key-art-desktop.jpg'
    },
    {
        id: 'codmw3',
        title: 'Call of Duty: MW III',
        genre: 'FPS / Экшен',
        description: 'Интенсивные перестрелки, зомби-режим и мультиплеер с десятками карт. Быстрый экшен для фанатов серии.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2519060/header.jpg',
        background: 'https://cdn1.epicgames.com/offer/cod/mw3-key-art-1920x1080.jpg'
    },
    {
        id: 'pubg',
        title: 'PUBG: BATTLEGROUNDS',
        genre: 'Королевская битва',
        description: 'Классика жанра баттл-роял. 100 игроков, одна карта, один победитель. Тактика, стрельба и выживание в чистом виде.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg',
        background: 'https://cdn.akamai.steamstatic.com/steam/apps/578080/ss_34c9de685225f135c0c1c5e4f5e5c5e5e5c5e5e5.1920x1080.jpg'
    },
    {
        id: 'r6siege',
        title: 'Rainbow Six Siege',
        genre: 'Тактический шутер',
        description: 'Разрушаемые локации, уникальные операторы и командная тактика. Штурм или защита — каждый раунд как новая операция.',
        preview: 'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg',
        background: 'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3YqJqJqJqJqJqJqJqJqJqJ/r6-siege-key-art.jpg'
    }
];

let gamesSwiper = null;
let currentGameId = null;
let isAnimating = false;

// ===== Рендер слайдов =====
function renderGames() {
    const track = document.getElementById('gamesTrack');
    const isMobile = window.innerWidth <= 768;
    track.innerHTML = '';

    GAMES_DATA.forEach((game, index) => {
        const slide = document.createElement('div');
        slide.className = `swiper-slide`;
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

    // Инициализация первой игры
    if (GAMES_DATA[0]) {
        currentGameId = GAMES_DATA[0].id;
        updateGlobalBg(GAMES_DATA[0]);
        if (!isMobile) updateStageContent(GAMES_DATA[0]);
    }

    // Инициализация Swiper
    initSwiper(isMobile);
}

// ===== Инициализация Swiper =====
function initSwiper(isMobile) {
    // Уничтожаем старый инстанс если есть
    if (gamesSwiper) {
        gamesSwiper.destroy(true, true);
        gamesSwiper = null;
    }

    if (isMobile) {
        // На мобильном — вертикальный список, без Swiper
        document.querySelector('.games-swiper').style.display = 'block';
        return;
    }

    gamesSwiper = new Swiper('.games-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        grabCursor: true,
        freeMode: true,
        mousewheel: {
            enabled: true,
            sensitivity: 1,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        // Авто-центрирование активного слайда
        centeredSlides: false,
        // Пагинация (опционально)
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        // Обработчики
        on: {
            slideChange: function () {
                const activeSlide = this.slides[this.activeIndex];
                const gameId = activeSlide?.querySelector('.games-sec__item')?.dataset.id;
                if (gameId && gameId !== currentGameId) {
                    handleGameSelect(gameId);
                }
            },
        },
    });

    // Клик по слайду
    document.querySelectorAll('.games-sec__item').forEach(item => {
        item.addEventListener('click', (e) => {
            // Игнорируем если был драг
            if (gamesSwiper?.dragging) return;

            const gameId = item.dataset.id;
            if (gameId && gameId !== currentGameId) {
                // Находим индекс и переходим
                const index = GAMES_DATA.findIndex(g => g.id === gameId);
                if (index !== -1) {
                    gamesSwiper?.slideTo(index);
                }
            }
        });
    });
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
        globalBg.style.opacity = '0.85';
        setTimeout(() => {
            globalBg.style.backgroundImage = `url(${game.background})`;
            globalBg.style.opacity = '1';
        }, 150);
    }
}

// ===== Обновление контента =====
function updateStageContent(game) {
    document.getElementById('gamesGenre').textContent = game.genre;
    document.getElementById('gamesTitle').textContent = game.title;
    document.getElementById('gamesDesc').textContent = game.description;

    // Обновляем активный класс на карточках
    document.querySelectorAll('.games-sec__item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === game.id);
    });
}

// ===== Инициализация =====
document.addEventListener('DOMContentLoaded', () => {
    // Ждём загрузки Swiper если подключен через defer
    if (typeof Swiper !== 'undefined') {
        renderGames();
    } else {
        document.addEventListener('swiper:ready', renderGames);
    }
});

// ===== Resize Handler =====
let resizeTimerGames;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimerGames);
    resizeTimerGames = setTimeout(() => {
        const isMobile = window.innerWidth <= 768;
        // Перерисовываем только если изменился режим
        const track = document.getElementById('gamesTrack');
        if (track) {
            track.innerHTML = '';
            renderGames();
        }
    }, 200);
});