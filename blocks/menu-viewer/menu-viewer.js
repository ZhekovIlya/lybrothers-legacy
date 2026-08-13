import {
  addSectionClass,
  createElement,
  findRows,
  getPicture,
  getRows,
  getText,
} from '../shared/helpers.js';

export default function decorate(block) {
  const rows = getRows(block);
  const menus = findRows(rows, 'Menu');
  addSectionClass(block, 'menu-viewer');
  block.textContent = '';

  const tabs = createElement('div', { className: 'menu-tabs' });
  tabs.setAttribute('role', 'tablist');
  tabs.setAttribute('aria-label', 'Choose a menu');
  const panels = createElement('div', { className: 'menu-panels' });

  menus.forEach((row, index) => {
    const key = `menu-${index}`;
    const label = getText(row, 1);
    const picture = getPicture(row, 2);
    if (!picture) return;
    const tab = createElement('button', { text: label });
    tab.type = 'button';
    tab.id = `${key}-tab`;
    tab.dataset.menuTab = key;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', String(index === 0));
    tab.setAttribute('aria-controls', `${key}-panel`);

    const panel = createElement('figure');
    panel.id = `${key}-panel`;
    panel.dataset.menuPanel = key;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.hidden = index !== 0;
    const button = createElement('button', { className: 'menu-image-button' });
    button.type = 'button';
    const image = picture.tagName === 'PICTURE' ? picture.querySelector('img') : picture;
    button.dataset.menuZoom = image?.currentSrc || image?.src || '';
    button.setAttribute('aria-label', `Open the ${label} menu full screen`);
    button.append(picture);
    panel.append(button, createElement('figcaption', { text: 'Tap the menu to view it full screen.' }));
    tabs.append(tab);
    panels.append(panel);
  });

  const dialog = createElement('dialog', { className: 'menu-dialog' });
  dialog.setAttribute('aria-label', 'Full screen menu');
  const close = createElement('button', { className: 'dialog-close', text: '×' });
  close.type = 'button';
  close.setAttribute('aria-label', 'Close full screen menu');
  const dialogImage = createElement('img');
  dialogImage.alt = '';
  dialog.append(close, dialogImage);
  block.append(tabs, panels, dialog);
}
