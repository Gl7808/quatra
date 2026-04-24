// ===== ДАННЫЕ МЕНЮ (редактируй здесь) =====
const MENU_CATEGORIES = {
    starters: {
        title: 'Закуски',
        slug: 'starters',
        image: 'https://static.tildacdn.com/tild3366-3861-4634-b864-313639383966/1539603709.jpg',
        items: [
            { name: 'Тартар из тунца', weight: '220 г', desc: 'Авокадо, юзу, черный кунжут, микрозелень', price: '850 ₽' },
            { name: 'Брускетта со страчателлой', weight: '180 г', desc: 'Томаты конфи, базилик, оливковое масло', price: '620 ₽' },
            { name: 'Хрустящие баклажаны', weight: '190 г', desc: 'Соус понзу, кунжут, свежий кориандр', price: '580 ₽' },
            { name: 'Карпаччо из говядины', weight: '160 г', desc: 'Руккола, пармезан, каперсы, трюфельное масло', price: '920 ₽' },
            { name: 'Тарталетки с муссом из лосося', weight: '140 г', desc: 'Сливочный сыр, красная икра, укроп', price: '720 ₽' },
            { name: 'Крокеты с рикоттой', weight: '170 г', desc: 'Шпинат, кедровые орехи, лимонная цедра', price: '540 ₽' },
            { name: 'Устрицы (6 шт)', weight: '300 г', desc: 'Свежие, подаются с лимоном и соусом миньонет', price: '1 800 ₽' },
            { name: 'Фуа-гра', weight: '90 г', desc: 'Паштет из гусиной печени, бриошь, луковый конфитюр', price: '1 200 ₽' }
        ]
    },
    salads: {
        title: 'Салаты',
        slug: 'salads',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/049/610/296/small_2x/delicious-fresh-caesar-salad-in-a-bowl-with-chicken-breast-egg-tomatoes-photo.JPG',
        items: [
            { name: 'Цезарь с креветками', weight: '280 г', desc: 'Романо, анчоусы, пармезан, фирменный соус', price: '890 ₽' },
            { name: 'Нисуаз', weight: '310 г', desc: 'Тунец, стручковая фасоль, яйцо, оливки', price: '950 ₽' },
            { name: 'Бурата с томатами', weight: '260 г', desc: 'Мини-томаты, песто, кедровый орех, бальзамик', price: '820 ₽' },
            { name: 'Теплый с уткой', weight: '290 г', desc: 'Филе утки, руккола, груша, гранат', price: '980 ₽' },
            { name: 'Греческий', weight: '270 г', desc: 'Фета, огурцы, томаты, оливки каламата, орегано', price: '680 ₽' },
            { name: 'Капрезе', weight: '240 г', desc: 'Моцарелла буффало, томаты, базилик, бальзамический крем', price: '750 ₽' },
            { name: 'С крабом и авокадо', weight: '230 г', desc: 'Мясо краба, авокадо, манго, лаймовая заправка', price: '1 100 ₽' },
            { name: 'Свекла с козьим сыром', weight: '250 г', desc: 'Запеченная свекла, козий сыр, грецкие орехи, мед', price: '720 ₽' }
        ]
    },
    mains: {
        title: 'Основные блюда',
        slug: 'mains',
        image: 'https://img.freepik.com/premium-photo/pasta-with-pumpkin-spinach-black-plate-black-background-top-view-free-space-your-text_187166-61318.jpg?semt=ais_hybrid&w=740&q=80',
        items: [
            { name: 'Стейк рибай', weight: '350 г', desc: 'Гриль, розмарин, картофельное пюре, соус демиглас', price: '1 900 ₽' },
            { name: 'Ризотто с лесными грибами', weight: '320 г', desc: 'Пармезан, трюфельное масло, эспрессо-дроп', price: '1 200 ₽' },
            { name: 'Филе лосося', weight: '280 г', desc: 'Су-вид, спаржа, голландский соус, лимонная цедра', price: '1 650 ₽' },
            { name: 'Паста с морепродуктами', weight: '360 г', desc: 'Креветки, мидии, кальмар, томатный бульон', price: '1 450 ₽' },
            { name: 'Каре ягненка', weight: '310 г', desc: 'Картофель дофинуа, мятный соус, запеченные томаты', price: '2 100 ₽' },
            { name: 'Утиная грудка', weight: '290 г', desc: 'Апельсиновый соус, картофель гратен, стручковая фасоль', price: '1 750 ₽' },
            { name: 'Осьминог на гриле', weight: '270 г', desc: 'Пюре из цветной капусты, чоризо, паприка', price: '1 850 ₽' },
            { name: 'Паста Карбонара', weight: '340 г', desc: 'Гуанчиале, пекорино романо, яйцо, черный перец', price: '980 ₽' },
            { name: 'Бефстроганов', weight: '330 г', desc: 'Говядина, шампиньоны, сметанный соус, картофель', price: '1 350 ₽' },
            { name: 'Дорадо на гриле', weight: '300 г', desc: 'Овощи гриль, лимонно-масляный соус, руккола', price: '1 600 ₽' }
        ]
    },
    desserts: {
        title: 'Десерты',
        slug: 'desserts',
        image: 'https://i.ytimg.com/vi/2jwWWWG-T1k/maxresdefault.jpg',
        items: [
            { name: 'Тирамису', weight: '140 г', desc: 'Классический рецепт, маскарпоне, эспрессо, какао', price: '650 ₽' },
            { name: 'Шоколадный фондан', weight: '160 г', desc: '70% какао, ванильное мороженое, морская соль', price: '700 ₽' },
            { name: 'Панна-котта', weight: '130 г', desc: 'Ягодный кули, миндальные лепестки, мята', price: '550 ₽' },
            { name: 'Чизкейк Нью-Йорк', weight: '150 г', desc: 'Классический, ягодный соус', price: '620 ₽' },
            { name: 'Крем-брюле', weight: '120 г', desc: 'Ваниль, карамелизированная корочка', price: '580 ₽' },
            { name: 'Тарт татен', weight: '180 г', desc: 'Карамелизированные яблоки, слоеное тесто, мороженое', price: '640 ₽' },
            { name: 'Шоколадный торт', weight: '165 г', desc: 'Темный шоколад, вишневый ликер, взбитые сливки', price: '680 ₽' },
            { name: 'Сорбет', weight: '110 г', desc: 'Манго-маракуйя или лимон-базилик', price: '420 ₽' }
        ]
    },
    drinks: {
        title: 'Напитки',
        slug: 'drinks',
        image: 'https://i.pinimg.com/originals/f9/46/fb/f946fb89b9e016e1fa24e41f1987be9b.jpg',
        items: [
            { name: 'Эспрессо', weight: '30 мл', desc: 'Зерна specialty класса', price: '250 ₽' },
            { name: 'Американо', weight: '200 мл', desc: 'Зерна specialty класса', price: '300 ₽' },
            { name: 'Капучино / Латте', weight: '250 мл', desc: 'Молоко 3.2%, эспрессо', price: '380 ₽' },
            { name: 'Свежевыжатый сок', weight: '300 мл', desc: 'Апельсин, яблоко, морковь, свекла', price: '450 ₽' },
            { name: 'Лимонад огурец-базилик', weight: '400 мл', desc: 'Свежий огурец, базилик, лайм, газировка', price: '380 ₽' },
            { name: 'Лимонад лайм-имбирь', weight: '400 мл', desc: 'Свежий имбирь, лайм, мята, мед', price: '380 ₽' },
            { name: 'Чай черный / зеленый', weight: '350 мл', desc: 'Листовой, на выбор', price: '320 ₽' },
            { name: 'Минеральная вода', weight: '750 мл', desc: 'San Pellegrino / Acqua Panna', price: '450 ₽' }
        ]
    }
};

