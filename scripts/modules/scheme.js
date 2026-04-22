const schemeBtn = document.querySelector('.button__scheme');
const schemeOverlay = document.querySelector('.scheme__overlay');
const schemeClose = document.querySelector('.scheme__overlay__close');

const toggleScheme = (isOpen) => {
    schemeOverlay?.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
};

schemeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleScheme(true);
});

schemeClose?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleScheme(false);
});

schemeOverlay?.addEventListener('click', (e) => {
    if (e.target === schemeOverlay) {
        toggleScheme(false);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && schemeOverlay?.classList.contains('active')) {
        toggleScheme(false);
    }
});