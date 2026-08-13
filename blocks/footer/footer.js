import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const configuredPath = getMetadata('footer');
  const footerPath = configuredPath ? new URL(configuredPath, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  block.textContent = '';
  if (!fragment) {
    block.closest('footer')?.setAttribute('hidden', '');
    return;
  }

  const content = document.createElement('div');
  content.className = 'footer-content';
  content.append(...fragment.children);
  block.append(content);
}
