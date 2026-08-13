export function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  if (options.className) element.className = options.className;
  if (options.text) element.textContent = options.text;
  return element;
}

export function getRows(block) {
  return [...block.children];
}

export function getCell(row, index = 1) {
  return row?.children?.[index] || null;
}

export function getText(row, index = 1) {
  return getCell(row, index)?.textContent?.trim() || '';
}

export function getPicture(row, index = 1) {
  const cell = getCell(row, index);
  const media = cell?.querySelector('picture')
    || cell?.querySelector('img')
    || row?.querySelector?.('picture')
    || row?.querySelector?.('img')
    || null;
  if (media) return media;

  const source = cell?.querySelector('a[href]')?.getAttribute('href')
    || cell?.textContent?.trim();
  if (!source || !/\.(avif|gif|jpe?g|png|webp)(\?.*)?$/i.test(source)) return null;
  const image = document.createElement('img');
  image.src = source;
  image.alt = cell?.textContent?.trim() || '';
  image.loading = 'lazy';
  return image;
}

export function getHref(row, index = 1) {
  const cell = getCell(row, index);
  return cell?.querySelector('a[href]')?.href || cell?.textContent?.trim() || '';
}

export function findRow(rows, label) {
  const normalized = label.toLowerCase();
  return rows.find((row) => getText(row, 0).toLowerCase() === normalized);
}

export function findRows(rows, label) {
  const normalized = label.toLowerCase();
  return rows.filter((row) => getText(row, 0).toLowerCase() === normalized);
}

export function addSectionClass(block, ...classes) {
  block.closest('.section')?.classList.add(...classes);
}

export function appendLink(parent, label, href, className = 'text-link') {
  if (!label || !href) return;
  const link = createElement('a', { className, text: label });
  link.href = href;
  if (/^https?:/i.test(href) && new URL(href, window.location.href).origin !== window.location.origin) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
  parent.append(link);
}
