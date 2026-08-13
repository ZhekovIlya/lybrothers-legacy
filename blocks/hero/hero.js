/**
 * Hero block.
 *
 * Recommended authoring shape:
 * | Hero |
 * | Eyebrow text |
 * | Main heading |
 * | Supporting copy |
 * | Call to book | tel:+34602127026 |
 * | Get directions | Google Maps URL |
 * | Image |
 */

function createElement(tag, options = {}) {
  const element = document.createElement(tag);

  if (options.className) element.className = options.className;
  if (options.text) element.textContent = options.text;

  return element;
}

function getText(cell) {
  return cell?.textContent?.trim() || '';
}

function getLink(cell) {
  const link = cell?.querySelector?.('a[href]');
  return link?.href || getText(cell);
}

function getPicture(row) {
  return row?.querySelector?.('picture');
}

function appendAction(actions, label, href, modifier) {
  if (!label || !href || /x{3,}|placeholder/i.test(href)) return;

  let url;
  try {
    url = new URL(href, window.location.href);
  } catch (error) {
    return;
  }

  if (!['http:', 'https:', 'tel:', 'mailto:'].includes(url.protocol)) return;
  if (url.protocol === 'tel:' && !/^\+?[0-9 ()-]{7,}$/.test(url.pathname)) return;

  const action = createElement('a', {
    className: `button hero-action ${modifier}`.trim(),
    text: label,
  });

  action.href = href;
  if (url.protocol.startsWith('http') && url.origin !== window.location.origin) {
    action.target = '_blank';
    action.rel = 'noopener noreferrer';
  }
  actions.append(action);
}

export default function decorate(block) {
  const rows = [...block.children];

  const eyebrow = getText(rows[0]);
  const heading = getText(rows[1]);
  const copy = getText(rows[2]);
  const callLabel = getText(rows[3]?.children?.[0]);
  const callHref = getLink(rows[3]?.children?.[1]);
  const directionsLabel = getText(rows[4]?.children?.[0]);
  const directionsHref = getLink(rows[4]?.children?.[1]);
  const picture = rows.map(getPicture).find(Boolean);

  const content = createElement('div', { className: 'hero-content' });

  if (eyebrow) {
    content.append(createElement('p', {
      className: 'hero-eyebrow',
      text: eyebrow,
    }));
  }

  if (heading) content.append(createElement('h1', { text: heading }));

  if (copy) {
    content.append(createElement('p', {
      className: 'hero-copy',
      text: copy,
    }));
  }

  const actions = createElement('p', { className: 'hero-actions' });
  appendAction(actions, callLabel, callHref, 'hero-action-call');
  appendAction(actions, directionsLabel, directionsHref, 'hero-action-directions');

  if (actions.children.length) content.append(actions);

  block.textContent = '';
  block.append(content);

  if (picture) {
    const image = picture.querySelector('img');
    if (image && !image.alt) image.alt = heading;
    const media = createElement('div', { className: 'hero-media' });
    media.append(picture);
    block.append(media);
  }
}
