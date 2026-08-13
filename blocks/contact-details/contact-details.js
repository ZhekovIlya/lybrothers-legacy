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
  addSectionClass(block, 'contact-page');
  block.classList.add('contact-grid');
  block.textContent = '';

  const content = createElement('div', { className: 'contact-copy' });
  content.append(
    createElement('p', { className: 'eyebrow', text: getText(findRow(rows, 'Eyebrow')) }),
    createElement('h1', { text: getText(findRow(rows, 'Heading')) }),
    createElement('p', { className: 'lede', text: getText(findRow(rows, 'Copy')) }),
  );
  const list = createElement('dl', { className: 'contact-list' });
  findRows(rows, 'Detail').forEach((row) => {
    const item = createElement('div');
    item.append(
      createElement('dt', { text: getText(row, 1) }),
      createElement('dd', { text: getText(row, 2) }),
    );
    list.append(item);
  });
  const actions = createElement('p', { className: 'contact-actions' });
  findRows(rows, 'Action').forEach((row, index) => {
    appendLink(
      actions,
      getText(row, 1),
      getHref(row, 2),
      index ? 'button button-outline' : 'button',
    );
  });
  content.append(list, actions);

  const picture = getPicture(findRow(rows, 'Image'));
  if (picture) {
    const figure = createElement('figure', { className: 'contact-image image-frame' });
    figure.append(picture);
    const caption = getText(findRow(rows, 'Caption'));
    if (caption) figure.append(createElement('figcaption', { text: caption }));
    block.append(content, figure);
  } else {
    block.append(content);
  }
}
