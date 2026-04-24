// ===== ДАННЫЕ БАРНОЙ КАРТЫ (редактируй здесь) =====
const BAR_CATEGORIES = {
    signature: {
        title: 'Авторские коктейли',
        slug: 'signature',
        image: 'https://i.pinimg.com/736x/37/9f/7b/379f7b0bac5b457b562179899170279d.jpg',
        items: [
            { name: 'Quattro Sour', volume: '180 мл', desc: 'Джин, лимон, сироп бузины, яичный белок, биттер', price: '750 ₽' },
            { name: 'Midnight in Moscow', volume: '160 мл', desc: 'Водка, чёрная смородина, вермут, лайм, мята', price: '680 ₽' },
            { name: 'Smoked Old Fashioned', volume: '140 мл', desc: 'Бурбон, кленовый сироп, биттер, дым яблони', price: '890 ₽' },
            { name: 'Yuzu Spritz', volume: '220 мл', desc: 'Апероль, просекко, юзу, содовая, розмарин', price: '720 ₽' },
            { name: 'Spiced Pear Martini', volume: '150 мл', desc: 'Водка, ликёр груша, пряный сироп, лимон', price: '790 ₽' },
            { name: 'Basil Gimlet', volume: '160 мл', desc: 'Джин, лайм, сироп базилика, огурец', price: '710 ₽' },
            { name: 'Coffee Negroni', volume: '140 мл', desc: 'Джин, кампари, вермут, холодный эспрессо', price: '760 ₽' },
            { name: 'Berry Mojito', volume: '240 мл', desc: 'Ром, ежевика, малина, лайм, мята, содовая', price: '650 ₽' }
        ]
    },
    classic: {
        title: 'Классические коктейли',
        slug: 'classic',
        image: 'https://i.ytimg.com/vi/IZS5osqnuw8/maxresdefault.jpg',
        items: [
            { name: 'Margarita', volume: '160 мл', desc: 'Текила, трипл сек, лайм, соль', price: '620 ₽' },
            { name: 'Mojito', volume: '240 мл', desc: 'Ром, лайм, мята, сахар, содовая', price: '590 ₽' },
            { name: 'Espresso Martini', volume: '140 мл', desc: 'Водка, кофейный ликёр, эспрессо, сироп', price: '680 ₽' },
            { name: 'Moscow Mule', volume: '220 мл', desc: 'Водка, имбирный эль, лайм, имбирь', price: '580 ₽' },
            { name: 'Whiskey Sour', volume: '160 мл', desc: 'Бурбон, лимон, сахар, яичный белок', price: '610 ₽' },
            { name: 'Cosmopolitan', volume: '150 мл', desc: 'Водка, трипл сек, клюква, лайм', price: '630 ₽' },
            { name: 'Piña Colada', volume: '200 мл', desc: 'Ром, кокос, ананас, сливки', price: '640 ₽' },
            { name: 'Long Island Iced Tea', volume: '240 мл', desc: 'Водка, ром, джин, текила, кола, лимон', price: '720 ₽' }
        ]
    },
    beer: {
        title: 'Пиво',
        slug: 'beer',
        image: 'https://avatars.mds.yandex.net/i?id=bc5a41f1b1d1b067d987c667256d065c_l-5500206-images-thumbs&n=13',
        items: [
            { name: 'IPA Craft', volume: '0.4 / 0.5 л', desc: 'Цитрусовые ноты, хмельная горчинка, 6.2%', price: '420 / 520 ₽' },
            { name: 'Pilsner Premium', volume: '0.4 / 0.5 л', desc: 'Лёгкий, освежающий, золотистый, 4.8%', price: '380 / 470 ₽' },
            { name: 'Stout Dark', volume: '0.33 / 0.5 л', desc: 'Кофе, шоколад, карамель, плотный, 5.5%', price: '450 / 620 ₽' },
            { name: 'Wheat Beer', volume: '0.4 / 0.5 л', desc: 'Банан, гвоздика, мягкий, нефильтрованный, 5.1%', price: '400 / 490 ₽' },
            { name: 'Sour Ale', volume: '0.33 л', desc: 'Вишня, малина, лёгкая кислинка, 4.5%', price: '520 ₽' },
            { name: 'Lager Classic', volume: '0.4 / 0.5 л', desc: 'Чистый вкус, умеренная горечь, 4.6%', price: '350 / 430 ₽' },
            { name: 'Belgian Tripel', volume: '0.33 л', desc: 'Пряности, фрукты, крепкий, 8.5%', price: '580 ₽' },
            { name: 'Ginger Beer (безалк.)', volume: '0.33 л', desc: 'Имбирь, лайм, пряный, освежающий', price: '380 ₽' }
        ]
    },
    wine: {
        title: 'Вино (бокал / бутылка)',
        slug: 'wine',
        image: 'https://img.freepik.com/premium-photo/front-view-glass-of-wine-with-bottle-of-wine-on-dark-background-alcohol-restaurant-color-love-couple-feelings-darkness_461922-27167.jpg',
        items: [
            { name: 'Sauvignon Blanc', volume: '150 мл / 750 мл', desc: 'Новая Зеландия, цитрус, зелень, свежее', price: '550 / 2 900 ₽' },
            { name: 'Chardonnay', volume: '150 мл / 750 мл', desc: 'Франция, дуб, ваниль, сливочное', price: '620 / 3 400 ₽' },
            { name: 'Rosé Provence', volume: '150 мл / 750 мл', desc: 'Франция, клубника, минеральность', price: '590 / 3 200 ₽' },
            { name: 'Pinot Noir', volume: '150 мл / 750 мл', desc: 'Германия, вишня, специи, лёгкое', price: '640 / 3 600 ₽' },
            { name: 'Cabernet Sauvignon', volume: '150 мл / 750 мл', desc: 'Чили, чёрная смородина, дуб, плотное', price: '580 / 3 100 ₽' },
            { name: 'Prosecco DOC', volume: '150 мл / 750 мл', desc: 'Италия, яблоко, цветы, игристое', price: '520 / 2 800 ₽' },
            { name: 'Malbec', volume: '150 мл / 750 мл', desc: 'Аргентина, слива, шоколад, бархатное', price: '610 / 3 300 ₽' }
        ]
    },
    strong: {
        title: 'Крепкие напитки',
        slug: 'strong',
        image: 'https://avatars.mds.yandex.net/i?id=7ea2c1904b0a6d89faaa016b62af14e3_l-10340874-images-thumbs&n=13',
        items: [
            { name: 'Водка Premium', volume: '50 мл', desc: 'Россия, тройная фильтрация', price: '320 ₽' },
            { name: 'Джин London Dry', volume: '50 мл', desc: 'Англия, можжевельник, цитрус', price: '380 ₽' },
            { name: 'Ром White / Dark', volume: '50 мл', desc: 'Карибы, сахарный тростник', price: '360 ₽' },
            { name: 'Текила Silver / Reposado', volume: '50 мл', desc: 'Мексика, 100% агава', price: '420 ₽' },
            { name: 'Виски Bourbon', volume: '50 мл', desc: 'США, кукуруза, ваниль, карамель', price: '450 ₽' },
            { name: 'Виски Single Malt', volume: '50 мл', desc: 'Шотландия, выдержка 12 лет', price: '620 ₽' },
            { name: 'Коньяк VSOP', volume: '50 мл', desc: 'Франция, выдержка 4 года', price: '580 ₽' },
            { name: 'Ликёры (выбор)', volume: '40 мл', desc: 'Amaretto, Baileys, Triple Sec, Limoncello', price: '340 ₽' }
        ]
    },
    non_alco: {
        title: 'Безалкогольные напитки',
        slug: 'non-alco',
        image: 'https://ru.kabar.kg/media/images/front-view-of-fresh-natural-delic.2e16d0ba.fill-1200x630.jpg',
        items: [
            { name: 'Лимонад огурец-базилик', volume: '400 мл', desc: 'Свежий огурец, базилик, лайм, газировка', price: '380 ₽' },
            { name: 'Лимонад лайм-имбирь', volume: '400 мл', desc: 'Свежий имбирь, лайм, мята, мёд', price: '380 ₽' },
            { name: 'Ягодный морс', volume: '350 мл', desc: 'Клюква, брусника, малина, мята', price: '320 ₽' },
            { name: 'Свежевыжатый сок', volume: '300 мл', desc: 'Апельсин / яблоко / морковь / микс', price: '450 ₽' },
            { name: 'Smoothie', volume: '300 мл', desc: 'Манго-маракуйя или ягоды-банан', price: '420 ₽' },
            { name: 'Минеральная вода', volume: '750 мл', desc: 'San Pellegrino / Acqua Panna', price: '450 ₽' },
            { name: 'Тоник / Сода / Кола', volume: '250 мл', desc: 'Fever-Tree / Soda Stream / Coca-Cola', price: '280 ₽' },
            { name: 'Ice Tea', volume: '400 мл', desc: 'Персик / лимон / мята, холодный', price: '340 ₽' }
        ]
    },
    tea_coffee: {
        title: 'Чай / Кофе',
        slug: 'tea-coffee',
        image: 'https://i.artfile.ru/1920x1080_1745167_[www.ArtFile.ru].jpg',
        items: [
            { name: 'Эспрессо', volume: '30 мл', desc: 'Зёрна specialty, Италия', price: '250 ₽' },
            { name: 'Американо', volume: '200 мл', desc: 'Эспрессо + вода', price: '300 ₽' },
            { name: 'Капучино / Латте', volume: '250 мл', desc: 'Эспрессо, молоко 3.2%, пенка', price: '380 ₽' },
            { name: 'Раф', volume: '250 мл', desc: 'Эспрессо, сливки, ванильный сироп', price: '420 ₽' },
            { name: 'Cold Brew', volume: '300 мл', desc: 'Холодная экстракция 12 часов, лёд', price: '390 ₽' },
            { name: 'Чай листовой', volume: '350 мл', desc: 'Чёрный / зелёный / улун / травяной', price: '320 ₽' },
            { name: 'Чайная церемония', volume: '450 мл', desc: 'Молочный улун или пуэр, пролив', price: '520 ₽' },
            { name: 'Глинтвейн (сезонно)', volume: '200 мл', desc: 'Красное вино, специи, апельсин, мёд', price: '450 ₽' }
        ]
    }
};