// ===== ГЕНЕРАЦИЯ МЕНЮ =====
function renderMenu() {
    const track = document.getElementById('menuTrack');
    const nav = document.getElementById('menuNav');
    const categories = Object.values(MENU_CATEGORIES);

    categories.forEach((cat, index) => {
        // === Навигация ===
        const navLink = document.createElement('a');
        navLink.href = `#${cat.slug}`;
        navLink.className = 'menu__nav-link';
        navLink.dataset.target = cat.slug;
        navLink.textContent = cat.title;
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.innerWidth >= 1024) {
                // Горизонтальный скролл к карточке
                const card = document.getElementById(cat.slug);
                if (card) {
                    const track = card.closest('.menu__track');
                    const scrollPos = card.offsetLeft - track.offsetLeft + 20;
                    gsap.to(track, { x: -scrollPos + window.innerWidth * 0.1, duration: 0.8, ease: 'power2.out' });
                }
            } else {
                // Вертикальный скролл
                document.getElementById(cat.slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            navLink.classList.add('active');
            setTimeout(() => navLink.classList.remove('active'), 1500);
        });
        nav.appendChild(navLink);

        // === Карточка ===
        const card = document.createElement('div');
        card.className = 'menu__card';
        card.id = cat.slug;

        const itemsHTML = cat.items.map(item => `
      <div class="menu__item">
        <div class="menu__item-info">
          <div class="menu__item-name-row">
            <span class="menu__item-name">${item.name}</span>
            <span class="menu__item-weight">${item.weight}</span>
          </div>
          <span class="menu__item-desc">${item.desc}</span>
        </div>
        <span class="menu__item-price">${item.price}</span>
      </div>
    `).join('');

        card.innerHTML = `
      <div class="menu__image" data-aos="fade-in">
        <span class="menu__number"><b>${String(index + 1).padStart(2, '0')}</b> ${cat.slug}</span>
        <img src="${cat.image}" alt="${cat.title}">
      </div>
      <div class="menu__content">
        <h3 class="menu__title">${cat.title}</h3>
        <div class="menu__list">${itemsHTML}</div>
      </div>
    `;
        track.appendChild(card);
    });

    initObservers();
}

// ===== OBSERVER ДЛЯ ПОДСВЕТКИ НАВИГАЦИИ =====
function initObservers() {
    const sections = document.querySelectorAll('.menu__card');
    const navLinks = document.querySelectorAll('.menu__nav-link');

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
const initMenuScroll = () => {
    const section = document.querySelector('.menu');
    const track = section?.querySelector('.menu__track');
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
    renderMenu();
    initMenuScroll();
    ScrollTrigger?.refresh();
});

// ===== RESIZE HANDLER =====
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger?.refresh();
        if (window.innerWidth < 1024) {
            gsap.set('.menu__track', { x: 0 });
            ScrollTrigger?.getAll().forEach(t => t.kill());
        } else {
            initMenuScroll();
        }
    }, 200);
});