const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const faqItems = document.querySelectorAll('.faq-accordion-item');

if (faqItems.length) {
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-accordion-trigger');

    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      faqItems.forEach((faqItem) => {
        faqItem.classList.remove('is-open');
        const faqTrigger = faqItem.querySelector('.faq-accordion-trigger');
        if (faqTrigger) faqTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
