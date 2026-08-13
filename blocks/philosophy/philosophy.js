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
  const picture = getPicture(findRow(rows, 'Image'));
  const copies = findRows(rows, 'Copy');
  addSectionClass(block, 'philosophy');
  block.classList.add('split-layout');
  block.textContent = '';

  if (picture) {
    const figure = createElement('figure', { className: 'editorial-image image-frame' });
    figure.append(picture);
    const caption = getText(findRow(rows, 'Caption'));
    if (caption) figure.append(createElement('figcaption', { text: caption }));
    block.append(figure);
  }

  const content = createElement('div', { className: 'editorial-copy' });
  content.append(
    createElement('p', { className: 'eyebrow', text: getText(findRow(rows, 'Eyebrow')) }),
    createElement('h2', { text: getText(findRow(rows, 'Heading')) }),
  );
  copies.forEach((row) => content.append(createElement('p', { text: getText(row) })));
  const action = findRow(rows, 'Action');
  appendLink(content, getText(action, 1), getHref(action, 2));
  block.append(content);
}