// ===== ГЕНЕРАЦИЯ БАРНОЙ КАРТЫ =====
function renderBarMenu() {
    const track = document.getElementById('barTrack');
    const nav = document.getElementById('barNav');
    const categories = Object.values(BAR_CATEGORIES);

    categories.forEach((cat, index) => {
        // === Навигация ===
        const navLink = document.createElement('a');
        navLink.href = `#${cat.slug}`;
        navLink.className = 'bar-menu__nav-link';
        navLink.dataset.target = cat.slug;
        navLink.textContent = cat.title;
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.innerWidth >= 1024) {
                const card = document.getElementById(cat.slug);
                if (card) {
                    const trackEl = card.closest('.bar-menu__track');
                    const scrollPos = card.offsetLeft - trackEl.offsetLeft + 20;
                    gsap.to(trackEl, { x: -scrollPos + window.innerWidth * 0.1, duration: 0.8, ease: 'power2.out' });
                }
            } else {
                document.getElementById(cat.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            navLink.classList.add('active');
            setTimeout(() => navLink.classList.remove('active'), 1500);
        });
        nav.appendChild(navLink);

        // === Карточка с номером ===
        const card = document.createElement('div');
        card.className = 'bar-menu__card';
        card.id = cat.slug;

        const itemsHTML = cat.items.map(item => `
      <div class="bar-menu__item">
        <div class="bar-menu__item-info">
          <div class="bar-menu__item-name-row">
            <span class="bar-menu__item-name">${item.name}</span>
            <span class="bar-menu__item-volume">${item.volume}</span>
          </div>
          <span class="bar-menu__item-desc">${item.desc}</span>
        </div>
        <span class="bar-menu__item-price">${item.price}</span>
      </div>
    `).join('');

        // Добавлен badge с номером как в menu
        card.innerHTML = `
      <div class="bar-menu__image" data-aos="fade-in">
        <span class="bar-menu__number"><b>${String(index + 1).padStart(2, '0')}</b> ${cat.slug}</span>
        <img src="${cat.image}" alt="${cat.title}">
      </div>
      <div class="bar-menu__content">
        <h3 class="bar-menu__title">${cat.title}</h3>
        <div class="bar-menu__list">${itemsHTML}</div>
      </div>
    `;
        track.appendChild(card);
    });

    initBarObservers();
}

