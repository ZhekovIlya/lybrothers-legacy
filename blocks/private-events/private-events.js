import {
  addSectionClass,
  appendLink,
  createElement,
  findRow,
  findRows,
  getHref,
  getRows,
  getText,
} from '../shared/helpers.js';

export default function decorate(block) {
  const rows = getRows(block);
  addSectionClass(block, 'private-events');
  block.classList.add('events-grid');
  block.textContent = '';

  const content = createElement('div');
  content.append(
    createElement('p', { className: 'eyebrow', text: getText(findRow(rows, 'Eyebrow')) }),
    createElement('h2', { text: getText(findRow(rows, 'Heading')) }),
    createElement('p', { text: getText(findRow(rows, 'Copy')) }),
  );
  const action = findRow(rows, 'Action');
  appendLink(content, getText(action, 1), getHref(action, 2), 'button');

  const list = createElement('ul', { className: 'event-list' });
  list.setAttribute('aria-label', 'Private event options');
  findRows(rows, 'Option').forEach((row, index) => {
    const item = createElement('li');
    const button = createElement('button', { className: 'event-option' });
    button.type = 'button';
    button.dataset.eventOption = '';
    button.setAttribute('aria-expanded', String(index === 0));
    button.append(
      createElement('span', { text: String(index + 1).padStart(2, '0') }),
      createElement('strong', { text: getText(row, 1) }),
      createElement('i', { text: '+' }),
    );
    const detail = createElement('small', { text: getText(row, 2) });
    detail.hidden = index !== 0;
    item.append(button, detail);
    list.append(item);
  });
  block.append(content, list);
  list.dataset.eventListReady = '';
  const options = [...list.querySelectorAll('[data-event-option]')];
  block.addEventListener('click', (event) => {
    const option = event.target.closest('[data-event-option]');
    if (!option) return;
    const willOpen = option.getAttribute('aria-expanded') !== 'true';
    options.forEach((item) => {
      const isOpen = item === option && willOpen;
      item.setAttribute('aria-expanded', String(isOpen));
      const detail = item.closest('li')?.querySelector('small');
      if (detail) detail.hidden = !isOpen;
    });
  });
}
