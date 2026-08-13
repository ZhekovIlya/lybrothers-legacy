import {
  addSectionClass,
  createElement,
  findRow,
  getRows,
  getText,
} from '../shared/helpers.js';

export default function decorate(block) {
  const rows = getRows(block);
  addSectionClass(block, 'page-intro');
  block.classList.add('page-intro-content');
  block.textContent = '';
  block.append(
    createElement('p', { className: 'eyebrow', text: getText(findRow(rows, 'Eyebrow')) }),
    createElement('h1', { text: getText(findRow(rows, 'Heading')) }),
    createElement('p', { className: 'lede', text: getText(findRow(rows, 'Copy')) }),
  );
}
