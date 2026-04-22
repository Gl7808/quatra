document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq__item');
        // Раскомментируй строку ниже, если нужен режим "аккордеон" (открыт только один)
        // document.querySelectorAll('.faq__item.active').forEach(el => el !== item && el.classList.remove('active'));
        item.classList.toggle('active');
    });
});