// ===== OBSERVER ДЛЯ ПОДСВЕТКИ НАВИГАЦИИ =====
function initBarObservers() {
    const sections = document.querySelectorAll('.bar-menu__card');
    const navLinks = document.querySelectorAll('.bar-menu__nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.target === activeId);
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-20% 0px -60% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
}

// ===== ГОРИЗОНТАЛЬНЫЙ СКРОЛЛ (GSAP) =====
const initBarScroll = () => {
    const section = document.querySelector('.bar-menu');
    const track = section?.querySelector('.bar-menu__track');
    if (!track || window.innerWidth < 1024) return;

    const scrollDistance = track.scrollWidth - window.innerWidth;
    const extraScroll = window.innerWidth * 1.5;

    gsap.to(track, {
        x: () => -scrollDistance,
        ease: 'none',
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => '+=' + (scrollDistance + extraScroll),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });
};

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    renderBarMenu();
    initBarScroll();
    ScrollTrigger?.refresh();
});

// ===== RESIZE HANDLER =====
let resizeTimerBar;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimerBar);
    resizeTimerBar = setTimeout(() => {
        ScrollTrigger?.refresh();
        if (window.innerWidth < 1024) {
            gsap.set('.bar-menu__track', { x: 0 });
            ScrollTrigger?.getAll().forEach(t => t.kill());
        } else {
            initBarScroll();
        }
    }, 200);
});