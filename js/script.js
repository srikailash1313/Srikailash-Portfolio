document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const themeIcon = themeToggle?.querySelector('i');

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;
  updateThemeControl();

  function updateThemeControl() {
    const isLight = root.dataset.theme === 'light';
    if (!themeToggle || !themeIcon) return;
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    themeToggle.title = isLight ? 'Switch to dark theme' : 'Switch to light theme';
    themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }

  themeToggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', root.dataset.theme);
    updateThemeControl();
  });

  function closeMenu() {
    navMenu?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }

  menuToggle?.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const typingTarget = document.querySelector('#typing-text');
  const phrases = ['AI & Data Science Student', 'Java Developer', 'Aspiring Software Engineer'];
  let phraseIndex = 0;
  let characterIndex = phrases[0].length;
  let isDeleting = true;

  function typePhrase() {
    if (!typingTarget || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const phrase = phrases[phraseIndex];
    typingTarget.textContent = phrase.slice(0, characterIndex);
    if (isDeleting) characterIndex -= 1; else characterIndex += 1;
    let delay = isDeleting ? 45 : 85;
    if (!isDeleting && characterIndex === phrase.length + 1) { isDeleting = true; delay = 1600; }
    if (isDeleting && characterIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 350; }
    window.setTimeout(typePhrase, delay);
  }
  window.setTimeout(typePhrase, 1800);

  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));

  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    projectCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category.split(' ').includes(filter);
      card.classList.toggle('is-hidden', !matches);
    });
  }));

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  form?.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      status.textContent = 'Please complete each field with valid information.';
      status.className = 'form-status';
      form.querySelector(':invalid')?.focus();
      return;
    }
    if (form.action.includes('your.email@example.com')) {
      event.preventDefault();
      status.textContent = 'Validation passed. Add your email to the form action before enabling submissions.';
      status.className = 'form-status success';
      return;
    }
    status.textContent = 'Thanks. Your message is ready to be sent.';
    status.className = 'form-status success';
  });
});
