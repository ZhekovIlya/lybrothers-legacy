import {
  addSectionClass,
  createElement,
  findRows,
  getHref,
  getPicture,
  getRows,
  getText,
} from '../shared/helpers.js';

const DEFAULT_STORIES = [
  {
    side: 'left',
    video: '/media/pour-story-agave.mp4',
    eyebrow: '01 · The Bright Pour',
    heading: 'Citrus makes the first move.',
    copy: 'A clean measure of agave meets fresh acidity—bright, precise, and built for the first sip.',
    poster: '/media/cocktail-1.png',
  },
  {
    side: 'right',
    video: '/media/pour-story-whiskey.mp4',
    eyebrow: '02 · The Slow Stir',
    heading: 'Time rounds every edge.',
    copy: 'Whiskey, cold glass and patient movement. The drink settles into silk before it reaches you.',
    poster: '/media/cocktail-2.png',
  },
];

function getPoster(row) {
  const media = getPicture(row, 6);
  const image = media?.querySelector?.('img') || (media?.tagName === 'IMG' ? media : null);
  return image?.currentSrc || image?.src || '';
}

function createStory(story, index) {
  const article = createElement('article', {
    className: `pour-story is-video-${story.side}${index === 0 ? ' is-short' : ''}`,
  });
  article.dataset.videoStory = '';

  const sticky = createElement('div', { className: 'pour-story-sticky' });
  const media = createElement('div', { className: 'pour-story-media' });
  const video = createElement('video', { className: 'pour-story-video' });
  video.muted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.poster = story.poster;
  video.setAttribute('aria-label', `${story.eyebrow}: ${story.heading}`);
  const source = createElement('source');
  source.src = story.video;
  source.type = 'video/mp4';
  video.append(source);
  media.append(video);

  const copy = createElement('div', { className: 'pour-story-copy' });
  const copyInner = createElement('div');
  copyInner.append(
    createElement('p', { className: 'eyebrow', text: story.eyebrow }),
    createElement('h2', { text: story.heading }),
    createElement('p', { text: story.copy }),
  );
  copy.append(copyInner);

  const progress = createElement('div', { className: 'pour-story-progress' });
  progress.setAttribute('aria-hidden', 'true');
  progress.append(
    createElement('span', { text: String(index + 1).padStart(2, '0') }),
    createElement('i'),
  );
  sticky.append(copy, media, progress);
  article.append(sticky);
  return article;
}

export default function decorate(block) {
  const authored = findRows(getRows(block), 'Story').map((row, index) => ({
    side: getText(row, 1).toLowerCase() === 'right' ? 'right' : 'left',
    video: getHref(row, 2) || DEFAULT_STORIES[index]?.video,
    eyebrow: getText(row, 3) || DEFAULT_STORIES[index]?.eyebrow,
    heading: getText(row, 4) || DEFAULT_STORIES[index]?.heading,
    copy: getText(row, 5) || DEFAULT_STORIES[index]?.copy,
    poster: getPoster(row) || DEFAULT_STORIES[index]?.poster,
  }));
  const stories = authored.length ? authored.slice(0, 2) : DEFAULT_STORIES;

  addSectionClass(block, 'pour-stories');
  block.dataset.pourStories = '';
  block.textContent = '';
  stories.forEach((story, index) => block.append(createStory(story, index)));
}
