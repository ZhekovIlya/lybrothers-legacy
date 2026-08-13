import { loadSections } from '../../scripts/aem.js';
import { decorateMain } from '../../scripts/scripts.js';

export async function loadFragment(path) {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return null;

  try {
    const response = await fetch(`${path}.plain.html`);
    if (!response.ok) return null;

    const main = document.createElement('main');
    main.innerHTML = await response.text();

    const resetMediaBase = (tag, attribute) => {
      main.querySelectorAll(`${tag}[${attribute}^="./media_"]`).forEach((element) => {
        const fragmentBase = new URL(path, window.location);
        element[attribute] = new URL(element.getAttribute(attribute), fragmentBase).href;
      });
    };

    resetMediaBase('img', 'src');
    resetMediaBase('source', 'srcset');

    decorateMain(main);
    await loadSections(main);
    return main;
  } catch (error) {
    // A missing optional fragment must not prevent the page from rendering.
    return null;
  }
}

export default async function decorate(block) {
  const link = block.querySelector('a');
  const path = link ? new URL(link.href).pathname : block.textContent.trim();
  const fragment = await loadFragment(path);
  if (!fragment) return;

  const wrapper = block.closest('.fragment-wrapper');
  const section = wrapper?.closest('.section');
  if (!wrapper) return;

  if (section && section.children.length === 1) {
    section.replaceWith(...fragment.childNodes);
  } else {
    fragment.querySelectorAll(':scope > .section').forEach((fragmentSection) => {
      wrapper.before(...fragmentSection.childNodes);
    });
    wrapper.remove();
  }
}
