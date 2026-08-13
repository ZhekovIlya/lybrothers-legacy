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
  const labelled = findRow(rows, 'Heading');
  const eyebrow = labelled ? getText(findRow(rows, 'Eyebrow')) : getText(rows[0], 0);
  const heading = labelled ? getText(labelled) : getText(rows[1], 0);
  const copy = labelled ? getText(findRow(rows, 'Copy')) : getText(rows[2], 0);
  const picture = labelled
    ? getPicture(findRow(rows, 'Image'))
    : rows.map((row) => getPicture(row, 0)).find(Boolean);
  const actions = labelled ? findRows(rows, 'Action') : rows.slice(3, 5);

  addSectionClass(block, 'home-hero');
  block.id = 'home';
  block.textContent = '';

  const backdrop = createElement('div', { className: 'home-hero-backdrop' });
  backdrop.setAttribute('aria-hidden', 'true');
  if (picture) backdrop.append(picture);

  const content = createElement('div', { className: 'site-shell home-hero-content' });
  content.append(
    createElement('p', { className: 'eyebrow', text: eyebrow }),
    createElement('h1', { text: heading }),
    createElement('p', { className: 'home-hero-copy', text: copy }),
  );
  const actionList = createElement('p', { className: 'hero-actions' });
  actions.forEach((row, index) => {
    const label = labelled ? getText(row, 1) : getText(row, 0);
    const href = labelled ? getHref(row, 2) : getHref(row, 1);
    appendLink(actionList, label, href, index ? 'text-link' : 'button');
  });
  content.append(actionList);

  const cue = createElement('a', { className: 'scroll-cue' });
  cue.href = '#ritual';
  cue.append(
    createElement('span', {
      text: getText(findRow(rows, 'Scroll Label')) || 'Discover',
    }),
    createElement('i'),
  );
  block.append(backdrop, content, cue);
}
