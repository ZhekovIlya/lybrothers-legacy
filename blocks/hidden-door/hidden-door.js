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
  addSectionClass(block, 'hidden-door');
  block.classList.add('split-layout', 'door-layout');
  block.textContent = '';

  const content = createElement('div', { className: 'editorial-copy' });
  content.append(
    createElement('p', { className: 'eyebrow', text: getText(findRow(rows, 'Eyebrow')) }),
    createElement('h2', { text: getText(findRow(rows, 'Heading')) }),
    createElement('p', { text: getText(findRow(rows, 'Copy')) }),
  );
  const details = createElement('dl', { className: 'visit-details' });
  findRows(rows, 'Detail').forEach((row) => {
    const item = createElement('div');
    item.append(
      createElement('dt', { text: getText(row, 1) }),
      createElement('dd', { text: getText(row, 2) }),
    );
    details.append(item);
  });
  const actions = createElement('p', { className: 'door-actions' });
  findRows(rows, 'Action').forEach((row, index) => {
    appendLink(actions, getText(row, 1), getHref(row, 2), index ? 'text-link' : 'button');
  });
  content.append(details, actions);

  const picture = getPicture(findRow(rows, 'Image'));
  if (picture) {
    const figure = createElement('figure', { className: 'image-frame door-image' });
    figure.append(picture);
    const caption = getText(findRow(rows, 'Caption'));
    if (caption) figure.append(createElement('figcaption', { text: caption }));
    block.append(content, figure);
  } else {
    block.append(content);
  }
}
