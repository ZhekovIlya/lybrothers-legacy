import {
  addSectionClass,
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
  const eyebrow = getText(findRow(rows, 'Eyebrow')) || 'The Tequila Ritual';
  const heading = getText(findRow(rows, 'Heading')) || 'You scroll. We mix.';
  const copy = getText(findRow(rows, 'Copy'));
  const videoSrc = getHref(findRow(rows, 'Video')) || '/media/cocktail-making.mp4';
  const poster = getPicture(findRow(rows, 'Poster'));
  const steps = findRows(rows, 'Step');

  addSectionClass(block, 'scroll-ritual');
  block.dataset.scrollVideo = '';
  block.textContent = '';

  const sticky = createElement('div', { className: 'ritual-sticky' });
  const video = createElement('video', { className: 'ritual-video' });
  video.muted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.setAttribute('aria-label', 'A bartender making a cocktail as the page scrolls');
  if (poster) video.poster = poster.currentSrc || poster.src || '';
  const source = createElement('source');
  source.src = videoSrc;
  source.type = 'video/mp4';
  video.append(source);

  const shade = createElement('div', { className: 'ritual-shade' });
  shade.setAttribute('aria-hidden', 'true');
  const layout = createElement('div', { className: 'site-shell ritual-layout' });
  const title = createElement('div', { className: 'ritual-heading' });
  title.append(
    createElement('p', { className: 'eyebrow', text: eyebrow }),
    createElement('h2', { text: heading }),
  );
  if (copy) title.append(createElement('p', { text: copy }));

  const stepList = createElement('div', { className: 'ritual-steps' });
  const authoredSteps = steps.length ? steps : [
    ['01', 'Measure the agave', 'Precision first. Character follows.'],
    ['02', 'Shake the night', 'Ice, citrus and movement become texture.'],
    ['03', 'Pour the reveal', 'The final detail is always yours.'],
  ];

  authoredSteps.forEach((row, index) => {
    const values = Array.isArray(row)
      ? row
      : [getText(row, 1), getText(row, 2), getText(row, 3)];
    const article = createElement('article', {
      className: `ritual-step${index === 0 ? ' is-active' : ''}`,
    });
    article.dataset.step = index;
    const body = createElement('div');
    body.append(
      createElement('h3', { text: values[1] }),
      createElement('p', { text: values[2] }),
    );
    article.append(createElement('span', { text: values[0] }), body);
    stepList.append(article);
  });

  const progress = createElement('div', { className: 'ritual-progress' });
  progress.setAttribute('aria-hidden', 'true');
  progress.append(createElement('i'));
  layout.append(title, stepList);
  sticky.append(video, shade, layout, progress);
  block.append(sticky);
}
