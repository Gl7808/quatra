document.querySelectorAll('.atmosphere__item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.atmosphere__item--active').forEach(el => el.classList.remove('atmosphere__item--active'));
        item.classList.add('atmosphere__item--active');
    });
});