import {
  addSectionClass,
  appendLink,
  createElement,
  findRow,
  findRows,
  getHref,
  getPicture,
  getRows,
  getText,
} from '../shared/helpers.js';

export default function decorate(block) {
  const rows = getRows(block);
  addSectionClass(block, 'collection');
  block.textContent = '';

  const heading = createElement('header', { className: 'section-heading' });
  heading.append(
    createElement('p', { className: 'eyebrow', text: getText(findRow(rows, 'Eyebrow')) }),
    createElement('h2', { text: getText(findRow(rows, 'Heading')) }),
  );

  const gallery = createElement('div', { className: 'cocktail-gallery' });
  findRows(rows, 'Cocktail').forEach((row, index) => {
    const picture = getPicture(row, 1);
    if (!picture) return;
    const figure = createElement('figure');
    const button = createElement('button', { className: 'cocktail-card' });
    button.type = 'button';
    button.dataset.cocktailZoom = '';
    const caption = createElement('figcaption');
    caption.append(
      createElement('span', { text: String(index + 1).padStart(2, '0') }),
      document.createTextNode(` ${getText(row, 2)}`),
    );
    button.setAttribute('aria-label', `View ${getText(row, 2)}`);
    button.append(picture, caption);
    figure.append(button);
    gallery.append(figure);
  });

  const dialog = createElement('dialog', { className: 'cocktail-dialog' });
  dialog.setAttribute('aria-label', 'Cocktail detail');
  const close = createElement('button', { className: 'dialog-close', text: '×' });
  close.type = 'button';
  close.setAttribute('aria-label', 'Close cocktail detail');
  const previous = createElement('button', { className: 'cocktail-dialog-nav previous', text: '←' });
  previous.type = 'button';
  previous.setAttribute('aria-label', 'Previous cocktail');
  const next = createElement('button', { className: 'cocktail-dialog-nav next', text: '→' });
  next.type = 'button';
  next.setAttribute('aria-label', 'Next cocktail');
  const dialogImage = createElement('img');
  dialogImage.alt = '';
  const dialogCaption = createElement('p', { className: 'cocktail-dialog-caption' });
  dialog.append(close, previous, dialogImage, dialogCaption, next);

  const footer = createElement('div', { className: 'collection-footer' });
  footer.append(createElement('p', { text: getText(findRow(rows, 'Copy')) }));
  const action = findRow(rows, 'Action');
  appendLink(footer, getText(action, 1), getHref(action, 2), 'button button-outline');
  block.append(heading, gallery, footer, dialog);
}
