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
  const logo = document.createElement('img');

  wrapper.className = 'nav-brand';
  brand.href = '/';
  brand.setAttribute('aria-label', 'Ly Brothers home');
  logo.src = '/media/logo.png';
  logo.alt = 'LY Brothers Cocktail Bar';
  logo.width = 504;
  logo.height = 495;
  brand.append(logo);
  wrapper.append(brand);
  return wrapper;
}

function createFallbackSections() {
  const wrapper = document.createElement('div');
  const list = document.createElement('ul');
  const links = [
    ['Home', '/'],
    ['Menu', '/menu/'],
    ['Contact', '/contact/'],
  ];

  links.forEach(([label, href]) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
    const linkPath = href.replace(/\/+$/, '') || '/';
    link.href = href;
    link.textContent = label;
    if (currentPath === linkPath) link.setAttribute('aria-current', 'page');
    item.append(link);
    list.append(item);
  });

  wrapper.className = 'nav-sections';
  wrapper.append(list);
  return wrapper;
}

function createFallbackTools() {
  const wrapper = document.createElement('div');
  const link = document.createElement('a');
  wrapper.className = 'nav-tools';
  link.className = 'button button-outline';
  link.href = 'tel:+34602127026';
  link.textContent = 'Call Us';
  wrapper.append(link);
  return wrapper;
}

function createTopbar() {
  const topbar = document.createElement('div');
  topbar.className = 'site-topbar';
  topbar.innerHTML = `
    <div>
      <a href="https://maps.app.goo.gl/PwqVrGvxxgDSQeHF8" target="_blank" rel="noopener noreferrer">Carrer de Lancaster, 20 · Barcelona</a>
      <a href="tel:+34602127026">+34 602 12 70 26</a>
    </div>`;
  return topbar;
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
  else nav.append(createFallbackBrand(), createFallbackSections(), createFallbackTools());

  const sectionClasses = ['nav-brand', 'nav-sections', 'nav-tools'];
  [...nav.children].forEach((section, index) => {
    if (sectionClasses[index]) section.classList.add(sectionClasses[index]);
  });

  if (!nav.querySelector('.nav-brand')) nav.append(createFallbackBrand());

  const brandLink = nav.querySelector('.nav-brand a');
  brandLink?.classList.remove('button', 'primary', 'secondary', 'accent');
  brandLink?.closest('.button-wrapper')?.classList.remove('button-wrapper');
  if (brandLink && !brandLink.querySelector('img')) {
    const logo = document.createElement('img');
    logo.src = '/media/logo.png';
    logo.alt = 'LY Brothers Cocktail Bar';
    logo.width = 504;
    logo.height = 495;
    brandLink.textContent = '';
    brandLink.append(logo);
  }

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
  wrapper.append(createTopbar(), nav);
  block.append(wrapper);
}
