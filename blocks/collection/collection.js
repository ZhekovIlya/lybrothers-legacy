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
    const caption = createElement('figcaption');
    caption.append(
      createElement('span', { text: String(index + 1).padStart(2, '0') }),
      document.createTextNode(getText(row, 2)),
    );
    figure.append(picture, caption);
    gallery.append(figure);
  });

  const footer = createElement('div', { className: 'collection-footer' });
  footer.append(createElement('p', { text: getText(findRow(rows, 'Copy')) }));
  const action = findRow(rows, 'Action');
  appendLink(footer, getText(action, 1), getHref(action, 2), 'button button-outline');
  block.append(heading, gallery, footer);
}
