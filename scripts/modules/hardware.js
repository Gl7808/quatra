const hardwareBtn = document.querySelector('.hardware__button');
const hardwareOverlay = document.querySelector('.hardware__overlay');
const hardwareClose = document.querySelector('.hardware__overlay__close');

const toggleHardware = (isOpen) => {
    hardwareOverlay?.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
};

hardwareBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleHardware(true);
});

hardwareClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleHardware(false);
});

// Закрытие по клику вне контента (но внутри оверлея)
hardwareOverlay?.addEventListener('click', (e) => {
    if (e.target === hardwareOverlay) {
        toggleHardware(false);
    }
});

// Закрытие по Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hardwareOverlay?.classList.contains('active')) {
        toggleHardware(false);
    }
});