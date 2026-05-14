const faqQuestions = document.querySelectorAll('[data-faq-question]');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.closest('[data-faq-item]');
    const isOpen = question.getAttribute('aria-expanded') === 'true';

    if (!item) {
      return;
    }

    if (!isOpen) {
      item.setAttribute('data-open', '');
    } else {
      item.removeAttribute('data-open');
    }
    question.setAttribute('aria-expanded', String(!isOpen));
  });
});
