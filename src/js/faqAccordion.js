const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    const isOpen = question.getAttribute('aria-expanded') === 'true';

    if (!item) {
      return;
    }

    item.classList.toggle('is-open', !isOpen);
    question.setAttribute('aria-expanded', String(!isOpen));
  });
});
