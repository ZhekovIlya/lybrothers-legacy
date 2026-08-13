import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

function createLink(label, href) {
  const link = document.createElement('a');
  link.href = href;
  link.textContent = label;
  return link;
}

function createFallbackFooter() {
  const brand = document.createElement('div');
  brand.className = 'section footer-brand';
  const brandHeading = document.createElement('h2');
  brandHeading.textContent = 'Ly Brothers';
  const brandCopy = document.createElement('p');
  brandCopy.textContent = 'Cócteles clásicos, recetas propias y una atmósfera íntima en Barcelona.';
  brand.append(brandHeading, brandCopy);

  const location = document.createElement('div');
  location.className = 'section';
  const locationHeading = document.createElement('h3');
  locationHeading.textContent = 'Encuéntranos';
  const locationCopy = document.createElement('p');
  locationCopy.textContent = 'Barcelona · El Raval';
  const directions = document.createElement('p');
  directions.append(createLink(
    'Cómo llegar',
    'https://maps.app.goo.gl/PwqVrGvxxgDSQeHF8',
  ));
  location.append(locationHeading, locationCopy, directions);

  const contact = document.createElement('div');
  contact.className = 'section';
  const contactHeading = document.createElement('h3');
  contactHeading.textContent = 'Contacto';
  const phone = document.createElement('p');
  phone.append(createLink('+34 602 127 026', 'tel:+34602127026'));
  const copyright = document.createElement('p');
  copyright.className = 'footer-legal';
  copyright.textContent = `© ${new Date().getFullYear()} Ly Brothers`;
  contact.append(contactHeading, phone, copyright);

  return [brand, location, contact];
}

export default async function decorate(block) {
  const configuredPath = getMetadata('footer');
  const footerPath = configuredPath ? new URL(configuredPath, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  block.textContent = '';
  const content = document.createElement('div');
  content.className = 'footer-content';
  content.append(...(fragment ? fragment.children : createFallbackFooter()));
  block.append(content);

  const footer = block.closest('footer');
  if (footer) footer.id = 'visit';
}
