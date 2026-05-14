const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const burgerMenuLinks = document.querySelectorAll('[data-menu-link]');

if (openBtnEl && closeBtnEl && burgerMenuEl) {
  openBtnEl.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'open';
  });

  closeBtnEl.addEventListener('click', () => {
    burgerMenuEl.dataset.visible = 'close';
  });

  burgerMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      burgerMenuEl.dataset.visible = 'close';
    });
  });
}
