import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const configuredPath = getMetadata('footer');
  const footerPath = configuredPath ? new URL(configuredPath, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  block.textContent = '';
  const content = document.createElement('div');
  content.className = 'footer-content';
  if (fragment) {
    content.append(...fragment.children);
    const firstSection = content.querySelector('.section');
    firstSection?.classList.add('footer-brand');
    if (firstSection && !firstSection.querySelector('img')) {
      const logoLink = document.createElement('a');
      const logo = document.createElement('img');
      logoLink.className = 'footer-logo';
      logoLink.href = '/';
      logoLink.setAttribute('aria-label', 'LY Brothers home');
      logo.src = '/media/logo.png';
      logo.alt = 'LY Brothers Cocktail Bar';
      logo.width = 504;
      logo.height = 495;
      logoLink.append(logo);
      firstSection.prepend(logoLink);
    }
    [...content.querySelectorAll('p')]
      .find((paragraph) => paragraph.textContent.trim().startsWith('©'))
      ?.classList.add('footer-legal');
  } else {
    content.innerHTML = `
      <section class="footer-brand">
        <a class="footer-logo" href="/" aria-label="LY Brothers home"><img src="/media/logo.png" alt="LY Brothers Cocktail Bar" width="504" height="495"></a>
        <p>A hidden gem in El Raval. Artisanal mixology, rare spirits, and unforgettable nights.</p>
        <a href="https://www.instagram.com/lybrothersbar?igsh=MXhxZmczMWZsOWZueQ==" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
      </section>
      <section><h3>Explore</h3><ul><li><a href="/">Home</a></li><li><a href="/menu/">Menu</a></li><li><a href="/contact/">Contact Us</a></li></ul></section>
      <section><h3>Hours</h3><ul><li><span>Sun–Thu</span> 20:00–02:00</li><li><span>Friday</span> 20:00–03:00</li><li><span>Saturday</span> 20:00–02:00</li></ul></section>
      <section><h3>Visit Us</h3><address>Lancaster 20, 08001 BCN</address><p><a href="tel:+34602127026">+34 602 12 70 26</a><br><a href="mailto:info@lybrothers.com">info@lybrothers.com</a></p></section>
      <p class="footer-legal">© 2026 LY Brothers Cocktail Bar. All Rights Reserved.</p>`;
  }
  block.append(content);

  const footer = block.closest('footer');
  if (footer) footer.id = 'visit';
}
