import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

const desktop = window.matchMedia('(min-width: 900px)');

function setMenuState(nav, expanded) {
  const button = nav.querySelector('.nav-toggle');
  const menu = nav.querySelector('.nav-sections');
  const tools = nav.querySelector('.nav-tools');
  const mobileExpanded = !desktop.matches && expanded;

  nav.dataset.expanded = String(mobileExpanded);
  button?.setAttribute('aria-expanded', String(mobileExpanded));
  button?.setAttribute('aria-label', mobileExpanded ? 'Close navigation' : 'Open navigation');

  if (menu) menu.hidden = !desktop.matches && !mobileExpanded;
  if (tools) tools.hidden = !desktop.matches && !mobileExpanded;
  document.body.classList.toggle('nav-open', mobileExpanded);
}

function createFallbackBrand() {
  const wrapper = document.createElement('div');
  const brand = document.createElement('a');
  const heading = document.querySelector('main h1');

  wrapper.className = 'nav-brand';
  brand.href = '/';
  brand.textContent = heading?.textContent?.trim() || 'Ly Brothers';
  brand.setAttribute('aria-label', 'Ly Brothers home');
  wrapper.append(brand);
  return wrapper;
}

export default async function decorate(block) {
  const configuredPath = getMetadata('nav');
  const navPath = configuredPath ? new URL(configuredPath, window.location).pathname : '/nav';
  const fragment = await loadFragment(navPath);

  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'site-nav';
  nav.setAttribute('aria-label', 'Primary navigation');

  if (fragment) nav.append(...fragment.children);

  const sectionClasses = ['nav-brand', 'nav-sections', 'nav-tools'];
  [...nav.children].forEach((section, index) => {
    if (sectionClasses[index]) section.classList.add(sectionClasses[index]);
  });

  if (!nav.querySelector('.nav-brand')) nav.append(createFallbackBrand());

  const brandLink = nav.querySelector('.nav-brand a');
  brandLink?.classList.remove('button', 'primary', 'secondary', 'accent');
  brandLink?.closest('.button-wrapper')?.classList.remove('button-wrapper');

  const menu = nav.querySelector('.nav-sections');
  if (menu) menu.id = 'nav-menu';

  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-controls', 'nav-menu');
  toggle.innerHTML = '<span aria-hidden="true"></span>';
  if (!menu && !nav.querySelector('.nav-tools')) {
    toggle.hidden = true;
    toggle.removeAttribute('aria-controls');
  }
  toggle.addEventListener('click', () => {
    setMenuState(nav, nav.dataset.expanded !== 'true');
  });
  nav.prepend(toggle);

  nav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.dataset.expanded === 'true') {
      setMenuState(nav, false);
      toggle.focus();
    }
  });

  nav.addEventListener('focusout', (event) => {
    if (!desktop.matches && !nav.contains(event.relatedTarget)) setMenuState(nav, false);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(nav, false));
  });

  desktop.addEventListener('change', () => setMenuState(nav, false));
  setMenuState(nav, false);

  const wrapper = document.createElement('div');
  wrapper.className = 'nav-wrapper';
  wrapper.append(nav);
  block.append(wrapper);
}
